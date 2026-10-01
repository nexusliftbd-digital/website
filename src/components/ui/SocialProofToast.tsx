"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProofItem {
  name: string;
  location: string;
  product: string;
  timeAgo: string;
  avatarBg: string;
}

const recentSales: ProofItem[] = [
  { name: "মাহমুদুল হাসান", location: "ঢাকা (মিরপুর)", product: "F-Commerce OS", timeAgo: "৩ মিনিট আগে", avatarBg: "bg-blue-600" },
  { name: "তানভীর আহমেদ", location: "চট্টগ্রাম", product: "Growth Business Profile Suite", timeAgo: "৮ মিনিট আগে", avatarBg: "bg-emerald-600" },
  { name: "সাইফুল ইসলাম", location: "উত্তরা, ঢাকা", product: "Courier Return Loss Blueprint", timeAgo: "১২ মিনিট আগে", avatarBg: "bg-indigo-600" },
  { name: "আরিফুর রহমান", location: "সিলেট সদর", product: "Modern Finance & Costing Stack", timeAgo: "১৬ মিনিট আগে", avatarBg: "bg-amber-600" },
  { name: "ফারহানা ইয়াসমিন", location: "ধানমন্ডি, ঢাকা", product: "Founder & Team Transition OS", timeAgo: "২২ মিনিট আগে", avatarBg: "bg-rose-600" },
  { name: "নাজমুল হোসেন", location: "রাজশাহী", product: "All-in-One Founder Bundle", timeAgo: "২৯ মিনিট আগে", avatarBg: "bg-purple-600" }
];

export default function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Loop interval
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentSales.length);
        setIsVisible(true);
      }, 1500); // 1.5s transition pause
    }, 8000); // show each toast for ~6.5s

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const current = recentSales[currentIndex];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-[340px] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-2xl rounded-2xl p-3.5 flex items-center gap-3 pointer-events-auto hover:shadow-cyan-900/10 transition"
          >
            {/* Avatar Initials */}
            <div className={`w-10 h-10 rounded-full ${current.avatarBg} text-white flex items-center justify-center font-black text-sm shrink-0 shadow-inner`}>
              {current.name.charAt(0)}
            </div>

            {/* Notification Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <span className="font-extrabold text-xs text-[#0B1733] truncate">
                  {current.name}
                </span>
                <span className="text-[10px] text-gray-400 shrink-0">
                  {current.timeAgo}
                </span>
              </div>
              <div className="text-[11px] text-[#1971A5] font-bold truncate">
                ⚡ আনলক করেছেন: {current.product}
              </div>
              <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>{current.location} · ভেরিফাইড অর্ডার</span>
              </div>
            </div>

            {/* Close / Dismiss */}
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 p-1 text-xs shrink-0 self-start"
              aria-label="Dismiss notification"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
