"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Nexus Lift-এর প্রোডাক্ট ও সিস্টেম কীভাবে ডেলিভারি করা হয়?",
    a: "অর্ডার ও পেমেন্ট কনফার্মেশনের পর ৪৮ থেকে ৭২ ঘণ্টার মধ্যে আপনার জন্য একটি সুরক্ষিত Google Drive Digital Vault তৈরি করে সম্পূর্ণ রেডি ফাইল (প্রিন্ট-রেডি PDF + এডিটেবল Word .docx ও Excel শিট) এক্সেস দেওয়া হয়।"
  },
  {
    q: "আমার যদি ফাইলে কোনো পরিবর্তন বা কাস্টমাইজেশনের প্রয়োজন হয়?",
    a: "প্রতিটি প্যাকেজের সাথেই ৭ দিনের মধ্যে ২ রাউন্ড ফ্রি রিভিশন গ্যারান্টি থাকে। এছাড়া সব ফাইল ১০০% এডিটেবল ফরম্যাটে দেওয়া হয় যাতে ভবিষ্যতে নিজেই যেকোনো তথ্য আপডেট করতে পারেন।"
  },
  {
    q: "আমি কীভাবে পেমেন্ট করব?",
    a: "আমাদের অফিসিয়াল ভেরিফাইড bKash, Nagad অথবা সরাসরি ব্যাংক ট্রান্সফারের মাধ্যমে ৫০% বা ফুল পেমেন্ট করে কাজ শুরু করতে পারেন।"
  },
  {
    q: "Facebook Commerce OS কিনলে কি সত্যিই কুরিয়ার রিটার্ন কমবে?",
    a: "হ্যাঁ, এতে রয়েছে কাস্টমার ড্রপআউট রোধের প্রমাণিত মেসেঞ্জার স্ক্রিপ্ট এবং স্টেডফাস্ট/পাঠাও কুরিয়ার হিস্ট্রি ভেরিফিকেশনের SOP, যা রিটার্ন রেট ১৫-২৫% থেকে ৪-৬%-এ নামিয়ে আনে।"
  }
];

export default function TrustFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-24 bg-white border-b border-[#E4E7EC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest block mb-2">
              SLA & Trust Signals · কেন ১০০+ উদ্যোক্তা আমাদের বিশ্বাস করেন
            </span>
            <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-[#0B1733] leading-tight mb-6">
              ঝামেলামুক্ত ও গ্যারান্টিযুক্ত সিস্টেম ডেলিভারি
            </h2>

            <div className="space-y-4">
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0]">
                <div className="font-extrabold text-[#0B1733] text-sm mb-1">⚡ ৪৮–৭২ ঘণ্টা স্ট্রিক্ট SLA</div>
                <p className="text-xs text-[#64748B] leading-relaxed">সময় নষ্ট না করে দ্রুত বিজনেসে ইমপ্লিমেন্ট করার জন্য দ্রুততম টার্নঅ্যারাউন্ড টাইম।</p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0]">
                <div className="font-extrabold text-[#0B1733] text-sm mb-1">🛡️ ১০০% ফুল ওনারশিপ অ্যান্ড এডিটেবল ফাইল</div>
                <p className="text-xs text-[#64748B] leading-relaxed">কোনো লকড ফরম্যাট নয়। ওয়ার্ড ও এক্সেল ফাইল সহ কমপ্লিট ওপেন মাস্টার কপি সরবরাহ করা হয়।</p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0]">
                <div className="font-extrabold text-[#0B1733] text-sm mb-1">🤝 ৭ দিনের ফ্রি রিভিশন সাপোর্ট</div>
                <p className="text-xs text-[#64748B] leading-relaxed">আপনার শতভাগ সন্তুষ্টি নিশ্চিত করতে ডেলিভারির পর ২ রাউন্ড ফ্রি রিভিশন অন্তর্ভূক্ত।</p>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            <h3 className="text-xl font-black text-[#0B1733] mb-4">সাধারণ জিজ্ঞাসাসমূহ (FAQ)</h3>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center font-extrabold text-sm text-[#0B1733] hover:bg-[#F8FAFC] transition"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#1971A5] text-lg font-black ml-3">
                    {openIdx === idx ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-xs text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
