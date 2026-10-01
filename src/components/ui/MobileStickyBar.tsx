"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-2.5 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2">
      <Link
        href="/growth-audit"
        className="flex-1 bg-[#F1F5F9] text-[#0B1733] border border-gray-300 py-2.5 px-3 rounded-xl text-xs font-black text-center flex items-center justify-center gap-1 hover:bg-gray-200 transition-all"
      >
        <span>⚡</span> ফ্রি অডিট
      </Link>
      <a
        href="https://wa.me/8801814716713?text=সালাম,%20আমি%20Nexus%20Lift%20বিজনেস%20সিস্টেম%20সম্পর্কে%20জানতে%20চাই।"
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-[#0B1733] text-white py-2.5 px-3 rounded-xl text-xs font-black text-center flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#1E293B] transition-all"
      >
        <span>💬</span> WhatsApp অর্ডার
      </a>
    </div>
  );
}
