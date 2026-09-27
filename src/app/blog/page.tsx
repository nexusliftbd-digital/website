"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { products } from "@/data/products";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#F8FAFC]">
        {/* Header Hero */}
        <section className="bg-[#0B1733] text-white py-16 md:py-20 border-b border-white/10">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0">
            <span className="text-[#43A7E8] font-black text-xs uppercase tracking-widest block mb-2">
              Nexus Lift Knowledge Vault & Growth Insights
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-[800px]">
              Business Systems, Architecture & Scaling Strategy
            </h1>
            <p className="text-[#94A3B8] text-sm md:text-base mt-4 max-w-[680px] leading-relaxed">
              বাংলাদেশের ব্যবসাগুলোকে সিস্টেমেটিক রূপান্তর, সেলস কনভার্সন বৃদ্ধি এবং ফাউন্ডার বটলনেক দূর করার প্র্যাকটিক্যাল গাইড ও কেস স্টাডিজ।
            </p>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="py-16">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                >
                  {/* Visual Header Card with Nexus Brand Palette */}
                  <div className={`p-6 bg-gradient-to-br ${post.coverColor} text-white relative`}>
                    <span className="bg-white/20 backdrop-blur text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-black mt-4 leading-snug">
                      {post.banglaTitle}
                    </h3>
                    <div className="text-[11px] text-white/70 mt-2">
                      {post.readTime} · {post.date}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1733] mb-2 leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-xs text-[#475467] leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div>
                      {/* Connected Recommended Products */}
                      <div className="pt-4 border-t border-[#E2E8F0] mb-4">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-2">
                          🔗 Connected Solutions:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {post.relatedProducts.map((pId) => {
                            const p = products.find((prod) => prod.id === pId);
                            if (!p) return null;
                            return (
                              <span
                                key={pId}
                                className="text-[11px] bg-[#EAF6FF] text-[#1971A5] font-extrabold px-2 py-0.5 rounded border border-[#43A7E8]/30"
                              >
                                {p.title}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center justify-center w-full py-2.5 bg-[#0B1733] text-white text-xs font-black rounded-xl hover:bg-[#1971A5] transition shadow-sm"
                      >
                        Read Full Strategy &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#071127] text-[#aebbd0] py-10 text-xs border-t border-white/10 text-center">
        © 2026 Nexus Lift. All rights reserved. Connecting Sources, Lifting Business.
      </footer>
    </>
  );
}
