import Navbar from '@/components/layout/Navbar';
import HomeProductCarousel from '@/components/sections/HomeProductCarousel';
import ProductGrid from '@/components/sections/ProductGrid';
import ProblemSection from '@/components/sections/ProblemSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import CustomerJourneySection from '@/components/sections/CustomerJourneySection';
import WhyPartnerSection from '@/components/sections/WhyPartnerSection';
import InteractiveMotionShowcase from '@/components/sections/InteractiveMotionShowcase';
import AiRouterChat from '@/components/sections/AiRouterChat';
import TrustFaqSection from '@/components/sections/TrustFaqSection';
import VisionGallery from '@/components/sections/VisionGallery';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustSlaSection from '@/components/sections/TrustSlaSection';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import GrowthBundlesSection from '@/components/sections/GrowthBundlesSection';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';

export default function Home() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#0B1733] text-[#dce7f7] text-[13px] py-[9px] border-b border-white/10">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex justify-between items-center gap-3">
          <span>Business Infrastructure & Systems Platform — ঢাকা, বাংলাদেশ</span>
          <span>
            SLA: ৪৮–৭২ ঘণ্টার মধ্যে ডিজিটাল ডেলিভারি ·{' '}
            <a href="https://wa.me/8801814716713" className="text-[#43A7E8] font-bold hover:underline">
              WhatsApp: 01814-716713
            </a>
          </span>
        </div>
      </div>

      <Navbar />

      <main className="flex-1">
        {/* ─── 1. HERO ─── */}
        <header className="hero-radial py-12 md:py-20 overflow-hidden">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 grid md:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[#EAF6FF] text-[#125883] px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                Connecting Sources, Lifting Business.
              </span>
              <h1 className="text-4xl md:text-[64px] leading-[1.06] tracking-tight text-[#0B1733] font-black my-4">
                আপনার Business আছে।<br />
                <span className="text-[#1971a5]">কিন্তু Business System আছে কি?</span>
              </h1>
              <p className="text-[17px] text-[#667085] max-w-[620px] leading-relaxed">
                Business Chaos থেকে Systematic Growth — Nexus Lift আপনার প্রয়োজন অনুযায়ী
                Research-backed Brand, Structure, Operations, Growth, AI এবং Management System তৈরি করে।
              </p>

              <div className="flex flex-wrap gap-3 my-7">
                <a href="#diagnose" className="bg-[#0B1733] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm hover:-translate-y-[1px] hover:shadow-xl transition-all">
                  আমার Business Diagnose করুন →
                </a>
                <a href="#products" className="px-6 py-3.5 border border-[#D0D5DD] rounded-xl font-extrabold text-sm text-[#0B1733] hover:bg-[#F7FAFC] transition-all">
                  Explore Products
                </a>
                <a href="#bundles" className="px-6 py-3.5 bg-[#EAF6FF] text-[#1971A5] rounded-xl font-extrabold text-sm hover:bg-[#d5edff] transition-all">
                  🔥 Value Bundles
                </a>
              </div>

              <div className="flex items-center gap-2 text-[13px] text-[#667085]">
                <span className="font-semibold text-emerald-600">✓ 48–72h SLA</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full mx-1" />
                <span>Print PDF + Word</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full mx-1" />
                <span>Verified bKash</span>
              </div>
            </div>

            {/* Business System Health Card */}
            <div className="bg-gradient-to-br from-[#0B1733] to-[#152E5C] text-white p-7 rounded-[28px] shadow-2xl border border-white/10 card-shine">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="bg-white/10 px-3 py-1.5 rounded-full text-[11px] text-[#cfe8ff] font-bold tracking-wider inline-block">
                    NEXUS BUSINESS SYSTEM HEALTH
                  </div>
                  <div className="mt-2 font-extrabold text-base">Your business snapshot</div>
                </div>
                <div className="text-[42px] font-black tracking-tight leading-none text-white">
                  78<span className="text-sm text-[#9fb3cc] font-semibold">/100</span>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-5">
                <div className="h-full w-[78%] bg-[#43A7E8] rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { n: '01 Identity', s: 'Brand & Profile' },
                  { n: '02 Structure', s: 'Roles & Organogram' },
                  { n: '03 Operations', s: 'SOP & Workflow' },
                  { n: '04 Growth', s: 'Sales & Conversion' },
                ].map((item) => (
                  <div key={item.n} className="p-3 border border-white/10 rounded-xl bg-white/5">
                    <b className="block text-xs text-white mb-0.5">{item.n}</b>
                    <span className="text-[11px] text-[#aebfd5]">{item.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ─── 2. PRIORITY HIT CAROUSEL ─── */}
        <HomeProductCarousel />

        {/* ─── 3. PROBLEM / PAIN-FIRST COPY ─── */}
        <div id="solutions">
          <ProblemSection />
        </div>

        {/* ─── 4. SOCIAL PROOF & TESTIMONIALS ─── */}
        <TestimonialsSection />

        {/* ─── 5. 360° ARCHITECTURE ─── */}
        <ArchitectureSection />

        {/* ─── 6. STRATEGIC GROWTH BUNDLES ─── */}
        <GrowthBundlesSection />

        {/* ─── 7. 3 PRIORITIES INTERACTIVE MOTION ─── */}
        <InteractiveMotionShowcase />

        {/* ─── 8. CUSTOMER JOURNEY ─── */}
        <CustomerJourneySection />

        {/* ─── 9. 6 GROWTH GATEWAYS (Full Product Grid) ─── */}
        <div id="products">
          <ProductGrid />
        </div>

        {/* ─── 10. TRUST & SLA VAULT STANDARD ─── */}
        <TrustSlaSection />

        {/* ─── 11. FREE LEAD MAGNET CHECKLIST ─── */}
        <LeadMagnetSection />

        {/* ─── 12. VISION GALLERY ─── */}
        <VisionGallery />

        {/* ─── 13. LATEST INSIGHTS / BLOG PREVIEW ─── */}
        <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="text-[#1971A5] font-black text-xs uppercase tracking-widest mb-1">
                  Knowledge Vault
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#0B1733]">
                  Business Growth Insights & Case Studies
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-[#1971A5] hover:underline">
                All Insights →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                >
                  <span className="text-[10px] font-black uppercase text-[#1971A5] bg-[#EAF6FF] px-2 py-1 rounded self-start mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-extrabold text-[#0B1733] text-sm mb-2 leading-snug group-hover:text-[#1971A5] transition-colors">
                    {post.banglaTitle}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 text-xs font-black text-[#1971A5]">Read Strategy &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 14. WHY PARTNER ─── */}
        <WhyPartnerSection />

        {/* ─── 15. TRUST / FAQ ─── */}
        <TrustFaqSection />

        {/* ─── 16. AI DIAGNOSE (24/7 Virtual Strategist) ─── */}
        <div id="diagnose">
          <AiRouterChat />
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#071127] text-[#aebbd0] py-12 text-sm border-t border-white/10">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="text-lg font-black text-white tracking-wider block mb-1">NEXUS LIFT</span>
            <p className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
              AI-Powered Business Growth Infrastructure Platform — ঢাকা, বাংলাদেশ
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs text-gray-400">
            <div className="space-y-2">
              <div className="text-white font-bold mb-1">Platform</div>
              <Link href="#products" className="block hover:text-white transition">Products</Link>
              <Link href="#bundles" className="block hover:text-white transition">Bundles</Link>
              <Link href="#solutions" className="block hover:text-white transition">Solutions</Link>
              <Link href="/blog" className="block hover:text-white transition">Insights</Link>
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold mb-1">Company</div>
              <Link href="/about-us" className="block hover:text-white transition">About Us</Link>
              <Link href="/dashboard" className="block hover:text-white transition">CEO Console</Link>
              <a href="https://wa.me/8801814716713" className="block hover:text-white transition">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 border-t border-white/10 mt-8 pt-6 text-xs text-[#475467]">
          © 2026 Nexus Lift. All rights reserved. · Connecting Sources, Lifting Business.
        </div>
      </footer>
    </>
  );
}
