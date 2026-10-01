"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface StageData {
  stageNumber: string;
  stageName: string;
  badge: string;
  tagline: string;
  storyHeading: string;
  storyNarrative: string;
  founderState: string;
  systemSolution: string;
  impactMetrics: { label: string; value: string; trend: string }[];
  connectedSystem: { name: string; link: string; price: string };
  systemColor: string;
}

const STORY_STAGES: StageData[] = [
  {
    stageNumber: "01",
    stageName: "The Hustle & Chaos",
    badge: "Stage 1: Survival to Structure",
    tagline: "সবকিছু ওনারের মাথায় — কোনো লিখিত সিস্টেম নেই",
    storyHeading: "ব্যবসার সব সিদ্ধান্ত কি আপনার ওপর আটকে থাকে?",
    storyNarrative:
      "বেশিরভাগ উদ্যোক্তা ব্যবসা শুরু করেন স্বপ্ন নিয়ে, কিন্তু কয়েক মাস পর নিজেই হয়ে যান সবচেয়ে ব্যস্ত কর্মচারী। ইনবক্স রিপ্লাই থেকে কুরিয়ার হ্যান্ডলিং—সবকিছু ওনারকে দেখতে হয়। একটি দিন ছুটি নিলে পুরো ব্যবসা বন্ধ হয়ে যাওয়ার উপক্রম হয়।",
    founderState: "⚠️ ১৬ ঘণ্টা পরিশ্রম, ক্যাশ ফ্লো নিয়ে অনিশ্চয়তা, টেন্ডার/বড় ক্লায়েন্ট হারানো।",
    systemSolution: "Nexus Foundation Suite: ৬-৮ পৃষ্ঠার কর্পোরেট প্রোফাইল ও বেসিক ওয়ার্কফ্লো ম্যাপিং।",
    impactMetrics: [
      { label: "Founder Time Freed", value: "15%", trend: "Initial Boost" },
      { label: "Brand Trust Index", value: "62/100", trend: "+30% Uplift" },
      { label: "Deal Closing Rate", value: "1.4x", trend: "Base Setup" }
    ],
    connectedSystem: { name: "Starter Business Profile Suite", link: "/products/starter-profile", price: "৳৯৯৯" },
    systemColor: "#F59E0B"
  },
  {
    stageNumber: "02",
    stageName: "Standardization & Identity",
    badge: "Stage 2: Institutional Brand",
    tagline: "অগোছালো ব্রোশিওর বাদ দিয়ে Institutional Grade প্রেজেন্টেশন",
    storyHeading: "বড় ক্লায়েন্ট ও ইনভেস্টরের চোখে আপনার গ্রহণযোগ্যতা কতটুকু?",
    storyNarrative:
      "যখন ব্যবসা কিছুটা স্থিতিশীল হয়, তখন বড় কর্পোরেট ডিল বা প্রাতিষ্ঠানিক ক্লায়েন্ট ধরতে প্রয়োজন হয় রিসার্চ-ব্যাকড ব্রান্ড আইডেন্টিটি। আপনার প্রেজেন্টেশন, অর্গানোগ্রাম ও ভ্যালু প্রোপোজিশন যদি পেশাদার না হয়, তবে কোটি টাকার প্রজেক্ট হাতছাড়া হয়ে যায়।",
    founderState: "⚠️ সাধারণ ওয়ার্ড ডকুমেন্টে ড্রাফট করা প্রোফাইল, ক্লায়েন্ট সন্দেহের চোখে দেখে।",
    systemSolution: "Nexus Corporate Profile & Pitch Deck OS: ১২-১৫ পৃষ্ঠার রিসার্চ-সমৃদ্ধ মাস্টার ফাইল।",
    impactMetrics: [
      { label: "B2B Deal Conversion", value: "3.2x", trend: "High Confidence" },
      { label: "Client Meeting Success", value: "88%", trend: "Institutional Grade" },
      { label: "Tender/Bank Readiness", value: "100%", trend: "Fully Compliant" }
    ],
    connectedSystem: { name: "Premium Corporate Profile", link: "/products/corp-profile", price: "৳১,৪৯৯" },
    systemColor: "#38BDF8"
  },
  {
    stageNumber: "03",
    stageName: "Operational Autonomy",
    badge: "Stage 3: Systems Over People",
    tagline: "টিম কাজ করবে লিখিত SOPs ও RACI ম্যাট্রিক্স অনুযায়ী",
    storyHeading: "কাউকে দায়িত্ব দিলে কি ভুল হয় বা জবাবদিহিতা থাকে না?",
    storyNarrative:
      "টিম বড় হওয়ার সাথে সাথে ভুল বাড়ে, কুরিয়ার রিটার্ন রেট ২০-৩০% ছাড়িয়ে যায় এবং লাভ গিলে ফেলে। Nexus Operational Shield নিশ্চিত করে প্রতিটি পদের জন্য সুস্পষ্ট ডেলিগেশন রুলস, রিটার্ন প্রিভেনশন চেকলিস্ট ও ফাইন্যান্সিয়াল অডিট লুপ।",
    founderState: "⚠️ ব্লেম-গেম, কর্মচারীদের ভুল, রিটার্নে দৈনিক হাজার হাজার টাকা লোকসান।",
    systemSolution: "Nexus Operations & Finance Stack: Courier Return Killer + RACI Matrix + SOPs।",
    impactMetrics: [
      { label: "Courier Return Drop", value: "-40%", trend: "Loss Blocked" },
      { label: "Delegation Success", value: "92%", trend: "Autonomous Team" },
      { label: "Monthly Profit Saved", value: "৳৩৫,০০০+", trend: "Direct Recovery" }
    ],
    connectedSystem: { name: "Facebook Commerce OS", link: "/products/fcommerce-os", price: "৳১,৯৯৯" },
    systemColor: "#10B981"
  },
  {
    stageNumber: "04",
    stageName: "The AI & Ecosystem Scale",
    badge: "Stage 4: Autonomous Machine",
    tagline: "Make.com, AI CRM ও ক্লাউড ড্যাশবোর্ডে ২৪/৭ স্বয়ংক্রিয় প্রবৃদ্ধি",
    storyHeading: "ঘুমিয়ে থাকলেও কি আপনার ব্যবসা স্বয়ংক্রিয়ভাবে কাজ করে?",
    storyNarrative:
      "এটিই Nexus Lift-এর চূড়ান্ত লক্ষ্য—Connecting Sources, Lifting Business। সোশ্যাল মিডিয়া লিড আসা থেকে শুরু করে Make.com এর মাধ্যমে WhatsApp সেলস ফানেল, অটোমেটেড ফলো-আপ এবং লাইভ সিআরএম ড্যাশবোর্ড ২৪ ঘণ্টা বিরতিহীনভাবে কাজ করে।",
    founderState: "🚀 ওনার কেবল স্ট্র্যাটেজিক গ্রোথ দেখেন, দৈনন্দিন কাজ স্বয়ংক্রিয় আর্কিটেকচারে চলে।",
    systemSolution: "Nexus Full Growth OS & Make.com Automation Pipeline: সম্পূর্ণ বিজনেস ভল্ট।",
    impactMetrics: [
      { label: "Hands-Free Operations", value: "88%", trend: "Autonomous" },
      { label: "Response Time", value: "< 2 Mins", trend: "24/7 Active" },
      { label: "Overall System Score", value: "96/100", trend: "Market Leader" }
    ],
    connectedSystem: { name: "Full Business Growth OS Bundle", link: "/preview#bundles", price: "৳৩,৯৯৯" },
    systemColor: "#818CF8"
  }
];

