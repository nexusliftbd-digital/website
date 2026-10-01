import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Custom CRM & Dashboard Systems | Nexus Lift',
  description: 'Regain control of your operations. Eliminate missed leads and track ROI accurately with our Custom CRM Dashboards.',
};

export default function CustomCRMPage() {
  return (
    <div className="min-h-screen bg-white text-[#101828]">
      <Navbar />
      <main className="py-20 px-4 max-w-[900px] mx-auto text-center">
        <span className="inline-block bg-[#EAF6FF] text-[#1971A5] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
          Step 3: Control & Pipeline
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#0B1733] leading-tight mb-8">
          Custom CRM & Dashboard Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-[700px] mx-auto">
          Handling data in Facebook Messenger or messy Excel sheets limits your growth. We build centralized, tailored dashboards to manage your leads, track Courier integrations, and measure KPIs securely.
        </p>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl text-left shadow-sm">
          <h2 className="text-2xl font-black text-[#0B1733] mb-6">System Capabilities:</h2>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-[#059669] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">Automated Lead Assignment</strong>
                Eliminate human error. Route leads to sales team instantly and track conversion times.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#059669] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">Courier API & Return Reduction</strong>
                Directly connect Steadfast, Pathao, or RedX APIs to track order status seamlessly.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#059669] font-black text-xl">✓</span>
              <div>
                <strong className="block text-[#0B1733]">CEO & Executive Reporting</strong>
                A unified overview of ROAS, Revenue, COGS, and Net Margin metrics updated in real time.
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/8801814716713?text=I%20am%20looking%20for%20a%20Custom%20CRM%20Dashboard."
            className="bg-[#0B1733] text-white px-8 py-4 rounded-xl font-black hover:shadow-lg transition-all"
          >
            Discuss Requirements →
          </a>
          <Link
            href="/insights"
            className="bg-white border-2 border-gray-200 text-[#0B1733] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            Read the Case Studies
          </Link>
        </div>
      </main>
    </div>
  );
}
