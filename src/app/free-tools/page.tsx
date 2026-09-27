import React from "react";
import CourierReturnLossCalculator from "@/components/calculators/CourierReturnLossCalculator";
import PricingProfitCalculator from "@/components/calculators/PricingProfitCalculator";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Free Business Tools & Calculators | Nexus Lift",
  description: "Free pricing calculators, courier return loss calculators, and business growth resources for Bangladeshi entrepreneurs.",
};

export default function FreeToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] pb-24">
        {/* Header */}
        <header className="bg-[#0B1733] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#43A7E8] via-transparent to-transparent" />
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 relative z-10 text-center">
            <span className="font-bold text-xs uppercase tracking-widest text-[#43A7E8] mb-4 block">
              Nexus Lift Growth Hub
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Free Business Growth Tools
            </h1>
            <p className="text-[#aebbd0] max-w-[600px] mx-auto text-sm md:text-base leading-relaxed">
              আপনার ব্যবসার হিডেন লস খুঁজে বের করুন এবং প্রফিট অপটিমাইজ করার জন্য আমাদের তৈরি ফ্রি ক্যালকুলেটর ও ডাটাবেস টুলসগুলো ব্যবহার করুন।
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 mt-[-40px] relative z-20 space-y-8">

          {/* Tool 1 */}
          <PricingProfitCalculator />

          {/* Tool 2 */}
          <CourierReturnLossCalculator />

          {/* Lead Magnet CTA for more templates */}
          <div className="bg-gradient-to-br from-[#1971A5] to-[#125883] p-8 rounded-2xl text-white mt-12 flex flex-col items-center text-center">
            <h2 className="text-2xl font-black mb-3">আরও ৫২+ Business Templates ও SOP চান?</h2>
            <p className="text-[#EAF6FF] text-sm max-w-[600px] mb-6">
              আমরা আপনার সম্পূর্ণ টিমের জন্য রেডিমেড SOP, স্যালারি শিট, এটেন্ডেন্স ট্র্যাকার এবং সেলস স্ক্রিপ্ট তৈরি করে রেখেছি।
            </p>
            <Link href="/#products" className="bg-white text-[#1971A5] px-8 py-3.5 rounded-xl font-black hover:shadow-lg transition hover:scale-105">
              Explore Premium OS Products →
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#071127] text-[#aebbd0] py-12 text-sm border-t border-white/10">
        <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="text-lg font-black text-white tracking-wider block mb-1">NEXUS LIFT</span>
            <p className="text-xs text-[#64748b] max-w-[280px] leading-relaxed">
              AI-Powered Business Growth Infrastructure Platform — ঢাকা, বাংলাদেশ
            </p>
          </div>
          <div className="text-xs text-[#475467] self-end md:self-auto">
            © 2026 Nexus Lift. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
