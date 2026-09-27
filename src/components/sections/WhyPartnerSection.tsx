"use client";

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Practical",
    bnTitle: "বাস্তবসম্মত সমাধান",
    desc: "তাত্ত্বিক কোনো বইয়ের জ্ঞান নয়—বাংলাদেশের লোকাল মার্কেট ও কুরিয়ার ইকোসিস্টেমের বাস্তব অভিজ্ঞতায় সাজানো।"
  },
  {
    title: "Connected",
    bnTitle: "কানেক্টেড সিস্টেম",
    desc: "প্রোফাইল থেকে শুরু করে ইনবক্স স্ক্রিপ্ট এবং সিআরএম—সবকিছু একসাথে একটি পূর্ণাঙ্গ ইকোসিস্টেমে সংযুক্ত।"
  },
  {
    title: "Scalable",
    bnTitle: "স্কেলযোগ্য কাঠামো",
    desc: "ব্যবসা ১০ লাখ থেকে কোটি টাকায় পৌঁছালেও একই এসওপি কাঠামোর উপর নতুন টিম মেম্বার অনবোর্ড করা সম্ভব।"
  }
];

export default function WhyPartnerSection() {
  return (
    <section className="py-24 bg-[#0B1733] text-white">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="max-w-[720px] mb-14">
          <span className="text-[#43A7E8] font-black text-xs uppercase tracking-widest block mb-2">
            Why Nexus Lift
          </span>
          <h2 className="text-3xl md:text-[42px] font-black tracking-tight leading-tight mb-3">
            শুধু Service Provider নয় — Business Systems Partner
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            আমরা শুধু ফাইল ডেলিভারি করি না, আপনার ব্যবসার লং-টার্ম গ্রোথ ফাউন্ডেশন তৈরি করি।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <div className="text-xl font-black text-[#43A7E8] mb-1">{p.title}</div>
              <div className="text-xs font-bold text-gray-300 mb-4">{p.bnTitle}</div>
              <p className="text-sm text-[#CBD5E1] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
