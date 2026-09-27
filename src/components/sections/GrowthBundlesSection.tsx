"use client";

import { motion } from "framer-motion";

const bundles = [
  {
    title: "SME Commercial Starter Bundle",
    target: "নতুন ব্যবসা ও এফ-কমার্সের জন্য",
    price: "৳২,৯৯৯",
    originalPrice: "৳৪,৪৯৭",
    savings: "৩৩% ছাড়",
    items: [
      "Growth Business Profile Suite (৳১,৪৯৯)",
      "Facebook Commerce OS (৳১,৪৯৯)",
      "CRM 7-Tab Starter Architecture (৳৯99)",
      "Brand Foundation Starter (৳১,৪৯৯)",
    ],
    waQuery: "SME Commercial Starter Bundle (৳২,৯৯৯)",
    popular: true,
  },
  {
    title: "Operations & Delegation Suite",
    target: "প্রতিষ্ঠিত ব্যবসা যেখানে টিম নির্ভরতা দরকার",
    price: "৳৪,৪৯৯",
    originalPrice: "৳৬,৪৯৬",
    savings: "৩০% ছাড়",
    items: [
      "Founder-to-Team Transition OS (৳২,৪৯৯)",
      "Business SOP Starter OS (৳১,৪৯৯)",
      "Product Profitability Audit OS (৳৮৯৯)",
      "Role & Responsibility Matrix (৳৮৯৯)",
    ],
    waQuery: "Operations & Delegation Suite (৳৪,৪৯৯)",
    popular: false,
  },
  {
    title: "All-in-One Enterprise OS & AI Pack",
    target: "পুরো কোম্পানিকে স্বয়ংক্রিয় করার পূর্ণ আর্কিটেকচার",
    price: "৳৭,৯৯৯",
    originalPrice: "৳১২,৯৯৯",
    savings: "৩৮% ছাড়",
    items: [
      "Enterprise Business OS Suite (৳৫,৯৯৯)",
      "CEO Executive Command Dashboard (৳২,৯৯৯)",
      "Automation Messenger Flow (৳১,২৯৯)",
      "KPI Command Board & 1-on-1 Consultation",
    ],
    waQuery: "All-in-One Enterprise OS & AI Pack (৳৭,৯৯৯)",
    popular: false,
  },
];

export default function GrowthBundlesSection() {
  return (
    <section id="bundles" className="py-20 bg-[#F1F5F9] border-t border-[#E2E8F0]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest bg-[#EAF6FF] px-4 py-1.5 rounded-full border border-[#43A7E8]/30 inline-block mb-3">
            Value Pack Bundles · Save Up to 38%
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1733] tracking-tight">
            পৃথক টুলসের বদলে সম্পূর্ণ গ্রোথ বান্ডেল বেছে নিন
          </h2>
          <p className="text-[#64748B] text-sm mt-3">
            একটি সমন্বিত সিস্টেম আপনার ব্যবসায় দ্রুততম ফলাফল এনে দেয়।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bundles.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-7 bg-white border flex flex-col justify-between shadow-sm hover:shadow-xl transition-all relative ${
                b.popular ? "border-[#43A7E8] ring-2 ring-[#43A7E8]/20" : "border-[#E2E8F0]"
              }`}
            >
              {b.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#43A7E8] text-[#0B1733] font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  ★ MOST POPULAR BUNDLE
                </span>
              )}

              <div>
                <div className="text-xs font-bold text-[#1971A5] uppercase tracking-wider mb-1">
                  {b.target}
                </div>
                <h3 className="text-lg font-black text-[#0B1733] mb-3 leading-snug">{b.title}</h3>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-[#0B1733]">{b.price}</span>
                  <span className="text-xs text-gray-400 line-through">{b.originalPrice}</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {b.savings}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-black text-gray-500 uppercase">বান্ডেলে যা অন্তর্ভুক্ত:</div>
                  {b.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                      <span className="text-emerald-500 font-bold">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/8801814716713?text=${encodeURIComponent(
                  `সালাম! আমি Nexus Lift-এর "${b.waQuery}" অফারটি নিতে চাই। প্রসেস জানিয়ে দিন।`
                )}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 rounded-xl text-center text-xs font-black transition ${
                  b.popular
                    ? "bg-[#0B1733] text-white hover:bg-[#1971A5]"
                    : "bg-[#EAF6FF] text-[#1971A5] hover:bg-[#1971A5] hover:text-white"
                }`}
              >
                Get This Bundle via WhatsApp →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
