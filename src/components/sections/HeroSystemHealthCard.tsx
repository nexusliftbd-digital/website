"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSystemHealthCard() {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');
  const [metricCount, setMetricCount] = useState(0);

  const targetScore = activeTab === 'after' ? 94 : 38;

  useEffect(() => {
    let start = 0;
    const duration = 600;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = (targetScore - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= targetScore) || (increment < 0 && start <= targetScore)) {
        setMetricCount(targetScore);
        clearInterval(timer);
      } else {
        setMetricCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [activeTab, targetScore]);

  const metrics = activeTab === 'after' ? [
    { n: '01 Identity', s: 'Brand & Corporate Profile', val: '98%', status: 'Institutional Ready', color: '#38BDF8' },
    { n: '02 Structure', s: 'Roles, RACI & Delegation', val: '92%', status: 'Team Autonomous', color: '#34D399' },
    { n: '03 Operations', s: 'SOPs & Courier Control', val: '95%', status: 'Zero Return Leak', color: '#818CF8' },
    { n: '04 Growth', s: 'Website & Make.com CRM', val: '96%', status: 'Pipeline Active', color: '#F472B6' },
  ] : [
    { n: '01 Identity', s: 'No Proper Profile / Deck', val: '32%', status: 'Low Client Trust', color: '#EF4444' },
    { n: '02 Structure', s: 'Owner Does Everything', val: '25%', status: 'Burnout & Chaos', color: '#F97316' },
    { n: '03 Operations', s: 'High Courier Return (20%+)', val: '40%', status: 'Profit Bleeding', color: '#EF4444' },
    { n: '04 Growth', s: 'Manual Inbox & Lost Leads', val: '35%', status: 'Unpredictable Sales', color: '#F59E0B' },
  ];

  return (
    <div className="relative group">
      {/* Background ambient glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#43A7E8]/30 via-[#38BDF8]/20 to-[#6366F1]/30 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative bg-gradient-to-br from-[#0B1733] via-[#0F224A] to-[#152E5C] text-white p-6 md:p-7 rounded-[28px] shadow-2xl border border-white/15 overflow-hidden">

        {/* Header with Live Pulse and Before/After Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activeTab === 'after' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${activeTab === 'after' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <div>
              <div className="text-[10px] tracking-widest uppercase font-black text-[#93C5FD]">
                Nexus Business Health Monitor
              </div>
              <div className="text-xs text-white/70 font-medium">Live System Diagnosis</div>
            </div>
          </div>

          {/* Interactive Toggle */}
          <div className="bg-white/10 p-1 rounded-xl flex items-center gap-1 border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                activeTab === 'before'
                  ? 'bg-red-500/80 text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Chaos (Before)
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                activeTab === 'after'
                  ? 'bg-[#1971A5] text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ⚡ With Nexus (After)
            </button>
          </div>
        </div>

        {/* Score & Health Bar */}
        <div className="flex items-end justify-between mb-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#43A7E8]/50 transition-colors">
          <div>
            <div className="text-xs text-[#94A3B8] font-semibold mb-1">Overall System Score</div>
            <motion.div
              key={metricCount}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-3xl md:text-4xl font-black tracking-tight text-white flex items-baseline gap-1"
            >
              <span>{metricCount}</span>
              <span className="text-sm text-[#94A3B8] font-medium">/100</span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-[11px] font-bold px-2 py-0.5 rounded-full ml-2 ${
                  activeTab === 'after' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {activeTab === 'after' ? 'Institutional Grade' : 'High Operational Risk'}
              </motion.span>
            </motion.div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-[#38BDF8] font-bold">Automation Level</div>
            <div className="text-sm font-extrabold text-white">{activeTab === 'after' ? '88% Hands-free' : '0% (Founder Bottleneck)'}</div>
          </div>
        </div>

        {/* Animated Main Progress Bar */}
        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden mb-6 p-0.5 border border-white/10">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${metricCount}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full ${
              activeTab === 'after'
                ? 'bg-gradient-to-r from-[#38BDF8] via-[#43A7E8] to-[#34D399]'
                : 'bg-gradient-to-r from-red-500 to-amber-500'
            }`}
          />
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-3.5 border border-white/10 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-all relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-1.5">
                <b className="text-xs text-white tracking-wide">{item.n}</b>
                <span className="text-xs font-black font-mono" style={{ color: item.color }}>
                  {item.val}
                </span>
              </div>
              <div className="text-[11px] text-[#93C5FD] font-medium leading-tight mb-2">
                {item.s}
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <span className="text-[10px] text-white/50">{item.status}</span>
                <span className="text-[10px] text-emerald-400">●</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Diagnostic Feed / Real-time SLA Ribbon */}
        <div className="bg-[#070E20]/70 rounded-xl px-4 py-2.5 border border-white/10 flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#38BDF8] font-black">⚡ Live Feed:</span>
            <span className="truncate text-white/90">
              {activeTab === 'after'
                ? 'Make.com Webhook & Cloud Vault Synced'
                : 'Warning: 22% Lead Leak in Messenger Inbox'}
            </span>
          </div>
          <span className="text-[11px] text-[#38BDF8] font-bold shrink-0 ml-2">SLA 48h</span>
        </div>

      </div>
    </div>
  );
}
