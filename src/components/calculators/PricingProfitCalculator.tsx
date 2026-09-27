"use client";

import React, { useState } from "react";

export default function PricingProfitCalculator() {
  const [cogs, setCogs] = useState<number>(800); // Cost of Goods Sold
  const [sellingPrice, setSellingPrice] = useState<number>(1500);
  const [marketingCost, setMarketingCost] = useState<number>(150);
  const [deliverySub, setDeliverySub] = useState<number>(0);
  const [monthlyOverhead, setMonthlyOverhead] = useState<number>(25000);

  const grossProfit = sellingPrice - (cogs + marketingCost + deliverySub);
  const profitMargin = ((grossProfit / sellingPrice) * 100).toFixed(1);
  const breakEvenUnits = Math.ceil(monthlyOverhead / grossProfit);

  return (
    <div className="bg-white border text-left border-gray-200 shadow-sm rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-xl text-2xl font-black">
          💰
        </div>
        <div>
          <h3 className="text-xl font-black text-[#0B1733]">Pricing & Target Calculator</h3>
          <p className="text-xs text-gray-500">Find your Break-even point & real profit margin</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">
                কেনা দাম / উৎপাদন খরচ (COGS)
              </label>
              <input
                type="number"
                value={cogs}
                onChange={(e) => setCogs(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">
                বিক্রয় মূল্য (Selling Price)
              </label>
              <input
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733] font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">
                বিজ্ঞাপন খরচ / পার্সেল (CPA)
              </label>
              <input
                type="number"
                value={marketingCost}
                onChange={(e) => setMarketingCost(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">
                অফিস খরচ + স্টাফ (মাসিক)
              </label>
              <input
                type="number"
                value={monthlyOverhead}
                onChange={(e) => setMonthlyOverhead(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-xl flex flex-col justify-center">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-xs text-[#64748B] font-bold uppercase mb-1">পণ্য প্রতি লাভ (Net Profit)</div>
              <div className={`text-3xl font-black ${grossProfit < 0 ? 'text-red-500' : 'text-emerald-600'}`}>
                ৳ {grossProfit.toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] bg-white border px-2 py-1 rounded text-[#344054] font-bold">
                Margin: {profitMargin}%
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-4 w-full"></div>

          <div>
            <div className="text-xs text-[#64748B] font-bold uppercase mb-1">মাসিক ব্রেক-ইভেন টার্গেট</div>
            {grossProfit > 0 ? (
              <div className="text-lg font-black text-[#0B1733]">
                মাসে <span className="text-[#1971A5] text-2xl">{breakEvenUnits}</span> টি বিক্রি করতে হবে
                <span className="text-xs text-gray-400 block mt-1">(খরচ ওঠানোর জন্য)</span>
              </div>
            ) : (
              <div className="text-sm font-bold text-red-500">লসে আছেন! বিক্রয় মূল্য বাড়ান বা খরচ কমান।</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
