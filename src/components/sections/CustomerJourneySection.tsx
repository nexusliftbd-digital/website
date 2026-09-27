"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: "01",
    title: "Diagnose & Identify",
    bnTitle: "সমস্যা চিহ্নিতকরণ",
    desc: "আপনার ব্যবসার বটলনেক, রিটার্ন লস বা প্রফেশনাল প্রেজেন্টেশনের ঘাটতি শনাক্ত করা হয়।"
  },
  {
    step: "02",
    title: "System OS Design",
    bnTitle: "সিস্টেম ও এসওপি ডিজাইন",
    desc: "প্রয়োজন অনুযায়ী রিসার্চ-ব্যাকড প্রোফাইল ডেক, এসওপি এবং এক্সেল ট্র্যাকার প্রস্তুত করা হয়।"
  },
  {
    step: "03",
    title: "Digital Vault Handoff",
    bnTitle: "৪৮–৭২ ঘণ্টায় ক্লাউড ডেলিভারি",
    desc: "Google Drive ডিজিটাল ভল্টে ১০০% এডিটেবল ফাইল ও প্রিন্ট-রেডি ফরম্যাট হ্যান্ডঅফ।"
  },
  {
    step: "04",
    title: "Execution & Scale",
    bnTitle: "টিম ডেলিগেশন ও স্কেলিং",
    desc: "ফাউন্ডার ডিপেন্ডেন্সি কমিয়ে ব্যবসার প্রফিট এবং রেভিনিউ প্রবৃদ্ধি নিশ্চিত করা।"
  }
];

export default function CustomerJourneySection() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E4E7EC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="max-w-[720px] mb-14">
          <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest block mb-2">
            The Transformation Roadmap
          </span>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-[#0B1733] leading-tight mb-3">
            Problem থেকে Growth — একটি Clear Journey
          </h2>
          <p className="text-[#667085] text-base leading-relaxed">
            আমরা জটিল কোনো পরামর্শ দিই না। বাস্তবসম্মত ধাপে আপনার ব্যবসাকে একটি স্বয়ংসম্পূর্ণ সিস্টেমে রূপান্তরিত করি।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#1971A5] font-black flex items-center justify-center text-sm mb-5">
                  {s.step}
                </div>
                <h3 className="font-extrabold text-[#0B1733] text-base mb-1">{s.title}</h3>
                <div className="text-xs font-bold text-[#1971A5] mb-3">{s.bnTitle}</div>
                <p className="text-xs text-[#667085] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
