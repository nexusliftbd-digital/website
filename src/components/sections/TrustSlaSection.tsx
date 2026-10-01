"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const trustPillars = [
  {
    icon: "⚡",
    title: "48–72h Digital Vault SLA",
    desc: "অর্ডারের পর নির্দিষ্ট সময়সীমার মধ্যে সরাসরি আপনার প্রাইভেট ক্লাউড ফোল্ডারে সম্পূর্ণ রেডি সিস্টেম ডেলিভারি।",
  },
  {
    icon: "📝",
    title: "100% Editable Source Files",
    desc: "শুধু লক করা পিডিএফ নয়—পুরো এডিটেবল Word (.docx), Excel / Google Sheets এবং Presentation স্লাইডস প্রদান করা হয়।",
  },
  {
    icon: "🛡️",
    title: "2-Round Revision Guarantee",
    desc: "ফাইল ডেলিভারির পরবর্তী ৭ দিনের মধ্যে আপনার স্পেসিফিক রিকোয়ারমেন্ট অনুযায়ী ২ রাউন্ড রিভিশন সুবিধা।",
  },
  {
    icon: "🔒",
    title: "Client NDA & Data Privacy",
    desc: "আপনার বিজনেস ডেটা, ক্লায়েন্ট লিস্ট ও ফাইন্যান্সিয়াল ইনফরমেশনের শতভাগ গোপনীয়তা নিশ্চিত।",
  },
];

export default function TrustSlaSection() {
  const [orderQuery, setOrderQuery] = useState("");
  const [lookupResult, setLookupResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      // Intelligent mock lookup response
      setLookupResult({
        id: orderQuery.toUpperCase().startsWith("NX-") ? orderQuery.toUpperCase() : `NX-${Math.floor(100000 + Math.random() * 900000)}`,
        status: "In Vault Preparation (SLA: 48-72H)",
        step: 2, // 1: Verified, 2: Architecting Vault, 3: Quality Check, 4: Ready
        estimatedDelivery: "আগামীকাল রাত ৮:০০ টার মধ্যে",
        format: "Google Drive Private Vault (.docx + .xlsx + PDF)"
      });
      setIsSearching(false);
    }, 700);
  };

  return (
    <section className="py-20 bg-[#0B1733] text-white">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="text-center max-w-[650px] mx-auto mb-14">
          <span className="text-[#43A7E8] font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block mb-3">
            Nexus Lift Service Standard
          </span>
          <h2 className="text-2xl md:text-4xl font-black">
            কেন Nexus Lift সাধারণ টেমপ্লেটের চেয়ে আলাদা?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPillars.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between hover:border-[#43A7E8]/40 transition"
            >
              <div>
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="font-bold text-base text-white mb-2">{p.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Order / Digital Vault Tracker */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 md:p-10">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 items-center">
            <div>
              <span className="text-[#43A7E8] font-black text-xs uppercase tracking-wider block mb-1">
                Real-Time Delivery Tracker
              </span>
              <h3 className="text-xl md:text-2xl font-black mb-2">
                আপনার অর্ডারের ডিজিটাল ভল্ট স্ট্যাটাস চেক করুন
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                আপনার মোবাইল নম্বর অথবা অর্ডার কোড লিখে সরাসরি ডেলিভারির বর্তমান অবস্থা জানুন।
              </p>

              <form onSubmit={handleLookup} className="flex gap-2">
                <input
                  type="text"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  placeholder="অর্ডার ফোন নম্বর (যেমন: 017...)"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-[#43A7E8] flex-1"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-[#43A7E8] text-[#0B1733] font-extrabold text-xs px-5 py-2.5 rounded-xl hover:bg-white transition"
                >
                  {isSearching ? "চেক হচ্ছে..." : "ট্র্যাক করুন"}
                </button>
              </form>
            </div>

            {/* Tracker Result Area */}
            <div className="bg-[#071127] rounded-2xl p-6 border border-white/10">
              <AnimatePresence mode="wait">
                {lookupResult ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-start border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase">Order Ref</span>
                        <div className="text-sm font-black text-[#43A7E8]">{lookupResult.id}</div>
                      </div>
                      <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                        {lookupResult.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] text-gray-400 block">প্রত্যাশিত ডেলিভারি</span>
                        <span className="font-bold text-white">{lookupResult.estimatedDelivery}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 block">ডেলিভারি ফরম্যাট</span>
                        <span className="font-bold text-white">{lookupResult.format}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between text-[11px] text-gray-400 mb-1.5 font-bold">
                        <span>১. ভেরিফায়েড</span>
                        <span className="text-[#43A7E8]">২. ভল্ট আর্কিটেকচার</span>
                        <span>৩. কিউএ চেক</span>
                        <span>৪. ডেলিভারি</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#43A7E8] h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-6 text-[#94A3B8] text-xs">
                    <span className="text-2xl block mb-2">🔍</span>
                    আপনার অর্ডার স্ট্যাটাস জানতে বামে নম্বর ইনপুট দিন।
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
