"use client";

import React, { useState } from "react";

export default function FounderDelegationCalculator() {
  const [monthlyTargetIncome, setMonthlyTargetIncome] = useState<number>(200000);
  const [workingHoursPerDay, setWorkingHoursPerDay] = useState<number>(10);
  const [operationalHoursPerDay, setOperationalHoursPerDay] = useState<number>(5);
  const [staffHourlyCost, setStaffHourlyCost] = useState<number>(150);

  // Math
  const founderHourlyRate = Math.round(monthlyTargetIncome / (workingHoursPerDay * 26));
  const dailyMoneyWasted = operationalHoursPerDay * (founderHourlyRate - staffHourlyCost);
  const monthlyMoneyWasted = Math.max(0, dailyMoneyWasted * 26);

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase">
            Productivity & SOP Tool
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#0B1733] mt-2">
            Founder Hourly Value & Delegation Calculator
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            প্রতিষ্ঠাতা নিজে সাধারণ কাজ করতে গিয়ে প্রতি মাসে কত লাখ টাকার সুযোগ হারাচ্ছেন তা বের করুন।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              আপনার টার্গেট মাসিক ইনকাম / ভ্যালু (৳):
            </label>
            <input
              type="number"
              value={monthlyTargetIncome}
              onChange={(e) => setMonthlyTargetIncome(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              প্রতিদিন আপনি মোট কত ঘণ্টা কাজ করেন:
            </label>
            <input
              type="number"
              value={workingHoursPerDay}
              onChange={(e) => setWorkingHoursPerDay(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              এর মধ্যে সাধারণ কাজ (প্যাকিং/চ্যাট/কুরিয়ার) কত ঘণ্টা করেন:
            </label>
            <input
              type="number"
              value={operationalHoursPerDay}
              onChange={(e) => setOperationalHoursPerDay(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              একজন সাধারণ স্টাফের প্রতি ঘণ্টার খরচ (৳):
            </label>
            <input
              type="number"
              value={staffHourlyCost}
              onChange={(e) => setStaffHourlyCost(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider">
              অপর্চুনিটি কস্ট ও ডেলিগেশন ভ্যালু
            </h4>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-bold block">আপনার ১ ঘণ্টার আসল মূল্য (Hourly Value):</span>
              <span className="text-2xl font-black text-purple-700">৳{founderHourlyRate} / ঘণ্টা</span>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <span className="text-xs text-purple-900 font-bold block">প্রতি মাসে অপর্চুনিটি লস (Founder Bottleneck):</span>
              <span className="text-2xl font-black text-purple-950">৳{monthlyMoneyWasted.toLocaleString()}</span>
              <p className="text-[11px] text-purple-700 mt-1">
                এই কাজগুলো সুনির্দিষ্ট এসওপি (SOP) বানিয়ে টিমকে দিয়ে করালে আপনার প্রতি মাসে এই বিশাল টাকা সেভ হবে।
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/8801814716713?text=সালাম,%20আমার%20টিম%20ও%20অপারেশনাল%20SOP%20সিস্টেম%20প্রয়োজন।"
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-full bg-[#0B1733] text-white py-3 rounded-xl text-center text-xs font-black hover:bg-[#1E293B] transition"
          >
            টিম ডেলিগেশন ও এসওপি প্যাকেজ দেখুন →
          </a>
        </div>
      </div>
    </div>
  );
}
