import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Corporate Business Profile & Identity | Nexus Lift',
  description: 'Establish ultimate credibility with a research-backed, beautifully designed Corporate Business Profile and Brand Guidelines.',
};

export default function BusinessProfilePage() {
  return (
    <div className="min-h-screen bg-white text-[#101828]">
      <Navbar />
      <main className="py-20 px-4 max-w-[900px] mx-auto text-center">
        <span className="inline-block bg-[#EAF6FF] text-[#1971A5] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
          Step 1: Business Foundation
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#0B1733] leading-tight mb-8">
          Corporate Business Profile & Brand Identity
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-[700px] mx-auto">
          Don&apos;t lose clients because you don&apos;t look professional. A structured, data-driven Company Profile builds instant credibility and trust for B2B tenders, corporate clients, and international buyers.
        </p>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl text-left shadow-sm">
          <h2 className="text-2xl font-black text-[#0B1733] mb-6">What You Get:</h2>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-[#1971A5] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">Research-Backed Content Strategy</strong>
                Professionally written Vision, Mission, Core Values, and Service outlines.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#1971A5] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">Executive Corporate Design</strong>
                Minimalist, modern, and high-conversion PDF layout ready for print and email attachments.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#1971A5] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">Brand Identity System (Optional)</strong>
                Logo standardization, color palettes, and typography for consistent marketing.
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/8801814716713?text=I%20am%20interested%20in%20building%20a%20Corporate%20Business%20Profile."
            className="bg-[#0B1733] text-white px-8 py-4 rounded-xl font-black hover:shadow-lg transition-all"
          >
            Consult on WhatsApp →
          </a>
          <Link
            href="/#products"
            className="bg-white border-2 border-gray-200 text-[#0B1733] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            View Pricing
          </Link>
        </div>
      </main>
    </div>
  );
}
