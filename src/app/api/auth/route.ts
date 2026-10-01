import { NextResponse } from 'next/server';
import crypto from 'crypto';

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

function generateSessionToken(secret: string): string {
  const payload = `admin_${Date.now()}`;
  const hmac = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return `${payload}.${hmac}`;
}

export function verifySessionToken(token: string, secret: string): boolean {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payload, providedHmac] = parts;
  const expectedHmac = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  if (providedHmac.length !== expectedHmac.length) return false;
  return crypto.timingSafeEqual(Buffer.from(providedHmac), Buffer.from(expectedHmac));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const expectedEmail = process.env.AUTH_EMAIL || 'ihttushar134@gmail.com';
    const expectedPassword = process.env.AUTH_PASSWORD || '1234567890';
    const secret = process.env.AUTH_SESSION_SECRET || 'nexus-lift-secure-session-key-2026';

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const emailMatch = safeCompare(String(email).trim().toLowerCase(), expectedEmail.trim().toLowerCase());
    const passMatch = safeCompare(String(password), expectedPassword);

    if (!emailMatch || !passMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const sessionToken = generateSessionToken(secret);

    const response = NextResponse.json({
      success: true,
      message: 'Authenticated successfully'
    });

    response.cookies.set('nexus_admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const secret = process.env.AUTH_SESSION_SECRET || 'nexus-lift-secure-session-key-2026';
  const cookieHeader = request.headers.get('cookie') || '';
  const match = cookieHeader.match(/nexus_admin_session=([^;]+)/);
  const token = match ? match[1] : null;

  if (token && verifySessionToken(token, secret)) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.set('nexus_admin_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  });
  return response;
}
