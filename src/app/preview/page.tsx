"use client";

import React, { useState } from 'react';
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

export default function StagingPreview() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

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

      {/* ─── PREVIEW CONTROLLER ─── */}
      <div className="bg-[#F0F4F8] border-b border-[#CBD5E1] py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <span className="bg-[#0B1733] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
            Preview Mode — লাইভ সাইটে কোনো পরিবর্তন নেই
          </span>
        </div>
        <button
          onClick={() => setLang(l => l === 'bn' ? 'en' : 'bn')}
          className="bg-white border border-[#94A3B8] text-[#0B1733] px-3 py-1 rounded-lg text-xs font-bold hover:bg-[#E2E8F0] transition"
        >
          Language: {lang === 'bn' ? 'বাংলা (BN)' : 'English (EN)'}
        </button>
      </div>

      {/* ─── NAVBAR ─── */}
      <Navbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════
            1. HERO — "আমি কি এখানে আছি?" — First impression
        ══════════════════════════════════════════ */}
        <header className="hero-radial py-8 sm:py-12 md:py-20 overflow-hidden">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 grid md:grid-cols-[1.08fr_0.92fr] gap-8 md:gap-12 items-center">
            <div>
              {/* Badge — darker text on light bg for contrast */}
              <span className="inline-flex items-center gap-1.5 bg-[#DBEAFE] text-[#1E40AF] px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3">
                Connecting Sources, Lifting Business.
              </span>

              <h1 className="text-[26px] xs:text-[30px] sm:text-4xl md:text-[54px] lg:text-[60px] leading-[1.2] sm:leading-[1.12] md:leading-[1.08] tracking-tight text-[#0B1733] font-black my-4 break-words">
                {lang === 'bn' ? 'আপনার Business আছে।' : 'You have a business.'}<br className="hidden sm:inline" />{' '}
                <span className="text-[#1971a5]">
                  {lang === 'bn' ? 'কিন্তু Business System আছে কি?' : 'But do you have a business system?'}
                </span>
              </h1>

              {/* Body text — #374151 instead of #667085 for WCAG compliance on white */}
              <p className="text-[14px] sm:text-[16px] md:text-[17px] text-[#374151] max-w-[620px] leading-relaxed">
                {lang === 'bn'
                  ? 'Business Chaos থেকে Systematic Growth — Nexus Lift আপনার প্রয়োজন অনুযায়ী Research-backed Brand, Structure, Operations, Growth, AI এবং Management System তৈরি করে।'
                  : 'From Business Chaos to Systematic Growth — Nexus Lift builds research-backed Brand, Structure, Operations, Growth, AI and Management Systems tailored to your business needs.'}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 my-6 sm:my-7">
                <a href="#diagnose" className="w-full sm:w-auto text-center bg-[#0B1733] text-white px-5 sm:px-6 py-3.5 rounded-xl font-extrabold text-sm hover:-translate-y-[1px] hover:shadow-[0_10px_25px_rgba(11,23,51,0.22)] transition-all">
                  {lang === 'bn' ? 'আমার Business Diagnose করুন →' : 'Diagnose My Business →'}
                </a>
                <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3 w-full sm:w-auto">
                  {/* Ghost button — visible border on white bg */}
                  <a href="#products" className="text-center px-4 sm:px-6 py-3.5 border-2 border-[#64748B] rounded-xl font-extrabold text-xs sm:text-sm text-[#0B1733] hover:bg-[#F0F4F8] transition-all">
                    {lang === 'bn' ? 'Explore Products' : 'Explore Products'}
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
            2. PROBLEM RECOGNITION — Pain confirm করো
            (Carousel-এর আগে, যাতে visitor বলে "হ্যাঁ, এটাই আমার সমস্যা")
        ══════════════════════════════════════════ */}
        <div id="solutions" className="bg-white">
          <ProblemSection />
        </div>

        {/* ══════════════════════════════════════════
            3. FESTIVE TRIO CAROUSEL — Solution glimpse
            (Problem confirm হওয়ার পর product দেখাও)
        ══════════════════════════════════════════ */}
        <HomeProductCarousel />

        {/* ══════════════════════════════════════════
            4. 360° ARCHITECTURE — "এরা পুরো সিস্টেম বোঝে"
            (Credibility & authority establish)
        ══════════════════════════════════════════ */}
        <ArchitectureSection />

        {/* ══════════════════════════════════════════
            5. TESTIMONIALS / SOCIAL PROOF — "সত্যিই কাজ করে?"
            (Architecture দেখার পর proof দরকার)
        ══════════════════════════════════════════ */}
        <TestimonialsSection />

        {/* ══════════════════════════════════════════
            6. GROWTH BUNDLES — High-value conversion point
            (Trust তৈরি হলে এখনই Bundle দেখাও)
        ══════════════════════════════════════════ */}
        <div id="bundles">
          <GrowthBundlesSection />
        </div>

        {/* ══════════════════════════════════════════
            7. PRODUCT GRID — Full 20-product catalog
            (Bundle থেকে Individual চাইলে এখানে)
        ══════════════════════════════════════════ */}
        <div id="products">
          <ProductGrid />
        </div>

        {/* ══════════════════════════════════════════
            8. CUSTOMER JOURNEY + TRUST SLA — "কিভাবে পাব?"
            (Process clarity = objection killer)
        ══════════════════════════════════════════ */}
        <CustomerJourneySection />
        <TrustSlaSection />

        {/* ══════════════════════════════════════════
            8.5 BRAND STORY & 4-STAGE GROWTH DEMO — Full Brand Narrative
            (Connecting Sources, Lifting Business Interactive Journey)
        ══════════════════════════════════════════ */}
        <BrandGrowthStoryDemo />

        {/* ══════════════════════════════════════════
            9. INTERACTIVE MOTION SHOWCASE — Visual engagement
            (Breath/refresh moment before next CTAs)
        ══════════════════════════════════════════ */}
        <InteractiveMotionShowcase />

        {/* ══════════════════════════════════════════
            10. LEAD MAGNET — Capture not-yet-ready visitors
            (Email/WhatsApp opt-in = future revenue pipeline)
        ══════════════════════════════════════════ */}
        <LeadMagnetSection />

        {/* ══════════════════════════════════════════
            11. VISION GALLERY — Brand authority & future vision
            ("এরা কোথায় যাচ্ছে" দেখাও)
        ══════════════════════════════════════════ */}
        <VisionGallery />

        {/* ══════════════════════════════════════════
            11.5 INSIGHTS & CASE STUDIES — Education & Proof
        ══════════════════════════════════════════ */}
        <InsightsSection />

        {/* ══════════════════════════════════════════
            12. TRUST & FAQ — Last objection handler
            (Refund, revision & delivery policy সব clear করো)
        ══════════════════════════════════════════ */}
        <TrustFaqSection />

        {/* ══════════════════════════════════════════
            13. AI ROUTER CHAT — Final close
            (যারা এখনো সিদ্ধান্ত নিতে পারেনি — 24/7 AI close করবে)
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
            </div>
            <div className="space-y-2">
              <div className="text-white font-bold mb-1">Company</div>
              <a href="https://wa.me/8801814716713" className="block hover:text-white transition">WhatsApp</a>
              <a href="#diagnose" className="block hover:text-white transition">AI Diagnose</a>

              <div className="pt-3">
                <div className="text-white font-bold mb-2">Follow</div>
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
