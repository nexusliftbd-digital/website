"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { products } from '@/data/products';

export default function HomeProductCarousel() {
  // Top 3 Hit Products
  const highlightIds = ["corp-profile", "fcommerce-os", "founder-team-transition-os"];
  const visibleProducts = products.filter(p => p.status !== 'turned_off');
  const highlightedProducts = visibleProducts.filter(p => highlightIds.includes(p.id));
  const otherProducts = visibleProducts.filter(p => !highlightIds.includes(p.id));

  return (
    <section className="py-20 bg-[#0B1733] overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0 mb-10 flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <span className="text-[#43A7E8] font-black text-xs uppercase tracking-widest block mb-2">
            Most Popular Systems & Top Hits
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Running Hits & Proven Growth Systems
          </h2>
        </div>
        <a href="#products" className="text-xs font-bold text-[#43A7E8] bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition self-start md:self-auto">
          সম্পূর্ণ {products.length}টি প্রডাক্ট ও আর্কিটেকচার দেখুন →
        </a>
      </div>

      {/* Top 3 Highlighted Cards with Rich Visuals */}
      <div className="max-w-[1160px] mx-auto px-4 md:px-0 grid md:grid-cols-3 gap-6 mb-14">
        {highlightedProducts.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#43A7E8]/50 transition-all group flex flex-col shadow-xl"
          >
            {/* Image Preview in Brand Palette */}
            <div className="h-[170px] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center p-6 relative border-b border-white/5">
              <div className="relative w-[150px] h-[120px]">
                <Image src={p.img} alt={p.title} fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[#0B1733] text-[#E0F2FE] text-[11px] font-black px-3 py-1 rounded-lg tracking-wider border border-white/20">
                    🔥 {p.badge}
                  </span>
                  <span className="text-[#43A7E8] font-black text-2xl tracking-tight">{p.price}</span>
                </div>
                <h3 className="text-[19px] font-black text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-[13px] text-[#94A3B8] font-medium leading-relaxed mb-6">{p.desc}</p>
              </div>

              {p.status === 'out_of_stock' ? (
                <div className="space-y-2">
                  <button
                    disabled
                    className="w-full inline-block text-center py-3 bg-gray-500 text-white cursor-not-allowed font-black text-xs rounded-xl"
                  >
                    🚫 Sold Out
                  </button>
                  <Link
                    href={`/products/${p.id}`}
                    className="w-full inline-block text-center py-2 bg-white/10 text-[#43A7E8] font-black text-xs rounded-xl hover:bg-white/20 transition"
                  >
                    Full Dedicated Page →
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/8801814716713?text=${encodeURIComponent(`সালাম, আমি "${p.title}" (${p.price}) সম্পর্কে জানতে ও অর্ডার করতে চাই।`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-block text-center py-3 bg-[#43A7E8] text-[#0B1733] font-black text-xs rounded-xl hover:bg-white transition shadow-md"
                  >
                    Order Setup via WhatsApp →
                  </a>
                  <Link
                    href={`/products/${p.id}`}
                    className="w-full inline-block text-center py-2 bg-white/10 text-[#43A7E8] font-black text-xs rounded-xl hover:bg-white/20 transition"
                  >
                    Full Dedicated Page →
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Auto-scrolling Marquee for other products */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-2 animate-marquee whitespace-nowrap flex gap-4">
          {[...otherProducts, ...otherProducts].map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="inline-flex flex-col w-[280px] bg-white/5 border border-white/10 rounded-2xl p-4 shrink-0 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-black text-[#E0F2FE] bg-[#0B1733] px-2 py-0.5 rounded tracking-wider border border-white/20 uppercase">{p.badge}</span>
                <span className="text-[#43A7E8] font-black text-[13px] tracking-tight">{p.price}</span>
              </div>
              <div className="font-black text-white text-[14px] truncate whitespace-normal leading-snug mb-2 h-9">
                {p.title}
              </div>
              <p className="text-[12px] text-[#94A3B8] font-medium line-clamp-2 mb-3 leading-snug whitespace-normal">
                {p.desc}
              </p>
              <a
                href="#products"
                className="text-[12px] font-bold text-center text-[#E0F2FE] bg-white/10 py-2 rounded-xl hover:bg-white/20 transition mt-auto"
              >
                Details & Order
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
