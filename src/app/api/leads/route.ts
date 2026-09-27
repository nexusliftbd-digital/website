import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, source } = body;

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const leadData = {
        phone,
        source: source || 'Lead Magnet PDF',
        timestamp: new Date().toISOString()
    };

    // 💡 PRODUCTION READY: Sending to Webhook (Make.com/Zapier)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
    }

    return NextResponse.json({
        success: true,
        message: 'Lead captured successfully',
        data: leadData
    }, { status: 200 });

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
