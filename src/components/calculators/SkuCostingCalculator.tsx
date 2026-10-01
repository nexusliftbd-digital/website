"use client";

import React, { useState } from "react";

interface MaterialItem {
  id: string;
  name: string;
  cost: number;
}

export default function SkuCostingCalculator() {
  const [skuName, setSkuName] = useState<string>("Premium Cotton Polo Shirt");
  const [materials, setMaterials] = useState<MaterialItem[]>([
    { id: "1", name: "Fabric / Raw Material (কাপড়/ম্যাটেরিয়াল)", cost: 280 },
    { id: "2", name: "Buttons & Accessories (বোতাম ও এক্সেসরিজ)", cost: 35 },
    { id: "3", name: "Packaging Poly & Tag (প্যাকিং ও ট্যাগ)", cost: 25 },
    { id: "4", name: "Making & Stitching Labor (তৈরি খরচ)", cost: 110 },
  ]);

  const [newItemName, setNewItemName] = useState<string>("");
  const [newItemCost, setNewItemCost] = useState<number | "">("");

  const [marketingPerUnit, setMarketingPerUnit] = useState<number>(120);
  const [targetMarginPercent, setTargetMarginPercent] = useState<number>(35); // 35% margin

  const totalRawCost = materials.reduce((sum, item) => sum + item.cost, 0);
  const totalCogs = totalRawCost + Number(marketingPerUnit || 0);
  const recommendedSellingPrice = Math.round(totalCogs / (1 - (targetMarginPercent / 100)));
  const netProfitPerUnit = recommendedSellingPrice - totalCogs;

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim() || !newItemCost || newItemCost <= 0) return;
    setMaterials([
      ...materials,
      { id: Date.now().toString(), name: newItemName.trim(), cost: Number(newItemCost) },
    ]);
    setNewItemName("");
    setNewItemCost("");
  };

  const handleRemoveMaterial = (id: string) => {
    setMaterials(materials.filter((m) => m.id !== id));
  };

  return (
    <div className="bg-white border text-left border-gray-200 shadow-sm rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-amber-50 text-amber-600 flex items-center justify-center rounded-xl text-2xl font-black">
          🏷️
        </div>
        <div>
          <h3 className="text-xl font-black text-[#0B1733]">
            SKU & Raw Material Costing Calculator
          </h3>
          <p className="text-xs text-gray-500">
            ম্যাটেরিয়াল, প্যাকেজিং ও প্রোডাকশন কস্ট হিসাব করে সঠিক সেলিং প্রাইস ও প্রফিট নির্ধারণ করুন
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Left Form: Materials list */}
        <div className="md:col-span-7 space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">
              প্রোডাক্ট / SKU নাম (Product Name)
            </label>
            <input
              type="text"
              value={skuName}
              onChange={(e) => setSkuName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733] font-bold"
              placeholder="e.g. Leather Wallet, Silk Saree"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-2">
              ম্যাটেরিয়াল ও প্রোডাকশন খরচ তালিকা (Bill of Materials):
            </label>
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {materials.map((m) => (
                <div
                  key={m.id}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-xs"
                >
                  <span className="font-semibold text-gray-800 truncate mr-2">{m.name}</span>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-black text-[#0B1733]">৳{m.cost}</span>
                    <button
                      onClick={() => handleRemoveMaterial(m.id)}
                      className="text-red-500 hover:text-red-700 font-bold px-1"
                      title="Delete Item"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add new Material inline */}
            <form onSubmit={handleAddMaterial} className="flex gap-2 mt-3">
              <input
                type="text"
                placeholder="নতুন উপাদানের নাম (e.g. জিপার, লেবেল)"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-xs"
              />
              <input
                type="number"
                placeholder="খরচ (৳)"
                value={newItemCost}
                onChange={(e) => setNewItemCost(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-24 px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-bold"
              />
              <button
                type="submit"
                className="bg-[#0B1733] text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#1971A5] transition"
              >
                + যোগ করুন
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">
                প্রতি ইউনিটে এড/মার্কেটিং খরচ (৳)
              </label>
              <input
                type="number"
                value={marketingPerUnit}
                onChange={(e) => setMarketingPerUnit(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#344054] mb-1">
                টার্গেট নিট প্রফিট মার্জিন (%)
              </label>
              <input
                type="number"
                value={targetMarginPercent}
                onChange={(e) => setTargetMarginPercent(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#0B1733] font-bold"
              />
            </div>
          </div>
        </div>

        {/* Right Output: Pricing & Profit Summary */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#0B1733] to-[#0A2540] text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#43A7E8] font-black block mb-1">
              Cost & Selling Price Breakdown
            </span>
            <h4 className="text-base font-bold text-white mb-4 line-clamp-1">
              {skuName || "Product"}
            </h4>

            <div className="space-y-3 text-xs border-b border-white/10 pb-4 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-300">মোট ম্যাটেরিয়াল খরচ:</span>
                <span className="font-bold text-white">৳{totalRawCost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">মার্কেটিং ও কাস্টমার একুইজিশন:</span>
                <span className="font-bold text-white">৳{marketingPerUnit || 0}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-white/10">
                <span className="text-[#43A7E8] font-bold">মোট ইউনিট খরচ (COGS + Ad):</span>
                <span className="font-black text-[#43A7E8]">৳{totalCogs}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/10 p-3.5 rounded-xl">
              <span className="text-[10px] text-gray-300 block uppercase font-bold">
                সাজেস্টেড বিক্রয় মূল্য (Recommended Selling Price)
              </span>
              <span className="text-3xl font-black text-amber-400 block mt-0.5">
                ৳{recommendedSellingPrice > 0 ? recommendedSellingPrice : 0}
              </span>
            </div>

            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-emerald-300 font-bold block">প্রতি ইউনিটে নিট লাভ</span>
                <span className="text-lg font-black text-emerald-400">
                  ৳{netProfitPerUnit > 0 ? netProfitPerUnit : 0}
                </span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-lg">
                {targetMarginPercent}% Margin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
