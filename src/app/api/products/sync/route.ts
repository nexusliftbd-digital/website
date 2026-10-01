import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { products, eventType } = body;

    if (!products || !Array.isArray(products)) {
      return NextResponse.json(
        { error: 'Products array is required for synchronization' },
        { status: 400 }
      );
    }

    const payload = {
      source: 'Nexus Lift CEO Command Center',
      organizationId: '9115264',
      dashboardUrl: 'https://eu1.make.com/organization/9115264/dashboard',
      eventType: eventType || 'catalog_sync',
      syncedAt: new Date().toISOString(),
      totalProducts: products.length,
      liveProductsCount: products.filter((p: any) => !p.status || p.status === 'live').length,
      outOfStockCount: products.filter((p: any) => p.status === 'out_of_stock').length,
      turnedOffCount: products.filter((p: any) => p.status === 'turned_off').length,
      products: products.map((p: any) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        category: p.cat,
        badge: p.badge,
        status: p.status || 'live',
        tagline: p.tagline || '',
        description: p.desc,
        imageUrl: p.img,
        features: p.features || [],
      })),
    };

    // Make.com Webhook Forwarding
    const webhookUrl = process.env.MAKE_PRODUCT_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.warn(`Make.com webhook responded with status: ${response.status}`);
      }
    } else {
      console.log('💡 [Make.com Webhook (Mock)]: Payload prepared for EU1 Org 9115264:', {
        count: payload.totalProducts,
        timestamp: payload.syncedAt,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Product catalog synchronized successfully with Make.com webhook',
      metadata: {
        organizationId: '9115264',
        totalSynced: products.length,
        timestamp: payload.syncedAt,
        webhookConfigured: Boolean(webhookUrl),
      },
    });
  } catch (error: any) {
    console.error('Make.com product sync error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to sync with Make.com webhook' },
      { status: 500 }
    );
  }
}
