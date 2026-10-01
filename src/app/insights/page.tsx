"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { insights, Insight } from '@/data/insights';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Case Study', 'Growth Insight', 'System Architecture'];

  const filteredInsights = selectedCategory === 'All'
    ? insights
    : insights.filter(i => i.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#071127] text-[#CBD5E1]">
      <Navbar />

      <main className="max-w-[1160px] mx-auto px-4 md:px-0 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Link
            href="/preview"
            className="inline-block text-xs font-bold text-[#43A7E8] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 hover:bg-white/10 transition"
          >
            ← Back to Home / ফিরে যান
          </Link>
          <span className="text-[#43A7E8] font-black text-xs uppercase tracking-widest block mb-2">
            Knowledge Base & Real Results
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Business Growth Insights & Case Studies
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            বাস্তব অভিজ্ঞতা, প্রুভেন ফ্রেমওয়ার্ক এবং কেস স্টাডিজ যা আপনার ব্যবসাকে Chaos থেকে System-এ রূপান্তর করতে সাহায্য করবে।
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === cat
                  ? 'bg-[#43A7E8] text-[#0B1733]'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#43A7E8]/50 hover:bg-white/10 transition duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#0B1733] text-[#43A7E8] text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
                    {item.category}
                  </span>
                  {item.stats && (
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {item.stats}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-auto">
                <span className="text-[11px] text-[#64748B]">{item.date}</span>
                <Link
                  href={`/insights/${item.id}`}
                  className="text-xs font-bold text-[#43A7E8] hover:underline"
                >
                  Read Full Insight →
                </Link>
              </div>
            </div>
          ))}
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
