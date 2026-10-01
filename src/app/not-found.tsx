import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1733] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[#122244] border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
        <span className="text-4xl font-black text-[#43A7E8] block mb-2">404</span>
        <h2 className="text-xl md:text-2xl font-black mb-3">পেজটি পাওয়া যায়নি</h2>
        <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
          আপনি যে লিংকটি খুঁজছেন তা হয়তো সরানো হয়েছে বা টাইপে ভুল হয়েছে। নিচে ক্লিক করে মূল পেজে ফিরে যান অথবা আমাদের সাথে কথা বলুন।
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full block py-3 bg-[#43A7E8] text-[#0B1733] font-black text-xs rounded-xl hover:bg-white transition shadow-lg"
          >
            হোমপেজে ফিরে যান →
          </Link>
          <a
            href="https://wa.me/8801814716713"
            target="_blank"
            rel="noreferrer"
            className="w-full block py-3 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/10 transition"
          >
            💬 হোয়াটসঅ্যাপে সাপোর্ট নিন
          </a>
        </div>
      </div>
    </div>
  );
}
