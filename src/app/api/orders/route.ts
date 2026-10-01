import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      customerName, 
      phone, 
      businessName, 
      productId, 
      productType, 
      amount, 
      trxId, 
      requirements 
    } = body;

    if (!phone || !productId) {
      return NextResponse.json({ error: 'Phone and Product ID are required' }, { status: 400 });
    }

    const orderData = {
      orderId: 'NL-' + Date.now().toString().slice(-6),
      customerName: customerName || 'Anonymous',
      phone,
      businessName: businessName || 'Not specified',
      productId,
      productType: productType || 'custom', // 'ready' or 'custom'
      amount: amount || 0,
      trxId: trxId || 'N/A',
      requirements: requirements || '',
      status: 'pending',
      timestamp: new Date().toISOString()
    };

    // 1. Fallback local persistence (orders.json)
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, 'orders.json');
      let existingOrders: any[] = [];
      if (fs.existsSync(filePath)) {
        existingOrders = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
      }
      existingOrders.unshift(orderData);
      fs.writeFileSync(filePath, JSON.stringify(existingOrders, null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Local order storage error:', fsErr);
    }

    // 2. Production Webhook for Google Sheets / Automation (Make.com/Zapier etc)
    const webhookUrl = process.env.ORDER_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL;
    let webhookSuccess = false;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        });
        webhookSuccess = true;
      } catch (err) {
        console.error('Order webhook dispatch error:', err);
      }
    }

    // 3. Automated product delivery check
    let autoDeliveryLink = null;
    if (productType === 'ready') {
      // Mock instant delivery link for Ready SOPs/Templates
      autoDeliveryLink = "https://drive.google.com/drive/folders/nexuslift-auto-delivery-placeholder";
    }

    return NextResponse.json({
      success: true,
      message: 'Order captured and synced to Google Sheets',
      orderId: orderData.orderId,
      autoDeliveryLink,
      webhookSuccess
    }, { status: 200 });

  } catch (error) {
    console.error('Order capture error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
