"use client";

import React, { useState } from "react";
import CourierReturnLossCalculator from "@/components/calculators/CourierReturnLossCalculator";
import PricingProfitCalculator from "@/components/calculators/PricingProfitCalculator";
import KpiTrackingCalculator from "@/components/calculators/KpiTrackingCalculator";
import SkuCostingCalculator from "@/components/calculators/SkuCostingCalculator";
import HtmlPdfWebEditor from "@/components/calculators/HtmlPdfWebEditor";
import RoasBreakEvenCalculator from "@/components/calculators/RoasBreakEvenCalculator";
import CashflowRunwayCalculator from "@/components/calculators/CashflowRunwayCalculator";
import FounderDelegationCalculator from "@/components/calculators/FounderDelegationCalculator";
import BusinessNameGenerator from "@/components/calculators/BusinessNameGenerator";
import Navbar from "@/components/layout/Navbar";

export default function FreeToolsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tools = [
    { id: "profit", name: "Pricing & Profit", component: <PricingProfitCalculator /> },
    { id: "ads", name: "Ads & ROAS", component: <RoasBreakEvenCalculator /> },
    { id: "courier", name: "Courier Return", component: <CourierReturnLossCalculator /> },
    { id: "cashflow", name: "Cash Flow", component: <CashflowRunwayCalculator /> },
    { id: "costing", name: "SKU Costing", component: <SkuCostingCalculator /> },
    { id: "delegation", name: "Delegation & SOP", component: <FounderDelegationCalculator /> },
    { id: "branding", name: "Branding", component: <BusinessNameGenerator /> },
    { id: "kpi", name: "KPI Tracking", component: <KpiTrackingCalculator /> },
    { id: "pdf", name: "PDF Generator", component: <HtmlPdfWebEditor /> },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] pb-24">
        <header className="bg-[#0B1733] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#43A7E8] via-transparent to-transparent" />
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Nexus Lift Growth Hub
            </h1>
            <p className="text-[#aebbd0] max-w-[600px] mx-auto text-sm md:text-base leading-relaxed">
              আপনার ব্যবসার হিডেন লস খুঁজে বের করুন এবং প্রফিট অপটিমাইজ করার জন্য আমাদের তৈরি ৯টি হাই-কনভার্টিং বিজনেস ক্যালকুলেটর ব্যবহার করুন।
            </p>
          </div>
        </header>

        <nav className="max-w-[1160px] mx-auto px-4 mt-6 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition ${activeTab === "all" ? "bg-[#0B1733] text-white" : "bg-white border text-gray-700 hover:bg-gray-50"}`}
          >
            সব টুলস (All)
          </button>
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition ${activeTab === tool.id ? "bg-[#1971A5] text-white" : "bg-white border text-gray-700 hover:bg-gray-50"}`}
            >
              {tool.name}
            </button>
          ))}
        </nav>

        <section className="max-w-[1160px] mx-auto px-4 md:px-0 mt-8 space-y-8">
          {activeTab === "all" ? (
             tools.map(tool => <div key={tool.id}>{tool.component}</div>)
          ) : (
            tools.find(t => t.id === activeTab)?.component
          )}
        </section>
      </main>
    </>
  );
}
