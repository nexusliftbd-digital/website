import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'nexus_admin_session';

async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const SECRET = process.env.NEXUS_SESSION_SECRET || 'nexus-lift-secure-session-key-2026';
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'ihttushar134@gmail.com';
    
    const [payload, sig] = token.split('.');
    if (!payload || !sig) return false;
    
    // Web Crypto API for Edge compatibility
    const encoder = new TextEncoder();
    const keyData = encoder.encode(SECRET);
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign', 'verify']
    );
    
    const signatureBytes = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(payload)
    );
    
    const expectedSig = Array.from(new Uint8Array(signatureBytes))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
      
    if (expectedSig !== sig) return false;
    const { email, exp } = JSON.parse(atob(payload));
    if (email !== ADMIN_EMAIL) return false;
    if (Date.now() > exp) return false;
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect all /dashboard routes
  if (pathname.startsWith('/dashboard')) {
    const cookie = req.cookies.get(COOKIE_NAME);

    if (!cookie?.value || !(await verifySessionToken(cookie.value))) {
      // Redirect to home — no dashboard content is ever sent to the browser
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/';
      loginUrl.searchParams.set('auth_required', '1');
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
