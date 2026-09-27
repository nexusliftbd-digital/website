"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveMotionShowcase() {
  const [activeTab, setActiveTab] = useState<'profile' | 'crm' | 'ai'>('profile');

  return (
    <section className="py-24 bg-[#071127] text-white relative overflow-hidden">
      {/* Dynamic Animated Gradient Mesh */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#43A7E8]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#1971A5]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-4 md:px-0 relative z-10">
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#43A7E8] font-black text-xs uppercase tracking-widest inline-block mb-3 bg-[#43A7E8]/10 px-4 py-1.5 rounded-full border border-[#43A7E8]/20"
          >
            ✦ Next-Gen 3 Priorities Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[46px] font-black tracking-tight leading-tight"
          >
            Experience Live Interactive Motion
          </motion.h2>
          <p className="text-[#94A3B8] text-base mt-3">
            বিজনেস প্রোফাইল কনভার্সন, কাস্টম CRM ড্যাশবোর্ড এবং এআই গ্রোথ ফানেল—সবকিছু এক সাথে লাইভ কাজ করে।
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 p-1.5 rounded-2xl flex gap-2 border border-white/10 backdrop-blur-md">
            {[
              { id: 'profile', label: '1. Conversion Business Profile' },
              { id: 'crm', label: '2. Custom CRM Dashboard' },
              { id: 'ai', label: '3. 24/7 AI Lead & Marketing Funnel' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-5 py-3 rounded-xl font-black text-xs md:text-sm transition-all ${
                  activeTab === tab.id ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#1971A5] rounded-xl shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Dynamic Motion Stage */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl min-h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-10 items-center w-full"
              >
                <div className="space-y-4">
                  <span className="text-xs font-black text-[#43A7E8] tracking-widest uppercase">
                    Priority 01 · Trust & B2B Conversions
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black">
                    High-Converting Business Profiles & Pitch Decks
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    সাধারণ কোম্পানির পরিচিতি নয়—রিসার্চ-ব্যাকড ভ্যালু প্রোপোজিশন, অর্গানোগ্রাম এবং টেন্ডার/ব্যাংক রেডি কমপ্লায়েন্স ফরম্যাট যা ক্লায়েন্টদের বিশ্বাস অর্জন করে।
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-lg font-bold">✓ 100% Print-Ready PDF</span>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-lg font-bold">✓ Editable Word Master</span>
                    <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-lg font-bold">✓ 48-72h SLA Hand-off</span>
                  </div>
                </div>

                {/* Animated 3D Graphic Cards Stack */}
                <div className="relative h-[280px] flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [-3, 3, -3], y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute w-[280px] h-[190px] bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-5 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-[#43A7E8] flex items-center justify-center font-black text-xs text-[#0B1733]">NL</div>
                      <span className="text-[11px] text-[#93C5FD] font-bold">360° Value Prop</span>
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Corporate Identity Deck</div>
                      <div className="text-xs text-[#94A3B8] mt-1">Institutional Profile System</div>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-[#43A7E8]" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'crm' && (
              <motion.div
                key="crm"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-10 items-center w-full"
              >
                <div className="space-y-4">
                  <span className="text-xs font-black text-[#38BDF8] tracking-widest uppercase">
                    Priority 02 · Operational Control
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black">
                    Custom Executive CRM & Pipeline Command
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    অর্ডার ইনটেক থেকে শুরু করে ডিজিটাল ভল্ট ডেলিভারি পর্যন্ত প্রতিটি স্টেজ রিয়েল-টাইমে ট্র্যাক করুন। কোনো লিড হারাবে না এবং কাস্টমার ডেলিভারি হবে শতভাগ নির্ভুল।
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-lg font-bold">✓ 7-Tab Automated System</span>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-lg font-bold">✓ Real-time Revenue Matrix</span>
                    <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-lg font-bold">✓ SLA Clock Tracking</span>
                  </div>
                </div>

                {/* Animated CRM Live Board Simulation */}
                <div className="bg-[#0B1733] border border-white/10 rounded-2xl p-5 shadow-2xl w-full max-w-[380px] mx-auto space-y-3">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-white/10">
                    <span className="font-bold text-gray-300">Live CRM Pipeline</span>
                    <span className="text-emerald-400 font-bold">● Active 24 Orders</span>
                  </div>
                  {[
                    { name: 'Fashion Hub BD', stage: 'Vault Handoff', color: 'text-emerald-400 bg-emerald-500/10' },
                    { name: 'Apex Engineering', stage: 'In Progress', color: 'text-amber-400 bg-amber-500/10' },
                    { name: 'Craft BD SME', stage: 'New Order', color: 'text-blue-400 bg-blue-500/10' },
                  ].map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex justify-between items-center p-2.5 rounded-xl bg-white/5 border border-white/5"
                    >
                      <span className="text-xs font-bold">{row.name}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${row.color}`}>{row.stage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'ai' && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-10 items-center w-full"
              >
                <div className="space-y-4">
                  <span className="text-xs font-black text-purple-400 tracking-widest uppercase">
                    Priority 03 · AI Growth & Marketing Funnels
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black">
                    Full AI Lead Routing & High-Converting Funnel
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    অটোমেটেড ইনবক্স স্ক্রিপ্ট, রিটার্ন লস প্রোটেকশন অ্যালগরিদম এবং সরাসরি ১-ক্লিক হোয়াটসঅ্যাপ ইন্টিগ্রেশন যা সোশ্যাল মিডিয়া ভিজিটরকে পেইং ক্লায়েন্টে রূপান্তর করে।
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-lg font-bold">✓ Messenger & WA Sales Script</span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-lg font-bold">✓ Return Risk Killer SOP</span>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-lg font-bold">✓ 1-Click WhatsApp Funnel</span>
                  </div>
                </div>

                {/* Animated AI Diagnostic Pulse Mockup */}
                <div className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl text-center space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1971A5] to-[#43A7E8] flex items-center justify-center text-2xl shadow-xl"
                  >
                    ⚡
                  </motion.div>
                  <div>
                    <div className="font-black text-base text-white">AI Diagnostic Engine Active</div>
                    <div className="text-xs text-[#94A3B8] mt-0.5">Matching Business Need to System OS</div>
                  </div>
                  <div className="bg-[#25D366]/20 border border-[#25D366]/30 text-[#4ADE80] px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2">
                    <span>💬 1-Click WhatsApp Direct Routing Ready</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
