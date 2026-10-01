import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Conversion Website & Automations | Nexus Lift',
  description: 'Not just a website—a high-converting digital automated sales machine for Bangladeshi SMEs and F-Commerce.',
};

export default function ConversionWebsitePage() {
  return (
    <div className="min-h-screen bg-white text-[#101828]">
      <Navbar />
      <main className="py-20 px-4 max-w-[900px] mx-auto text-center">
        <span className="inline-block bg-[#EAF6FF] text-[#1971A5] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
          Step 2: Digital Growth Engine
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#0B1733] leading-tight mb-8">
          Not Just a Website.<br className="hidden md:block"/> A Conversion System.
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-[700px] mx-auto">
          Most websites are digital brochures. We build extremely fast, psychologically optimized landing pages and websites designed to turn cold traffic into qualified leads and sales automatically.
        </p>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl text-left shadow-sm">
          <h2 className="text-2xl font-black text-[#0B1733] mb-6">Core Features:</h2>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-[#0B5A96] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">High-Performance Architecture (Next.js)</strong>
                Lightning-fast load times. We never use bloated themes that kill conversion rates.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0B5A96] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">Automated Lead Capture & Pixel Tracking</strong>
                Integrated properly with Meta Pixel, Conversions API (CAPI), and Google Tag Manager.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0B5A96] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">Sales Funnel Psychology</strong>
                Copywriting layout and UX design structurally proven to lower bounce rate and increase ROAS.
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/8801814716713?text=I%20need%20a%20Conversion%20Website%20for%20my%20business."
            className="bg-[#0B1733] text-white px-8 py-4 rounded-xl font-black hover:shadow-lg transition-all"
          >
            Start Your Project →
          </a>
          <Link
            href="/growth-audit"
            className="bg-white border-2 border-gray-200 text-[#0B1733] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            Take the Audit First
          </Link>
        </div>
      </main>
    </div>
  );
}
