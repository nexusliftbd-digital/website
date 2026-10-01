"use client";

import React, { useState } from "react";

export default function KpiTrackingCalculator() {
  const [activeTab, setActiveTab] = useState<'sales' | 'team'>('sales');

  // Sales State
  const [totalMessages, setTotalMessages] = useState<number>(200);
  const [totalOrders, setTotalOrders] = useState<number>(10);
  const [adSpend, setAdSpend] = useState<number>(5000);

  // Team State
  const [salary, setSalary] = useState<number>(15000);
  const [target, setTarget] = useState<number>(100000);
  const [achieved, setAchieved] = useState<number>(85000);

  const conversionRate = ((totalOrders / totalMessages) * 100).toFixed(1);
  const cac = totalOrders > 0 ? (adSpend / totalOrders).toFixed(0) : 0;

  const achievementRate = ((achieved / target) * 100).toFixed(1);
  const roi = ((achieved / salary)).toFixed(2);

  return (
    <div className="bg-white border text-left border-gray-200 shadow-sm rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-sky-50 text-sky-600 flex items-center justify-center rounded-xl text-2xl font-black">
          📈
        </div>
        <div>
          <h3 className="text-xl font-black text-[#0B1733]">KPI Performance Calculator</h3>
          <p className="text-xs text-gray-500">Track Sales Efficiency & Team Performance</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('sales')} className={`px-4 py-2 rounded-lg text-xs font-bold ${activeTab === 'sales' ? 'bg-[#0B1733] text-white' : 'bg-gray-100'}`}>Sales Marketing</button>
        <button onClick={() => setActiveTab('team')} className={`px-4 py-2 rounded-lg text-xs font-bold ${activeTab === 'team' ? 'bg-[#0B1733] text-white' : 'bg-gray-100'}`}>Employee Output</button>
      </div>

      {activeTab === 'sales' ? (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
             <div><label className="block text-xs font-bold text-gray-600 mb-1">মোট মেসেজ (Total Inbound)</label> <input type="number" value={totalMessages} onChange={(e) => setTotalMessages(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" /></div>
             <div><label className="block text-xs font-bold text-gray-600 mb-1">কনভার্টেড অর্ডার</label> <input type="number" value={totalOrders} onChange={(e) => setTotalOrders(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" /></div>
             <div><label className="block text-xs font-bold text-gray-600 mb-1">মোট এড খরচ</label> <input type="number" value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
          <div className="bg-sky-50 p-6 rounded-xl flex flex-col justify-center">
            <div className="text-4xl font-black text-sky-900 mb-2">{conversionRate}%</div>
            <div className="text-sm font-bold text-sky-700">Conversion Rate</div>
            <p className="text-xs text-sky-600 mt-2">Cost Per Order (CAC): ৳{cac}</p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
             <div><label className="block text-xs font-bold text-gray-600 mb-1">সেলস রিপ্রেজেন্টেটিভ বেতন</label> <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" /></div>
             <div><label className="block text-xs font-bold text-gray-600 mb-1">মাসিক টার্গেট</label> <input type="number" value={target} onChange={(e) => setTarget(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" /></div>
             <div><label className="block text-xs font-bold text-gray-600 mb-1">অর্জিত সেলস</label> <input type="number" value={achieved} onChange={(e) => setAchieved(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" /></div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl flex flex-col justify-center">
            <div className="text-4xl font-black text-emerald-900 mb-2">{achievementRate}%</div>
            <div className="text-sm font-bold text-emerald-700">Target Achievement</div>
            <p className="text-xs text-emerald-600 mt-2">Revenue per Tk of Salary: {roi}x</p>
          </div>
        </div>
      )}
    </div>
  );
}
