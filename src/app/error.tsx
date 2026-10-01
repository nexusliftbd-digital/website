"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [autoRecoverTime, setAutoRecoverTime] = useState(5);

  useEffect(() => {
    // Log the error to console or error monitor silently
    console.error("Nexus Auto-Recovery caught an exception:", error);

    // Countdown for auto-healing attempt
    const timer = setInterval(() => {
      setAutoRecoverTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          reset(); // Auto-try re-rendering without user intervention
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [error, reset]);

  return (
    <div className="min-h-screen bg-[#0B1733] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[#122244] border border-white/10 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#43A7E8]/20 rounded-full blur-3xl"></div>

        <div className="w-16 h-16 bg-[#43A7E8]/10 text-[#43A7E8] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#43A7E8]/20">
          <svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>

        <span className="text-[10px] font-black uppercase tracking-widest text-[#43A7E8] bg-white/5 px-3 py-1 rounded-full border border-white/10 inline-block mb-3">
          Self-Healing Recovery Active
        </span>

        <h2 className="text-xl md:text-2xl font-black mb-2">
          একটি ছোট সমস্যা হয়েছে, স্বয়ংক্রিয়ভাবে ঠিক করা হচ্ছে...
        </h2>

        <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
          আমাদের ব্যাকআপ সিস্টেম সচল রয়েছে। পেজটি ক্র্যাশ হওয়া রোধ করা হয়েছে এবং {autoRecoverTime > 0 ? `${autoRecoverTime} সেকেন্ডের মধ্যে পুনরায় লোড হবে।` : 'লোড সম্পন্ন হচ্ছে...'}
        </p>

        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full py-3 bg-[#43A7E8] text-[#0B1733] font-black text-xs rounded-xl hover:bg-white transition shadow-lg"
          >
            🔄 এখনই রিলোড করুন (Instant Recover)
          </button>

          <Link
            href="/"
            className="w-full block py-3 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/10 transition"
          >
            হোমপেজে ফিরে যান
          </Link>

          <a
            href={`https://wa.me/8801814716713?text=${encodeURIComponent("সালাম, আমি নেক্সাস লিফট সাইটে একটি পেজ লোড সমস্যায় পড়েছি। দয়া করে সহায়তা করুন।")}`}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-[#43A7E8] font-bold block pt-2 hover:underline"
          >
            💬 সরাসরি হোয়াটসঅ্যাপে ইমার্জেন্সি সাপোর্ট নিন →
          </a>
        </div>
      </div>
    </div>
  );
}
