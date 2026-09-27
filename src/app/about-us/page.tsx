"use client";

import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#F8FAFC]">
        {/* Header Hero */}
        <section className="bg-[#0B1733] text-white py-16 md:py-24">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0">
            <span className="text-[#43A7E8] font-black text-xs uppercase tracking-widest block mb-3">
              About Nexus Lift
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-[800px]">
              Connecting Sources, Lifting Business.
            </h1>
            <p className="text-[#94A3B8] text-base md:text-lg mt-4 max-w-[680px] leading-relaxed">
              আমরা বাংলাদেশের ব্যবসাকে বিশৃঙ্খলা থেকে মুক্ত করে একটি মজবুত, পরিমাপযোগ্য এবং টেকসই ডিজিটাল সিস্টেমে রূপান্তর করি।
            </p>
          </div>
        </section>

        {/* Content Section with Founder Highlight */}
        <section className="py-20">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

              {/* Mission and Vision */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-black text-[#0B1733] mb-4">
                    আমাদের উদ্দেশ্য ও ভিশন (Our Vision)
                  </h2>
                  <p className="text-sm text-[#475467] leading-relaxed mb-4">
                    বাংলাদেশে অধিকাংশ এসএমই ও উদ্যোক্তারা প্রতিদিন শত শত ঘণ্টা অপচয় করেন ম্যানুয়াল অর্ডার ট্র্যাকিং, কুরিয়ার রিটার্ন ক্ষতি এবং অপেশাদার ব্র্যান্ডিংয়ের কারণে।
                  </p>
                  <p className="text-sm text-[#475467] leading-relaxed">
                    Nexus Lift-এর ভিশন হলো প্রতিটি উদ্যোক্তার হাতে আন্তর্জাতিক মানের কর্পোরেট প্রোফাইল, ফুল-স্ট্যাক এসওপি ও স্বয়ংক্রিয় সিআরএম আর্কিটেকচার তুলে দেওয়া যাতে ব্যবসা মালিকের ব্যক্তিগত উপস্থিতির ওপর নির্ভর না করে স্বয়ংক্রিয়ভাবে গ্রোথ অর্জন করতে পারে।
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm">
                    <div className="text-2xl font-black text-[#1971A5] mb-1">100%</div>
                    <div className="text-xs font-bold text-[#0B1733]">Editable & Digital Hand-off</div>
                    <p className="text-[11px] text-[#64748B] mt-1">কাস্টমাইজেবল ফাইল ও ফরম্যাট</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm">
                    <div className="text-2xl font-black text-emerald-600 mb-1">48-72h</div>
                    <div className="text-xs font-bold text-[#0B1733]">Express SLA Turnaround</div>
                    <p className="text-[11px] text-[#64748B] mt-1">দ্রুততম সময়ে ডিজিটাল ভল্ট হ্যান্ডঅফ</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[#0B1733] mb-3">
                    কেন নেক্সাস লিফট ভিন্ন?
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#475467]">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>কোনো তাত্ত্বিক পরামর্শ নয়, শতভাগ রেডি-টু-ইউজ এডিটেবল ফাইলস।</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>লোকাল কুরিয়ার ও পেমেন্ট ইকোসিস্টেমের সাথে সম্পূর্ণ কমপ্লায়েন্ট।</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>ফাউন্ডার ডিপেন্ডেন্সি কমিয়ে পুরো বিজনেস অপারেশন অটোমেশন।</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Founder Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#43A7E8]/10 rounded-full blur-2xl pointer-events-none" />

                <span className="inline-block bg-[#EAF6FF] text-[#1971A5] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Visionary & Founder
                </span>

                <h3 className="text-2xl font-black text-[#0B1733] mb-1">
                  Md Ilias Hossain
                </h3>
                <div className="text-xs font-bold text-[#1971A5] mb-4">
                  Founder & Chief Architect, Nexus Lift
                </div>

                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] mb-6">
                  <p className="text-xs text-[#475467] leading-relaxed italic">
                    &quot;ব্যবসার আসল শক্তি তার সিস্টেমে। যখন সঠিক আর্কিটেকচার এবং বিজনেস প্রোফাইল থাকে, তখন স্কেলিং কোনো ভয় নয় বরং একটি স্বাভাবিক প্রক্রিয়ায় পরিণত হয়।&quot;
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold text-[#334155]">
                    🎯 ভিশন: ১ লাখ এসএমই এবং এন্টারপ্রাইজের ব্যাকবোন শক্তিশালী করা।
                  </div>
                  <div className="text-xs font-bold text-[#334155]">
                    🌐 অফিসিয়াল পোর্টফোলিও ও ওয়েবসাইট:
                  </div>
                </div>

                <a
                  href="https://www.iliashossain.site"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0B1733] text-white font-extrabold text-xs rounded-xl hover:bg-[#1971A5] transition shadow-md"
                >
                  <span>Visit Founder&apos;s Website</span>
                  <span>www.iliashossain.site →</span>
                </a>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#071127] text-[#aebbd0] py-8 text-xs border-t border-white/10 text-center">
        © 2026 Nexus Lift. All rights reserved.
      </footer>
    </>
  );
}
