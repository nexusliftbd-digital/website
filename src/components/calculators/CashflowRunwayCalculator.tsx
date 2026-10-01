"use client";

import React, { useState } from "react";

export default function CashflowRunwayCalculator() {
  const [bankBalance, setBankBalance] = useState<number>(150000);
  const [codPending, setCodPending] = useState<number>(75000);
  const [monthlyBurn, setMonthlyBurn] = useState<number>(60000);
  const [courierPayoutDays, setCourierPayoutDays] = useState<number>(7);

  // Math
  const totalLiquid = bankBalance + (codPending * 0.85); // accounting for 15% courier returns
  const dailyBurn = monthlyBurn / 30;
  const runwayDays = dailyBurn > 0 ? Math.round(totalLiquid / dailyBurn) : 0;
  const runwayMonths = (runwayDays / 30).toFixed(1);

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase">
            Finance & Cash-Flow Tool
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#0B1733] mt-2">
            Courier COD & Cash Runway Calculator
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            কুরিয়ারে সিওডি (COD) টাকা আটকে থাকলে এবং সেলস ড্রপ করলে ব্যবসা কতদিন ঝুঁকিমুক্ত থাকবে তা হিসাব করুন।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              হাতে ও ব্যাংকে থাকা বর্তমান ক্যাশ (৳):
            </label>
            <input
              type="number"
              value={bankBalance}
              onChange={(e) => setBankBalance(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              কুরিয়ারে আটকে থাকা মোট COD পেমেন্ট (৳):
            </label>
            <input
              type="number"
              value={codPending}
              onChange={(e) => setCodPending(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              মাসের ফিক্সড অপারেটিং খরচ (অফিস/স্যালারি/ইউটিলিটি - ৳):
            </label>
            <input
              type="number"
              value={monthlyBurn}
              onChange={(e) => setMonthlyBurn(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              কুরিয়ার পেমেন্ট সেটেলমেন্ট সময় (দিন):
            </label>
            <input
              type="number"
              value={courierPayoutDays}
              onChange={(e) => setCourierPayoutDays(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider">
              ক্যাশ ফ্লো হেলথ অ্যানালাইসিস
            </h4>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-bold block">বর্তমান ক্যাশ রানওয়ে:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#0B1733]">{runwayDays} দিন</span>
                <span className="text-xs font-bold text-gray-400">({runwayMonths} মাস)</span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1">
                {runwayDays < 45 ? "⚠️ ক্যাশফ্লো ঝুঁকিপূর্ণ! কুরিয়ার পেমেন্ট দ্রুত তুলতে হবে ও রিটার্ন কমাতে হবে।" : "✅ ক্যাশফ্লো নিরাপদ সীমার মধ্যে আছে।"}
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <p className="font-bold">💡 প্রো টিপস:</p>
              <p className="text-[11px] leading-relaxed">
                কুরিয়ারে ১৫% রিটার্ন বাফার হিসেব করে আপনার কার্যকর তারল্য (Effective Liquidity) প্রায় <strong>৳{Math.round(totalLiquid).toLocaleString()}</strong>।
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801814716713?text=সালাম,%20আমার%20ব্যবসার%20ক্যাশফ্লো%20ও%20ফাইন্যান্সিয়াল%20কন্ট্রোল%20ম্যানেজমেন্ট%20OS%20সম্পর্কে%20জানতে%20চাই।"
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-full bg-[#0B1733] text-white py-3 rounded-xl text-center text-xs font-black hover:bg-[#1E293B] transition"
          >
            ফাইন্যান্স ও সিআরএম ওএস দেখুন →
          </a>
        </div>
      </div>
    </div>
  );
}
