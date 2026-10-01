import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import HeroSystemHealthCard from '@/components/sections/HeroSystemHealthCard';
import HomeProductCarousel from '@/components/sections/HomeProductCarousel';
import ProductGrid from '@/components/sections/ProductGrid';
import ProblemSection from '@/components/sections/ProblemSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import CustomerJourneySection from '@/components/sections/CustomerJourneySection';
import InteractiveMotionShowcase from '@/components/sections/InteractiveMotionShowcase';
import BrandGrowthStoryDemo from '@/components/sections/BrandGrowthStoryDemo';
import TrustFaqSection from '@/components/sections/TrustFaqSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustSlaSection from '@/components/sections/TrustSlaSection';
import GrowthBundlesSection from '@/components/sections/GrowthBundlesSection';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import VisionGallery from '@/components/sections/VisionGallery';
import InsightsSection from '@/components/sections/InsightsSection';
import AiRouterChat from '@/components/sections/AiRouterChat';
import GrowthArchitectureSection from '@/components/sections/GrowthArchitectureSection';

export const metadata = {
  title: 'Nexus Lift | Business Infrastructure & Growth Systems in Bangladesh',
  description: 'Research-backed Business Infrastructure, Operating Systems, SOPs and AI Automation for Bangladeshi SMEs, F-Commerce brands and Founders.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#101828]">
      {/* ─── JSON-LD STRUCTURED SCHEMA MARKUP FOR SEO & AI SEARCH ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://nexuslift.xyz/#organization",
                "name": "Nexus Lift",
                "url": "https://nexuslift.xyz",
                "logo": "https://nexuslift.xyz/logo.png",
                "description": "Connecting Sources, Lifting Business — AI-Powered Business Infrastructure, Operating Systems & Automation Platform for SMEs & Startups in Bangladesh.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dhaka",
                  "addressCountry": "BD"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+8801814716713",
                  "contactType": "customer service",
                  "availableLanguage": ["Bangla", "English"]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://nexuslift.xyz/#website",
                "url": "https://nexuslift.xyz",
                "name": "Nexus Lift — Business Growth Infrastructure",
                "publisher": {
                  "@id": "https://nexuslift.xyz/#organization"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://nexuslift.xyz/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "ডেলিভারি কত সময়ে সম্পন্ন হয়?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "অর্ডার কনফার্মেশনের পর আমাদের টিম ৪৮ থেকে ৭২ ঘণ্টার মধ্যে আপনার কাস্টমাইজড বিজনেস সিস্টেম ও ডকুমেন্টস ডিজিটাল ডেলিভারি সম্পন্ন করে।"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "কী কী ফরম্যাটে ফাইলগুলো পাব?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "আপনি এডিটেবল Word/Docs ফাইল, রেডি-টু-প্রিন্ট হাই-রেজোলিউশন PDF এবং স্বয়ংক্রিয় এক্সেল/গুগল শিট ক্যালকুলেটর ফরম্যাটে সমস্ত সিস্টেম ও ডকুমেন্টস পাবেন।"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "পেমেন্ট মেথড কী এবং রিভিশন পলিসি কেমন?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "আমরা ভেরিফাইড বিকাশ মার্চেন্ট ও ব্যাংক ট্রান্সফার গ্রহণ করি। ডেলিভারির পর আপনার সন্তুষ্টি নিশ্চিত করতে আনলিমিটেড রিভিশন ও ৭ দিনের ট্রাস্ট সাপোর্ট সুবিধা রয়েছে।"
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* ─── ANNOUNCEMENT BAR ─── */}
      <div className="bg-[#0B1733] text-[#dce7f7] text-[11px] sm:text-[13px] py-2 sm:py-[9px] border-b border-white/10">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-1 sm:gap-3">
          <span className="truncate max-w-full">Business Infrastructure & Systems Platform — ঢাকা, বাংলাদেশ</span>
          <span className="shrink-0">
            SLA: ৪৮–৭২ ঘণ্টা ·{' '}
            <a href="https://wa.me/8801814716713" className="text-[#43A7E8] font-bold hover:underline">
              WhatsApp: 01814-716713
            </a>
          </span>
        </div>
      </div>

      {/* ─── NAVBAR ─── */}
      <Navbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════
            1. HERO — First Impression & Clear Value
        ══════════════════════════════════════════ */}
        <header className="hero-radial py-8 sm:py-12 md:py-20 overflow-hidden">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 grid md:grid-cols-[1.08fr_0.92fr] gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[#DBEAFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3">
                Connecting Sources, Lifting Business.
              </span>

              <h1 className="text-[26px] xs:text-[30px] sm:text-4xl md:text-[54px] lg:text-[60px] leading-[1.2] sm:leading-[1.12] md:leading-[1.08] tracking-tight text-[#0B1733] font-black my-4 break-words">
                আপনার Business আছে।<br className="hidden sm:inline" />{' '}
                <span className="text-[#1971a5]">
                  কিন্তু Business System আছে কি?
                </span>
              </h1>

              <p className="text-[14px] sm:text-[16px] md:text-[17px] text-[#374151] max-w-[620px] leading-relaxed">
                Business Chaos থেকে Systematic Growth — Nexus Lift আপনার প্রয়োজন অনুযায়ী Research-backed Brand, Structure, Operations, Growth, AI এবং Management System তৈরি করে।
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 my-6 sm:my-7">
                <a href="#diagnose" className="w-full sm:w-auto text-center bg-[#0B1733] text-white px-5 sm:px-6 py-3.5 rounded-xl font-extrabold text-sm hover:-translate-y-[1px] hover:shadow-[0_10px_25px_rgba(11,23,51,0.22)] transition-all">
                  আমার Business Diagnose করুন →
                </a>
                <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3 w-full sm:w-auto">
                  <a href="#products" className="text-center px-4 sm:px-6 py-3.5 border-2 border-[#64748B] rounded-xl font-extrabold text-xs sm:text-sm text-[#0B1733] hover:bg-[#F0F4F8] transition-all">
                    Explore Products
                  </a>
                  <a href="#bundles" className="text-center px-4 sm:px-6 py-3.5 bg-[#EAF6FF] text-[#0B5A96] rounded-xl font-extrabold text-xs sm:text-sm hover:bg-[#BFDBFE] transition-all">
                    🔥 Value Bundles
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] text-[#374151]">
                <span className="font-bold text-emerald-700">✓ 48–72h SLA</span>
                <span className="w-1 h-1 bg-[#94A3B8] rounded-full" />
                <span>Print PDF + Word</span>
                <span className="w-1 h-1 bg-[#94A3B8] rounded-full" />
                <span>Verified bKash</span>
              </div>
            </div>

            <HeroSystemHealthCard />
          </div>
        </header>

        {/* ══════════════════════════════════════════
            2. PROBLEM RECOGNITION (Pain First)
        ══════════════════════════════════════════ */}
        <div id="solutions" className="bg-white">
          <ProblemSection />
        </div>

        {/* ══════════════════════════════════════════
            GROWTH ARCHITECTURE ROADMAP
        ══════════════════════════════════════════ */}
        <GrowthArchitectureSection />

        {/* ══════════════════════════════════════════
            3. FESTIVE TRIO CAROUSEL
        ══════════════════════════════════════════ */}
        <HomeProductCarousel />

        {/* ══════════════════════════════════════════
            4. 360° ARCHITECTURE
        ══════════════════════════════════════════ */}
        <ArchitectureSection />

        {/* ══════════════════════════════════════════
            5. TESTIMONIALS & FOUNDER SOCIAL PROOF
        ══════════════════════════════════════════ */}
        <TestimonialsSection />

        {/* ══════════════════════════════════════════
            6. VALUE GROWTH BUNDLES
        ══════════════════════════════════════════ */}
        <div id="bundles">
          <GrowthBundlesSection />
        </div>

        {/* ══════════════════════════════════════════
            7. 6 GROWTH GATEWAYS (Full Product Catalog)
        ══════════════════════════════════════════ */}
        <div id="products">
          <ProductGrid />
        </div>

        {/* ══════════════════════════════════════════
            8. CUSTOMER JOURNEY + TRUST SLA
        ══════════════════════════════════════════ */}
        <CustomerJourneySection />
        <TrustSlaSection />

        {/* ══════════════════════════════════════════
            8.5 BRAND STORY & 4-STAGE INTERACTIVE DEMO
        ══════════════════════════════════════════ */}
        <BrandGrowthStoryDemo />

        {/* ══════════════════════════════════════════
            9. 3 PRIORITIES INTERACTIVE MOTION SHOWCASE
        ══════════════════════════════════════════ */}
        <InteractiveMotionShowcase />

        {/* ══════════════════════════════════════════
            10. LEAD MAGNET CHECKLIST
        ══════════════════════════════════════════ */}
        <LeadMagnetSection />

        {/* ══════════════════════════════════════════
            11. VISION GALLERY
        ══════════════════════════════════════════ */}
        <VisionGallery />

        {/* ══════════════════════════════════════════
            11.5 BUSINESS GROWTH INSIGHTS & CASE STUDIES
        ══════════════════════════════════════════ */}
        <InsightsSection />

        {/* ══════════════════════════════════════════
            12. TRUST FAQ & OBJECTION HANDLER
        ══════════════════════════════════════════ */}
        <TrustFaqSection />

        {/* ══════════════════════════════════════════
            13. AI ROUTER CHAT (24/7 Virtual Strategist)
        ══════════════════════════════════════════ */}
        <div id="diagnose">
          <AiRouterChat />
        </div>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#071127] text-[#CBD5E1] py-12 text-sm border-t border-white/10">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="text-lg font-black text-white tracking-wider block mb-1">NEXUS LIFT</span>
            <p className="text-xs text-[#CBD5E1] max-w-[280px] leading-relaxed">
              AI-Powered Business Growth Infrastructure Platform — ঢাকা, বাংলাদেশ
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs text-[#CBD5E1]">
            <div className="space-y-2">
              <div className="text-white font-bold mb-1">Platform</div>
              <a href="#products" className="block hover:text-white transition">Products</a>
              <a href="#bundles" className="block hover:text-white transition">Bundles</a>
              <a href="#solutions" className="block hover:text-white transition">Solutions</a>
              <Link href="/insights" className="block hover:text-white transition">Insights & Case Studies</Link>
              <Link href="/free-tools" className="block hover:text-white transition">Free Tools</Link>
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold mb-1">Company</div>
              <Link href="/about-us" className="block hover:text-white transition">About Us</Link>
              <a href="https://wa.me/8801814716713" className="block hover:text-white transition">WhatsApp</a>
              <a href="#diagnose" className="block hover:text-white transition">AI Diagnose</a>

              <div className="pt-3">
                <div className="text-white font-bold mb-2">Follow Us</div>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#43A7E8]/50 hover:bg-white/10 transition"
                  >
                    <span className="text-[#43A7E8] font-black text-[14px]">f</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#43A7E8]/50 hover:bg-white/10 transition"
                  >
                    <span className="text-[#43A7E8] font-black text-[14px]">⌁</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#43A7E8]/50 hover:bg-white/10 transition"
                  >
                    <span className="text-[#43A7E8] font-black text-[14px]">in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#94A3B8]">
          <span>© 2026 Nexus Lift. All rights reserved. · Connecting Sources, Lifting Business.</span>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
