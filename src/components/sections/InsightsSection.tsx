"use client";

import React from 'react';
import Link from 'next/link';
import { insights } from '@/data/insights';

export default function InsightsSection() {
  const topInsights = insights.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-[#081329] text-white">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-12">
          <div>
            <span className="text-[#43A7E8] font-bold text-xs uppercase tracking-widest block mb-2">
              Proven Systems & Practical Knowledge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Business Growth Insights & Case Studies
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B1733] bg-[#43A7E8] hover:bg-white px-5 py-3 rounded-xl transition duration-200 self-start md:self-auto shadow-md"
          >
            See More Insights (আরও দেখুন) →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topInsights.map((item) => (
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
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3 mb-6">
                  {item.excerpt}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-auto">
                <span className="text-[11px] text-[#64748B]">{item.date}</span>
                <Link
                  href={`/insights/${item.id}`}
                  className="text-xs font-bold text-[#43A7E8] hover:underline"
                >
                  Read Story →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
