"use client";

import React from 'react';
import { motion } from 'framer-motion';

const layers = [
  {
    step: "01",
    title: "Brand & Authority Architecture",
    bnTitle: "ব্র্যান্ড আইডেন্টিটি ও কর্পোরেট প্রেজেন্টেশন",
    desc: "ক্লায়েন্ট, বায়ার ও ব্যাংক কনভার্সনের জন্য সম্পূর্ণ রিসার্চ-ব্যাকড প্রোফাইল ডেক ও ভ্যালু প্রোপোজিশন আর্কিটেকচার।",
    badge: "IDENTITY LAYER",
    deliverables: ["Executive Master Deck", "Foundational Story & Vision", "Service/Product Showcase", "B2B Credential Vault"]
  },
  {
    step: "02",
    title: "Operations & Standard Workflows",
    bnTitle: "স্ট্যান্ডার্ড অপারেটিং প্রসিডিউর (SOPs)",
    desc: "অর্ডার ফুলফিলমেন্ট, ইনভেন্টরি, কাস্টমার সাপোর্ট ও রিটার্ন প্রতিরোধের জন্য ফুল প্রসেস ব্লুপ্রিন্ট।",
    badge: "OPERATIONS LAYER",
    deliverables: ["Order to Dispatch SOP", "Courier Return Prevention Rules", "Employee Role Matrix & KPIs", "Daily Operational Checklists"]
  },
  {
    step: "03",
    title: "Growth & Automation Engines",
    bnTitle: "গ্রোথ ফানেল ও এআই অটোমেশন",
    desc: "সোশ্যাল ইনবক্স কনভার্সন স্ক্রিপ্ট, ডেটা-ড্রিভেন ইউনিট ইকোনমিক্স ও এআই-পাওয়ার্ড কাস্টমার রাউটিং সিস্টেম।",
    badge: "GROWTH LAYER",
    deliverables: ["Messenger / WhatsApp Scripts", "Unit Economics Tracker", "7-Tab CRM Architecture", "Cloud Intelligence Handoff"]
  }
];

export default function ArchitectureSection() {
  return (
    <section className="py-24 bg-[#0B1733] text-white relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#43A7E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1971A5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-4 md:px-0 relative z-10">
        <div className="max-w-[760px] mb-16">
          <span className="text-[#43A7E8] font-black text-xs uppercase tracking-widest block mb-2">
            360° System Architecture · বিজনেস আর্কিটেকচার
          </span>
          <h2 className="text-3xl md:text-[46px] font-black tracking-tight leading-tight mb-4">
            কীভাবে Nexus Lift আপনার ব্যবসাকে সিস্টেমে কনভার্ট করে?
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            একটি পরিপক্ক কোম্পানির মতো কাজ করার জন্য আমরা আপনার পুরো কার্যক্রমকে ৩টি সংগঠিত লেয়ারে সাজিয়ে দেই।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#43A7E8]/50 hover:bg-white/[0.08] transition-all"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl font-black text-[#43A7E8] opacity-60">
                    {layer.step}
                  </span>
                  <span className="bg-[#43A7E8]/20 text-[#7DD3FC] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {layer.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1">
                  {layer.title}
                </h3>
                <div className="text-xs font-semibold text-[#94A3B8] mb-4">
                  {layer.bnTitle}
                </div>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6">
                  {layer.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {layer.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E2E8F0] bg-white/5 p-2 rounded-lg border border-white/5">
                      <span className="text-[#43A7E8] font-black">✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-bold text-[#43A7E8]">
                48–72h Digital Vault Delivery →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
