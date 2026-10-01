import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, ProductDef } from '@/data/products';
import Navbar from '@/components/layout/Navbar';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: 'Product Not Found — Nexus Lift' };

  return {
    title: `${product.title} (${product.price}) — Nexus Lift Business OS`,
    description: product.desc,
    openGraph: {
      title: `${product.title} — Business Operating System`,
      description: product.desc,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product || product.status === 'turned_off') {
    notFound();
  }

  const categoryNames: Record<string, string> = {
    foundation: '🏗️ 1. Build Your Business',
    sales: '🚀 2. Get More Customers',
    operations: '⚙️ 3. Fix Your Operations',
    finance: '💰 4. Control Your Numbers',
    team: '👥 5. Build Your Team',
    executive: '🤖 6. Scale With AI & OS',
  };

  const relatedProducts = products
    .filter((p) => p.cat === product.cat && p.id !== product.id)
    .slice(0, 3);

  const defaultPainPoint = product.painPoint || "ব্যবসার অভ্যন্তরীণ সিস্টেম ও ডকুমেন্টস অগোছালো থাকার কারণে ডেলিভারি ও সেলস স্কেল করতে সমস্যা হচ্ছে?";
  const defaultFaqs = product.faqs && product.faqs.length > 0 ? product.faqs : [
    {
      q: "অর্ডার করার পর ফাইলগুলো আমি কীভাবে পাব?",
      a: "অর্ডার কনফার্মেশনের পর আমাদের টিম ৪৮ থেকে ৭২ ঘণ্টার মধ্যে সম্পূর্ণ কাস্টমাইজড এডিটেবল Word (.docx), প্রিন্ট-রেডি PDF ও ক্লাউড ড্রাইভ লিংক আপনার হোয়াটসঅ্যাপ ও ইমেইলে পাঠিয়ে দিবে।"
    },
    {
      q: "এটি কি আমার ব্যবসার জন্য কাস্টমাইজ করা থাকবে?",
      a: "হ্যাঁ, আপনার কোম্পানির নাম, লোগো, তথ্য এবং অপারেশনাল রুলস অনুযায়ী ১০০% পারসোনালাইজড করে ডেলিভারি দেওয়া হবে।"
    },
    {
      q: "পেমেন্ট প্রসেস কী?",
      a: "আমরা ১০০% ভেরিফাইড বিকাশ মার্চেন্ট ও অফিসিয়াল ব্যাংক ট্রান্সফার গ্রহণ করি। ডেলিভারির পর আনলিমিটেড রিভিশন সুবিধা রয়েছে।"
    }
  ];

  const whatsappMessage = encodeURIComponent(
    `সালাম, আমি "${product.title}" (${product.price}) এর বিস্তারিত জানতে ও অর্ডার করতে চাই।`
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#101828]">
      {/* ─── JSON-LD PRODUCT SCHEMA ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": product.title,
                "description": product.desc,
                "image": `https://nexuslift.xyz${product.img}`,
                "offers": {
                  "@type": "Offer",
                  "price": product.price.replace(/[^0-9]/g, '') || "1000",
                  "priceCurrency": "BDT",
                  "availability": product.status === 'out_of_stock'
                    ? "https://schema.org/OutOfStock"
                    : "https://schema.org/InStock",
                  "url": `https://nexuslift.xyz/products/${product.id}`,
                  "seller": {
                    "@type": "Organization",
                    "name": "Nexus Lift"
                  }
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://nexuslift.xyz/preview"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://nexuslift.xyz/preview#products"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": product.title,
                    "item": `https://nexuslift.xyz/products/${product.id}`
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* ─── TOP ANNOUNCEMENT ─── */}
      <div className="bg-[#0B1733] text-[#dce7f7] text-[13px] py-[9px] border-b border-white/10">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex justify-between items-center gap-3">
          <span>Business System Detail Architecture — ঢাকা, বাংলাদেশ</span>
          <span className="shrink-0">
            SLA: ৪৮–৭২ ঘণ্টার ডেলিভারি ·{' '}
            <a href="https://wa.me/8801814716713" className="text-[#43A7E8] font-bold hover:underline">
              WhatsApp: 01814-716713
            </a>
          </span>
        </div>
      </div>

      <Navbar />

      {/* ─── BREADCRUMB ─── */}
      <div className="bg-white border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex items-center gap-2 text-xs font-semibold text-[#64748B]">
          <Link href="/preview" className="hover:text-[#0B1733]">Home</Link>
          <span>/</span>
          <Link href="/preview#products" className="hover:text-[#0B1733]">Products</Link>
          <span>/</span>
          <span className="text-[#1971A5] font-bold">{product.title}</span>
        </div>
      </div>

      <main className="max-w-[1160px] mx-auto px-4 md:px-0 py-10 md:py-16">

        {/* ─── PRODUCT HERO SECTION ─── */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start mb-16">
          {/* Left: Content & Architecture */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-[#0B1733] text-white text-xs font-black px-3 py-1 rounded-md tracking-wider">
                {product.badge}
              </span>
              <span className="bg-[#E0F2FE] text-[#0369A1] text-xs font-bold px-3 py-1 rounded-md">
                {categoryNames[product.cat] || product.cat}
              </span>
              {product.popular && (
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                  🔥 Best Seller
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-[#0B1733] leading-tight mb-3">
              {product.title}
            </h1>

            {product.tagline && (
              <p className="text-lg md:text-xl font-bold text-[#1971A5] mb-5">
                {product.tagline}
              </p>
            )}

            <p className="text-[16px] text-[#374151] leading-relaxed mb-8">
              {product.desc}
            </p>

            {/* Pain Point Callout */}
            <div className="bg-[#FEF2F2] border-l-4 border-[#EF4444] p-5 rounded-r-2xl mb-8">
              <div className="text-xs font-black text-[#991B1B] uppercase tracking-wider mb-1">
                ⚠️ এই সমস্যাটি কি আপনার বিজনেসে হচ্ছে?
              </div>
              <p className="text-sm font-bold text-[#7F1D1D] leading-snug">
                "{defaultPainPoint}"
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm mb-8">
              <h3 className="text-sm font-black text-[#0B1733] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1971A5]"></span>
                প্যাকেজের সাথে আপনি যা যা পাবেন (Deliverables & Assets)
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#374151] font-medium">
                    <span className="text-[#10B981] font-bold shrink-0 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Assurance Bar */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white border border-[#E2E8F0] p-3 rounded-xl">
                <div className="text-xs text-[#64748B] font-bold">Delivery SLA</div>
                <div className="text-sm font-black text-[#0B1733]">48–72 Hours</div>
              </div>
              <div className="bg-white border border-[#E2E8F0] p-3 rounded-xl">
                <div className="text-xs text-[#64748B] font-bold">Formats</div>
                <div className="text-sm font-black text-[#0B1733]">PDF + Word (.docx)</div>
              </div>
              <div className="bg-white border border-[#E2E8F0] p-3 rounded-xl">
                <div className="text-xs text-[#64748B] font-bold">Support</div>
                <div className="text-sm font-black text-[#0B1733]">100% Revision</div>
              </div>
            </div>
          </div>

          {/* Right: Pricing & Order Action Card */}
          <div className="sticky top-6">
            <div className="bg-[#0B1733] text-white rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#43A7E8]/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Visual Preview */}
              <div className="h-[200px] bg-white/5 rounded-2xl flex items-center justify-center p-6 mb-6 border border-white/10 relative">
                <div className="relative w-[180px] h-[150px]">
                  <Image src={product.img} alt={product.title} fill className="object-contain" priority />
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-6 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-[#94A3B8] font-bold uppercase tracking-wider block">Fixed Investment</span>
                  <span className="text-3xl md:text-4xl font-black text-[#43A7E8]">{product.price}</span>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-bold border border-emerald-500/30">
                  Instant Setup
                </span>
              </div>

              {product.status === 'out_of_stock' ? (
                <button
                  disabled
                  className="w-full text-center py-4 bg-gray-600 text-gray-300 font-black text-sm rounded-xl cursor-not-allowed mb-4"
                >
                  🚫 স্টক আউট (Temporarily Sold Out)
                </button>
              ) : (
                <a
                  href={`https://wa.me/8801814716713?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center py-4 bg-[#43A7E8] text-[#0B1733] font-black text-base rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-[#43A7E8]/20 mb-4"
                >
                  WhatsApp এ অর্ডার কনফার্ম করুন →
                </a>
              )}

              <p className="text-center text-xs text-[#94A3B8] leading-relaxed">
                অর্ডার প্রেস করার পর সরাসরি আমাদের সিনিয়র বিজনেস আর্কিটেক্টের সাথে হোয়াটসঅ্যাপে কানেক্ট হবেন।
              </p>
            </div>
          </div>
        </div>

        {/* ─── DETAILED FREQUENTLY ASKED QUESTIONS ─── */}
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 mb-16 shadow-sm">
          <div className="max-w-[760px]">
            <span className="text-xs font-black text-[#1971A5] uppercase tracking-wider block mb-2">
              Common Questions & Clarifications
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B1733] mb-6">
              {product.title} নিয়ে সচরাচর জিজ্ঞাসিত প্রশ্ন
            </h2>

            <div className="space-y-6">
              {defaultFaqs.map((faq, i) => (
                <div key={i} className="border-b border-[#F1F5F9] pb-5 last:border-b-0">
                  <h4 className="text-base font-black text-[#0B1733] mb-2 flex items-start gap-2">
                    <span className="text-[#1971A5]">Q:</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RELATED ARCHITECTURAL MODULES ─── */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-xs font-black text-[#1971A5] uppercase tracking-wider block mb-1">
                  Connected Systems
                </span>
                <h3 className="text-xl md:text-2xl font-black text-[#0B1733]">
                  এই ক্যাটাগরির অন্যান্য সিস্টেম ও টুলস
                </h3>
              </div>
              <Link href="/preview#products" className="text-xs font-bold text-[#1971A5] hover:underline">
                সম্পূর্ণ ক্যাটালগ দেখুন →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}`}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#1971A5] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black uppercase text-[#1971A5] bg-[#E0F2FE] px-2 py-0.5 rounded">
                        {rel.badge}
                      </span>
                      <span className="text-sm font-black text-[#0B1733]">{rel.price}</span>
                    </div>
                    <h4 className="text-base font-black text-[#0B1733] group-hover:text-[#1971A5] transition mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#64748B] line-clamp-2 mb-4">
                      {rel.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#1971A5] flex items-center gap-1">
                    বিস্তারিত আর্কিটেকচার দেখুন →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#071127] text-[#CBD5E1] py-10 text-sm border-t border-white/10 mt-20 mb-20 md:mb-0">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-[#CBD5E1]">
            © 2026 Nexus Lift. Connecting Sources, Lifting Business.
          </div>
          <div className="flex gap-6 text-xs text-[#CBD5E1]">
            <Link href="/preview" className="hover:text-white transition">Home</Link>
            <Link href="/preview#products" className="hover:text-white transition">Products</Link>
            <Link href="/preview#diagnose" className="hover:text-white transition">AI Diagnose</Link>
            <a href="https://wa.me/8801814716713" className="hover:text-white transition">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* ─── MOBILE STICKY BOTTOM ORDER BAR ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0B1733] border-t border-white/10 p-3 px-4 z-50 flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-[10px] text-[#94A3B8] block uppercase font-bold">Investment</span>
          <span className="text-lg font-black text-[#43A7E8]">{product.price}</span>
        </div>
        {product.status === 'out_of_stock' ? (
          <button disabled className="px-5 py-2.5 bg-gray-600 text-gray-300 font-black text-xs rounded-xl">
            🚫 Sold Out
          </button>
        ) : (
          <a
            href={`https://wa.me/8801814716713?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-[#43A7E8] text-[#0B1733] font-black text-xs rounded-xl hover:bg-white transition shadow-lg"
          >
            WhatsApp এ অর্ডার →
          </a>
        )}
      </div>
    </div>
  );
}
