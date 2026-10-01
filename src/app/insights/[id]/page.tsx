"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import { insights } from '@/data/insights';

interface Props {
  params: Promise<{ id: string }>;
}

export default function SingleInsightPage({ params }: Props) {
  const { id } = use(params);
  const insight = insights.find((i) => i.id === id);

  if (!insight) {
    notFound();
  }

  const related = insights.filter((i) => i.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#071127] text-[#CBD5E1]">
      <Navbar />

      <main className="max-w-[860px] mx-auto px-4 md:px-0 py-12 md:py-20">
        {/* Navigation back */}
        <div className="flex items-center gap-3 text-xs mb-8">
          <Link href="/preview" className="text-[#94A3B8] hover:text-white transition">
            Home
          </Link>
          <span className="text-[#64748B]">/</span>
          <Link href="/insights" className="text-[#94A3B8] hover:text-white transition">
            Insights & Case Studies
          </Link>
          <span className="text-[#64748B]">/</span>
          <span className="text-[#43A7E8] font-semibold truncate max-w-[200px] sm:max-w-none">
            {insight.title}
          </span>
        </div>

        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#0B1733] text-[#43A7E8] text-xs font-black px-3.5 py-1.5 rounded-full border border-[#43A7E8]/30">
              {insight.category}
            </span>
            {insight.stats && (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1 rounded-full">
                ⚡ Key Metric: {insight.stats}
              </span>
            )}
            <span className="text-xs text-[#64748B] ml-auto">{insight.date}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-6">
            {insight.title}
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed border-l-4 border-[#43A7E8] pl-4 py-1 italic bg-white/5 rounded-r-xl">
            {insight.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none space-y-6 text-[#CBD5E1] text-sm sm:text-base leading-relaxed border-t border-white/10 pt-8">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-8 mb-4">
            ১. সমস্যার মূল কারণ (Core Problem Breakdown)
          </h2>
          <p>
            অধিকাংশ বাংলাদেশি উদ্যোক্তা ব্যবসা বৃদ্ধির সাথে সাথে মারাত্মক বিশৃঙ্খলা বা অপারেশনাল কেওস-এর মুখোমুখি হন। কোনো স্ট্যান্ডার্ডাইজড মেকানিজম বা লিখিত সিস্টেম না থাকার কারণে টিম মেম্বারদের মাঝে ডিপেন্ডেন্সি এবং কমিউনিকেশন গ্যাপ তৈরি হয়।
          </p>

          <div className="bg-[#0B1733] border border-white/10 rounded-2xl p-6 my-6">
            <h3 className="text-[#43A7E8] font-bold text-base mb-2">💡 Nexus Lift Analysis</h3>
            <p className="text-sm text-[#94A3B8] m-0">
              সিস্টেমহীন ব্যবসা পরিচালনা মানে প্রতিবার চাকা নতুন করে আবিষ্কার করা। একবার সঠিক আর্কিটেকচার ও ডকুমেন্টেশন তৈরি করলে ব্যবসার ৮৫% কাজ অটোমেশনের আওতায় আনা সম্ভব।
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mt-8 mb-4">
            ২. এক্সিকিউশন ও সল্যুশন ফ্রেমওয়ার্ক (Execution Blueprint)
          </h2>
          <p>
            এই চ্যালেঞ্জ সমাধানের জন্য Nexus Lift টিম একটি সুস্পষ্ট ৪-ধাপের আর্কিটেকচার বাস্তবায়ন করেছে:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#94A3B8]">
            <li><strong className="text-white">Audit & Diagnosis:</strong> বর্তমান ওয়ার্কফ্লোর ফাঁকফোকর ও লস পয়েন্টগুলো চিহ্নিত করা।</li>
            <li><strong className="text-white">Standardization (SOPs):</strong> ডেলিভারি, কুরিয়ার, ইনবক্স এবং টিম ম্যানেজমেন্টের সুস্পষ্ট নিয়মাবলী তৈরি।</li>
            <li><strong className="text-white">Delegation Matrix (RACI):</strong> কার কী দায়িত্ব তা লিখিত আকারে বণ্টন যাতে ওনার-নির্ভরশীলতা দূর হয়।</li>
            <li><strong className="text-white">Automation & Cloud Sync:</strong> Make.com ও ডিজিটাল ড্যাশবোর্ডের মাধ্যমে রিয়েল-টাইম ট্র্যাকিং।</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-black text-white mt-8 mb-4">
            ৩. ফলাফল ও প্রভাব (Tangible Business Impact)
          </h2>
          <p>
            সিস্টেমটি বাস্তবায়নের পর সংশ্লিষ্ট ব্যবসাটিতে অভাবনীয় উন্নতি লক্ষ্য করা গেছে:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-white/5 border border-emerald-500/20 rounded-xl p-4">
              <span className="text-2xl font-black text-emerald-400 block mb-1">
                {insight.stats || "১০০% সমাধান"}
              </span>
              <span className="text-xs text-[#94A3B8]">পরিমাপযোগ্য ব্যবসায়িক ফলাফল অর্জিত</span>
            </div>
            <div className="bg-white/5 border border-[#43A7E8]/20 rounded-xl p-4">
              <span className="text-2xl font-black text-[#43A7E8] block mb-1">৪৮-৭২ ঘণ্টা</span>
              <span className="text-xs text-[#94A3B8]">সিস্টেম সেটআপ ও ডেলিভারি টাইমলাইন</span>
            </div>
          </div>
        </article>

        {/* WhatsApp Call to Action Box */}
        <div className="bg-gradient-to-r from-[#0B1733] to-[#0A2540] border border-[#43A7E8]/40 rounded-2xl p-6 sm:p-8 my-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-black text-[#43A7E8] uppercase tracking-wider block mb-1">
              Ready to Implement This in Your Business?
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              আপনার ব্যবসার জন্যও এই সিস্টেমটি তৈরি করতে চান?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              আমাদের টিম ৪৮–৭২ ঘণ্টার মধ্যে সম্পূর্ণ কাস্টমাইজড সিস্টেম প্রস্তুত করে দেবে।
            </p>
          </div>
          <a
            href={`https://wa.me/8801814716713?text=${encodeURIComponent(`সালাম, আমি "${insight.title}" কেস স্টাডিটি পড়েছি এবং আমার ব্যবসার জন্য একই ধরনের সিস্টেম বাস্তবায়নে আলোচনা করতে চাই।`)}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#43A7E8] text-[#0B1733] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-white transition shadow-lg"
          >
            WhatsApp এ আলোচনা করুন →
          </a>
        </div>

        {/* Related Insights */}
        <div className="border-t border-white/10 pt-10 mt-10">
          <h3 className="text-lg font-bold text-white mb-6">অন্যান্য কেস স্টাডিজ ও ইনসাইটস:</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/insights/${item.id}`}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#43A7E8]/50 hover:bg-white/10 transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#43A7E8] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-2 mb-2">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[11px] text-[#43A7E8] font-bold mt-2">Read Case Study →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#071127] text-[#CBD5E1] py-12 text-sm border-t border-white/10">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 text-center text-xs text-[#94A3B8]">
          © 2026 Nexus Lift. All rights reserved. · Connecting Sources, Lifting Business.
        </div>
      </footer>
    </div>
  );
}
