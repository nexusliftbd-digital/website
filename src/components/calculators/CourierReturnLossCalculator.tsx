"use client";

import React, { useState } from "react";

export default function CourierReturnLossCalculator() {
  const [dailyParcels, setDailyParcels] = useState<number>(50);
  const [returnRate, setReturnRate] = useState<number>(15); // Percentage
  const [deliveryChargeLoss, setDeliveryChargeLoss] = useState<number>(120);
  const [packagingLoss, setPackagingLoss] = useState<number>(20);

  const dailyReturnCount = Math.round((dailyParcels * returnRate) / 100);
  const lossPerReturn = deliveryChargeLoss + packagingLoss;
  const dailyLoss = dailyReturnCount * lossPerReturn;
  const monthlyLoss = dailyLoss * 30;
  const yearlyLoss = monthlyLoss * 12;

  // Reduced return scenario (using Nexus OS)
  const improvedReturnRate = Math.max(returnRate - 7, 5); // Drops by 7%, min 5%
  const improvedDailyReturn = Math.round((dailyParcels * improvedReturnRate) / 100);
  const improvedMonthlyLoss = improvedDailyReturn * lossPerReturn * 30;
  const monthlySaved = monthlyLoss - improvedMonthlyLoss;
  const yearlySaved = yearlyLoss - (improvedMonthlyLoss * 12);

  return (
    <div className="bg-white border text-left border-gray-200 shadow-sm rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-xl text-2xl font-black">
          📦
        </div>
        <div>
          <h3 className="text-xl font-black text-[#0B1733]">Courier Return Loss Calculator</h3>
          <p className="text-xs text-gray-500">How much money are you bleeding on returns?</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">
              দৈনিক ডেলিভারি পার্সেল (Daily Parcels)
            </label>
            <input
              type="number"
              value={dailyParcels}
              onChange={(e) => setDailyParcels(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733] focus:border-[#43A7E8] focus:ring-1 focus:ring-[#43A7E8] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">
              রিটার্ন রেট % (Return Rate)
            </label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733] focus:border-[#43A7E8] focus:ring-1 focus:ring-[#43A7E8] outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">ডেলিভারি চার্জ লস</label>
              <input
                type="number"
                value={deliveryChargeLoss}
                onChange={(e) => setDeliveryChargeLoss(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">প্যাকেজিং/অন্যান্য লস</label>
              <input
                type="number"
                value={packagingLoss}
                onChange={(e) => setPackagingLoss(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#0B1733] text-white p-6 rounded-xl flex flex-col justify-center">
          <div className="text-xs text-[#9fb3cc] font-semibold uppercase tracking-wider mb-2">প্রতি মাসে আপনার ফিক্সড লস</div>
          <div className="text-4xl font-black text-red-400 mb-1">৳ {monthlyLoss.toLocaleString()}</div>
          <div className="text-sm text-gray-400 mb-6">বছরে লস: ৳ {yearlyLoss.toLocaleString()}</div>

          <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/30 relative">
            <span className="absolute -top-2.5 right-4 bg-emerald-500 text-[#0B1733] text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              With Nexus Lift SYSTEM
            </span>
            <div className="text-xs text-[#EAF6FF] mb-1">SOP & Confirmation Script ব্যবহার করলে বাঁচবে:</div>
            <div className="text-2xl font-black text-emerald-400">৳ {monthlySaved.toLocaleString()} <span className="text-sm font-normal text-emerald-100">/মাস</span></div>
            <div className="text-xs text-gray-300 mt-1">বছরে বাঁচবে ৳ {yearlySaved.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
