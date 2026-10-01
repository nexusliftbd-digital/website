import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, name, businessName, score, source, answers } = body;

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const leadData = {
      phone,
      name: name || 'Anonymous Entrepreneur',
      businessName: businessName || 'Not specified',
      score: score !== undefined ? score : null,
      source: source || 'Growth Audit / Website',
      answers: answers || null,
      timestamp: new Date().toISOString()
    };

    // 1. Fallback local persistence (leads.json) so no data is ever lost
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, 'leads.json');
      let existingLeads: any[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingLeads = JSON.parse(fileContent || '[]');
      }
      existingLeads.unshift(leadData);
      fs.writeFileSync(filePath, JSON.stringify(existingLeads, null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Local lead storage error:', fsErr);
    }

    // 2. Production Webhook (Make.com / Zapier / Google Sheets)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData),
        });
      } catch (webhookErr) {
        console.error('Webhook dispatch error:', webhookErr);
      }
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
