"use client";

import React, { useState } from "react";

export default function RoasBreakEvenCalculator() {
  const [sellingPrice, setSellingPrice] = useState<number>(1200);
  const [productCost, setProductCost] = useState<number>(500);
  const [packagingDelivery, setPackagingDelivery] = useState<number>(150);
  const [targetMarginPercent, setTargetMarginPercent] = useState<number>(20);

  // Math
  const netProfitBeforeAds = sellingPrice - productCost - packagingDelivery;
  const breakEvenCpa = Math.max(0, netProfitBeforeAds);
  const breakEvenRoas = breakEvenCpa > 0 ? (sellingPrice / breakEvenCpa).toFixed(2) : "N/A";

  // Target ROAS
  const targetProfitAmount = (sellingPrice * targetMarginPercent) / 100;
  const maxAdSpendForTargetProfit = Math.max(0, netProfitBeforeAds - targetProfitAmount);
  const targetRoas = maxAdSpendForTargetProfit > 0 ? (sellingPrice / maxAdSpendForTargetProfit).toFixed(2) : "N/A";

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs font-black text-[#1971A5] bg-[#EAF6FF] px-3 py-1 rounded-full uppercase">
            Marketing & Ads Calculator
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#0B1733] mt-2">
            Facebook Ads Break-Even & Target ROAS Calculator
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            অ্যাডে কত টাকা পর্যন্ত কস্ট-পার-পারচেস (CPA) খরচ করলে ব্যবসা লসে যাবে না তা নিখুঁতভাবে বের করুন।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              প্রোডাক্টের বিক্রয় মূল্য (Selling Price - ৳):
            </label>
            <input
              type="number"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              প্রোডাক্ট কেনার / তৈরির খরচ (Product Cost - ৳):
            </label>
            <input
              type="number"
              value={productCost}
              onChange={(e) => setProductCost(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              প্যাকেজিং ও সম্ভাব্য রিটার্ন লস বাফার (৳):
            </label>
            <input
              type="number"
              value={packagingDelivery}
              onChange={(e) => setPackagingDelivery(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              কাঙ্ক্ষিত নেট প্রফিট মার্জিন (%):
            </label>
            <input
              type="number"
              value={targetMarginPercent}
              onChange={(e) => setTargetMarginPercent(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider">
              অ্যাড বাজেট ও আর ও এ এস রেজাল্ট
            </h4>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-bold block">ব্রেক-ইভেন ম্যাক্সিমাম CPA (সর্বোচ্চ প্রতি অর্ডার খরচ):</span>
              <span className="text-2xl font-black text-[#0B1733]">৳{breakEvenCpa}</span>
              <p className="text-[11px] text-gray-500 mt-0.5">
                অ্যাডে প্রতি অর্ডারে ৳{breakEvenCpa}-এর বেশি খরচ হলেই আপনার পকেট থেকে লস হবে।
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#EAF6FF] p-3.5 rounded-xl border border-[#BCE1FD]">
                <span className="text-[11px] font-bold text-[#1971A5] block">ব্রেক-ইভেন ROAS:</span>
                <span className="text-xl font-black text-[#0B5A96]">{breakEvenRoas}x</span>
              </div>
              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200">
                <span className="text-[11px] font-bold text-emerald-800 block">{targetMarginPercent}% প্রফিটের জন্য ROAS:</span>
                <span className="text-xl font-black text-emerald-700">{targetRoas}x</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/8801814716713?text=সালাম,%20আমার%20ব্যবসার%20মার্কেটিং%20ফানেল%20ও%20ROAS%20সিস্টেম%20উন্নত%20করতে%20চাই।"
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-full bg-[#0B1733] text-white py-3 rounded-xl text-center text-xs font-black hover:bg-[#1E293B] transition"
          >
            অ্যাড কনভার্শন ফানেল অডিট বুক করুন →
          </a>
        </div>
      </div>
    </div>
  );
}
