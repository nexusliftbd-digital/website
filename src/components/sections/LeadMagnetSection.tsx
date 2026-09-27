"use client";

import React, { useState } from "react";

export default function LeadMagnetSection() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsLoading(true);

    try {
      // 1. Send the phone number to our Next.js API route first
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          source: 'Free Checklist (SME Daily Operations)'
        }),
      });
    } catch (error) {
      console.error("Failed to capture lead internally:", error);
      // We don't block the user if the internal API fails
    }

    // 2. Unblock UI and Redirect to WhatsApp
    setIsLoading(false);
    setSubmitted(true);

    // Open WhatsApp with automated message
    window.open(
      `https://wa.me/8801814716713?text=${encodeURIComponent(
        `সালাম! আমি ফ্রি "SME Daily Operations & Courier Return Prevention Checklist (PDF)" পেতে চাই। আমার ফোন নম্বর: ${phone}`
      )}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#1971A5] to-[#0B1733] text-white">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[600px]">
            <span className="bg-[#43A7E8] text-[#0B1733] font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              🎁 Free Founder Toolkit
            </span>
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              ফ্রি ডাউনলোড: SME Daily Operations & Courier Return Prevention Checklist
            </h2>
            <p className="text-xs md:text-sm text-[#EAF6FF] leading-relaxed">
              আপনার ব্যবসার দৈনিক ভুল কমাতে ও কুরিয়ার রিটার্ন ২০% ড্রপ করার একটি প্র্যাকটিক্যাল চেকলিস্ট বিনামূল্যে আপনার হোয়াটসঅ্যাপে সংগ্রহ করুন।
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-400 p-4 rounded-xl text-center">
                <div className="text-emerald-300 font-bold text-sm">🎉 হোয়াটসঅ্যাপে রিডাইরেক্ট করা হচ্ছে...</div>
                <div className="text-xs text-white/80 mt-1">ফাইলটি সরাসরি ইনবক্সে পেয়ে যাবেন।</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="আপনার WhatsApp নম্বর (017...)"
                  className="px-4 py-3 rounded-xl bg-white text-[#0B1733] text-xs font-semibold placeholder:text-gray-400 focus:outline-none w-full sm:w-[260px] disabled:opacity-50"
                  required
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-[#43A7E8] text-[#0B1733] font-black text-xs rounded-xl hover:bg-white transition shadow-lg shrink-0 disabled:opacity-70 flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {isLoading ? "প্রসেসিং..." : "ফ্রি PDF নিন →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