export default function BrandGrowthStoryDemo() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const current = STORY_STAGES[activeStage];

  return (
    <section className="py-20 md:py-32 bg-[#071127] text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Brand Color Ambient Glows */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40 transition-all duration-700"
        style={{ backgroundColor: current.systemColor }}
      />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#1971A5]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-4 md:px-0 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-[#43A7E8]/10 border border-[#43A7E8]/30 text-[#43A7E8] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
            ✦ The Core Brand Story & Growth Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            How Nexus Lift Transforms Your Business
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            ব্যবসার বিশৃঙ্খলা (Chaos) থেকে প্রাতিষ্ঠানিক স্বয়ংক্রিয় প্রবৃদ্ধি (Institutional Scale) — নিচের ৪টি ধাপে ক্লিক করে লাইভ দেখুন আপনার জার্নি কেমন হবে।
          </p>
        </div>

        {/* 4-Stage Interactive Story Progress Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {STORY_STAGES.map((stg, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-white/10 border-[#43A7E8] shadow-[0_0_25px_rgba(67,167,232,0.25)]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-black px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#43A7E8] text-[#071127]' : 'bg-white/10 text-[#94A3B8]'
                    }`}
                  >
                    Phase {stg.stageNumber}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#43A7E8] animate-ping" />
                  )}
                </div>
                <div className="font-extrabold text-xs sm:text-sm text-white truncate">
                  {stg.stageName}
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-0.5 truncate">
                  {stg.badge}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeStoryGlow"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#43A7E8]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-[#0B1733]/90 border border-white/15 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-xl grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center"
          >
            {/* Left: Narrative & Real Problem/Solution */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#43A7E8] mb-3">
                <span>⚡ {current.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-4">
                {current.storyHeading}
              </h3>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
                {current.storyNarrative}
              </p>

              {/* Problem vs Nexus Solution Boxes */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-red-950/40 border border-red-500/20 rounded-xl text-xs sm:text-sm text-red-200">
                  <span className="font-bold text-red-400 block mb-0.5">বর্তমান অবস্থা (Without System):</span>
                  {current.founderState}
                </div>
                <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs sm:text-sm text-emerald-200">
                  <span className="font-bold text-emerald-400 block mb-0.5">Nexus Lift সমাধান (With System):</span>
                  {current.systemSolution}
                </div>
              </div>

              {/* CTA link to specific system */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={current.connectedSystem.link}
                  className="bg-[#43A7E8] text-[#0B1733] font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-white transition text-center shadow-lg shadow-[#43A7E8]/20"
                >
                  Explore {current.connectedSystem.name} ({current.connectedSystem.price}) →
                </Link>
                <a
                  href={`https://wa.me/8801814716713?text=${encodeURIComponent(`সালাম, আমি Nexus Lift এর "${current.stageName}" নিয়ে কথা বলতে ও আমার ব্যবসার জন্য সিস্টেম সাজাতে চাই।`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl hover:bg-white/10 transition text-center"
                >
                  WhatsApp এ কনসাল্টেশন
                </a>
              </div>
            </div>

            {/* Right: Real-time Dynamic Metrics Simulation Display */}
            <div className="bg-[#071127] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-inner flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider block">
                    Architecture Monitor
                  </span>
                  <span className="text-sm font-black text-white">
                    Phase {current.stageNumber} — Live Simulation
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  ● Real Impact
                </span>
              </div>

              {/* Metric Counter Rows */}
              <div className="space-y-4 mb-6">
                {current.impactMetrics.map((met, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs text-[#94A3B8] font-medium">{met.label}</div>
                      <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                        {met.value}
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#43A7E8] bg-[#43A7E8]/10 border border-[#43A7E8]/20 px-2.5 py-1 rounded-lg">
                      {met.trend}
                    </span>
                  </div>
                ))}
              </div>

              {/* System Delivery Stamp */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between text-[11px] text-[#94A3B8]">
                <span>⚡ Delivery SLA: <strong className="text-white">48–72 Hours</strong></span>
                <span>🔒 Support: <strong className="text-white">100% Revision</strong></span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
