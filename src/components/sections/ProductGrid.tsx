"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, ProductDef, ProductCategory } from '@/data/products';
import Image from 'next/image';

interface GateDef {
  cat: ProductCategory;
  title: string;
  icon: string;
  shortDesc: string;
  tagline: string;
  color: string;
  badgeColor: string;
}

const GROWTH_GATES: GateDef[] = [
  {
    cat: 'foundation',
    title: 'Build Your Business',
    icon: '🏗️',
    shortDesc: 'পেশাদার পরিচয়, কর্পোরেট প্রোফাইল ও টেন্ডার ডক',
    tagline: 'Brand, Identity & Presentation',
    color: 'bg-[#EAF6FF] text-[#1971A5] border-[#43A7E8]/40',
    badgeColor: 'bg-[#43A7E8]/20 text-[#1971A5]',
  },
  {
    cat: 'sales',
    title: 'Get More Customers',
    icon: '🚀',
    shortDesc: 'লিড পাইপলাইন, ইনবক্স স্ক্রিপ্ট ও লস্ট লিড রিকভারি',
    tagline: 'CRM, Sales Scripts & Conversions',
    color: 'bg-emerald-50 text-emerald-800 border-emerald-300/50',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    cat: 'operations',
    title: 'Fix Your Operations',
    icon: '⚙️',
    shortDesc: 'রিটার্ন কমানো, এসওপি ও টিম ডেলিগেশন সিস্টেম',
    tagline: 'SOPs, F-Commerce OS & Workflows',
    color: 'bg-amber-50 text-amber-800 border-amber-300/50',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    cat: 'finance',
    title: 'Control Your Numbers',
    icon: '💰',
    shortDesc: 'প্রোডাক্ট প্রফিট অডিট, ক্যাশ ফ্লো ও ইউনিট ইকোনমিক্স',
    tagline: 'Cash Flow, Margins & Costing',
    color: 'bg-rose-50 text-rose-800 border-rose-300/50',
    badgeColor: 'bg-rose-100 text-rose-700',
  },
  {
    cat: 'team',
    title: 'Build Your Team',
    icon: '👥',
    shortDesc: 'রোল ম্যাট্রিক্স, কেপিআই ও মিটিং সিনক্রোনাইজেশন',
    tagline: 'HR Onboarding, Roles & KPIs',
    color: 'bg-purple-50 text-purple-800 border-purple-300/50',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    cat: 'executive',
    title: 'Scale With AI & OS',
    icon: '🤖',
    shortDesc: 'সিইও ড্যাশবোর্ড, এন্টারপ্রাইজ ওএস ও এআই ফ্লো',
    tagline: 'Enterprise OS & Executive Control',
    color: 'bg-indigo-50 text-indigo-900 border-indigo-300/50',
    badgeColor: 'bg-indigo-100 text-indigo-800',
  },
];

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState<ProductCategory | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductDef | null>(null);

  const filteredProducts = products.filter(
    (p) => activeTab === 'all' || p.cat === activeTab
  );

  return (
    <section id="products" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">

        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest inline-block mb-3 bg-[#EAF6FF] px-4 py-1.5 rounded-full border border-[#43A7E8]/30">
            Nexus Lift Business Growth Architecture · {products.length} Proven Systems
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0B1733] mb-4">
            ৬টি গ্রোথ গেটওয়ে — আপনার বিজনেসের পূর্ণাঙ্গ সমাধান
          </h2>
          <p className="text-[#667085] text-base md:text-lg leading-relaxed">
            Nexus Lift কেবল টেমপ্লেট নয়, এটি একটি প্রমাণিত গ্রোথ সিস্টেম। আপনার ব্যবসার বর্তমান প্রয়োজন অনুযায়ী গেটওয়ে বেছে নিন।
          </p>
        </div>

        {/* 6 Strategic Gateways Horizontal Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all shadow-sm ${
              activeTab === 'all'
                ? 'bg-[#0B1733] text-white shadow-md'
                : 'bg-white text-[#475467] border border-[#E2E8F0] hover:border-[#CBD5E1]'
            }`}
          >
            🌟 All Systems ({products.length})
          </button>
          {GROWTH_GATES.map((gate) => {
            const count = products.filter(p => p.cat === gate.cat).length;
            const isActive = activeTab === gate.cat;
            return (
              <button
                key={gate.cat}
                onClick={() => setActiveTab(gate.cat)}
                className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#0B1733] text-white shadow-md'
                    : 'bg-white text-[#475467] border border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                <span>{gate.icon}</span>
                <span>{gate.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Layout */}
        {activeTab === 'all' ? (
          <div className="space-y-16">
            {GROWTH_GATES.map((gate) => {
              const gateProducts = products.filter(p => p.cat === gate.cat);
              return (
                <div key={gate.cat} className="space-y-6">
                  {/* Category Banner */}
                  <div className={`flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border ${gate.color} gap-3`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{gate.icon}</span>
                      <div>
                        <h3 className="text-lg font-black">{gate.title}</h3>
                        <p className="text-xs font-semibold opacity-90">{gate.shortDesc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-white/80 rounded-lg self-start md:self-auto border border-black/5">
                      {gate.tagline} ({gateProducts.length} Toolkits)
                    </span>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gateProducts.map((p) => (
                      <ProductCard key={p.id} p={p} onSelect={() => setSelectedProduct(p)} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} p={p} onSelect={() => setSelectedProduct(p)} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Trust & Escalation Box */}
        <div className="mt-16 bg-[#0B1733] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-[620px]">
            <span className="text-[#43A7E8] font-bold text-xs uppercase tracking-wider block mb-1">
              Custom Enterprise Architecture
            </span>
            <h3 className="text-2xl md:text-3xl font-black leading-tight">
              আপনার ব্যবসার জন্য কাস্টমাইজড OS বা AI সলিউশন প্রয়োজন?
            </h3>
            <p className="text-[#94A3B8] text-sm mt-2">
              আমাদের স্ট্র্যাটেজিক কনসালট্যান্ট আপনার টিম এবং প্রসেস রিভিউ করে একটি কাস্টম গ্রোথ আর্কিটেকচার তৈরি করে দেবে।
            </p>
          </div>
          <a
            href="https://wa.me/8801814716713?text=%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%2C%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20Nexus%20Lift%20Enterprise%20OS%20%26%20Custom%20Architecture%20%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%20%E0%A6%95%E0%A6%A5%E0%A6%BE%20%E0%A6%AC%E0%A6%B2%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A7%A4"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-4 bg-[#43A7E8] text-[#0B1733] font-black text-sm rounded-xl hover:bg-white transition shrink-0 shadow-lg"
          >
            💬 কনসালটেশনের জন্য WhatsApp করুন →
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071127]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-7 max-w-[560px] w-full shadow-2xl overflow-y-auto max-h-[90vh] border border-[#E2E8F0]"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs font-black text-[#1971A5] tracking-widest uppercase">
                    {selectedProduct.badge} • DELIVERABLE SYSTEM
                  </div>
                  <h3 className="text-xl font-black text-[#0B1733] mt-1">{selectedProduct.title}</h3>
                  {selectedProduct.tagline && (
                    <p className="text-xs text-[#1971A5] font-bold mt-0.5">{selectedProduct.tagline}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 font-bold hover:bg-gray-200"
                >
                  ✕
                </button>
              </div>

              {/* Product visual */}
              <div className="bg-[radial-gradient(circle_at_60%_20%,#EDF2F7,#fff)] rounded-2xl h-[140px] flex items-center justify-center mb-5 relative border border-[#E4E7EC]">
                <div className="relative w-[160px] h-[110px]">
                  <Image src={selectedProduct.img} alt={selectedProduct.title} fill className="object-contain" />
                </div>
              </div>

              <div className="flex items-baseline justify-between mb-4">
                <span className="text-2xl font-black text-[#1971A5]">{selectedProduct.price}</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  ⚡ 48–72h Digital Vault SLA
                </span>
              </div>

              <p className="text-sm text-[#475467] leading-relaxed mb-4">{selectedProduct.desc}</p>

              <div className="mb-4">
                <strong className="text-xs text-[#0B1733] uppercase tracking-wider block mb-2 font-black">
                  প্যাকেজে যা যা পাচ্ছেন (Included Deliverables):
                </strong>
                <ul className="space-y-1.5">
                  {selectedProduct.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#101828] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]">
                      <span className="text-emerald-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EAF6FF] border border-[#BAE6FD] rounded-xl p-3 text-xs text-[#0369A1] mb-5">
                <strong>🛡️ Nexus Lift Guarantee:</strong> ১০০% রেডি মাস্টার ফাইল + এডিটেবল ফরম্যাট (.docx / Google Docs / Sheets) + ফ্রি রিভিশন সাপোর্ট।
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`https://wa.me/8801814716713?text=${encodeURIComponent(
                    `সালাম, আমি Nexus Lift-এর "${selectedProduct.title}" (${selectedProduct.price}) প্যাকেজটি কনফার্ম করতে চাই। পরবর্তী প্রসেস জানিয়ে দিন।`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3.5 bg-[#25D366] text-white text-xs font-black rounded-xl text-center hover:bg-[#1eb956] transition shadow-md"
                >
                  💬 1-Click WhatsApp Order
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="py-3.5 bg-[#0B1733] text-white text-xs font-bold rounded-xl hover:bg-black transition"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ── Shared product card ──────────────────────────────────────────────────────
function ProductCard({ p, onSelect }: { p: ProductDef; onSelect: () => void }) {
  const waText = encodeURIComponent(
    `সালাম, আমি Nexus Lift-এর "${p.title}" (${p.price}) সম্পর্কে বিস্তারিত জানতে ও অর্ডার করতে চাই।`
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Visual */}
      <div className="bg-[radial-gradient(circle_at_50%_30%,#FFFFFF_0%,#EDF2F7_100%)] border-b border-[#E2E8F0] relative h-[170px] flex items-center justify-center p-4">
        <span className="absolute top-3 left-3 bg-[#0B1733] text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider">
          {p.badge}
        </span>
        <div className="relative w-full h-full max-w-[180px]">
          <Image src={p.img} alt={p.title} fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-1.5">
        <h3 className="text-base font-black text-[#0B1733] leading-snug">{p.title}</h3>
        {p.tagline && (
          <p className="text-[11px] font-bold text-[#1971A5]">{p.tagline}</p>
        )}
        <div className="flex items-baseline justify-between my-1">
          <span className="text-lg font-black text-[#1971A5]">{p.price}</span>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Vault SLA
          </span>
        </div>
        <p className="text-xs text-[#667085] leading-relaxed flex-1">{p.desc}</p>

        <div className="grid grid-cols-2 gap-2 mt-4 pt-2 border-t border-[#F1F5F9]">
          <button
            onClick={onSelect}
            className="w-full py-2 bg-white border border-[#CBD5E1] text-[#0B1733] text-xs font-extrabold rounded-lg hover:bg-gray-50 transition"
          >
            Details
          </button>
          <a
            href={`https://wa.me/8801814716713?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2 bg-[#25D366] text-white text-xs font-extrabold rounded-lg text-center hover:bg-[#1eb956] transition shadow-sm"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.article>
  );
}
