import React from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Nexus Lift Bangladesh",
  description: "Terms and conditions for purchasing and using Nexus Lift business systems and templates.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] py-16 px-4 md:px-0">
        <div className="max-w-[840px] mx-auto bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-14 shadow-sm">
          <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest block mb-2">
            TERMS & CONDITIONS
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#0B1733] mb-4">
            Terms of Service (ব্যবহারের শর্তাবলী)
          </h1>
          <p className="text-sm text-gray-500 mb-8 border-b pb-4">
            সর্বশেষ আপডেট: ৩০ সেপ্টেম্বর, ২০২৬ | Nexus Lift Operations
          </p>

          <div className="space-y-6 text-[#334155] text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">১. ডিজিটাল অ্যাসেট ও লাইসেন্স (License)</h2>
              <p>
                Nexus Lift-এর প্রতিটি প্রোডাক্ট (যেমন: F-Commerce OS, Company Profile Suite, SOPs) ক্রয়কারী ব্যক্তির নিজস্ব ব্যবসার ব্যবহারের জন্য লাইসেন্সপ্রাপ্ত। এই টেমপ্লেট ও রিসোর্সগুলো রি-সেল, পাবলিকলি ডিস্ট্রিবিউট বা পাইরেসি করা সম্পূর্ণ নিষিদ্ধ এবং আইনত দণ্ডনীয়।
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">২. ডেলিভারি ও কাস্টমাইজেশন টাইমলাইন (Delivery SLA)</h2>
              <p>
                - রেডিমেড শিট ও সিস্টেম প্যাকেজ: পেমেন্ট কনফার্মেশনের ৩০ মিনিটের মধ্যে গুগল ড্রাইভ/ডক অ্যাক্সেস ও গাইডলাইন প্রদান।<br/>
                - কাস্টম বিজনেস প্রোফাইল ও ব্র্যান্ড গাইডলাইন: প্রয়োজনীয় তথ্য ও ইন্টারভিউ সম্পন্নের পর ২ থেকে ৩ কার্যদিবসের মধ্যে ড্রাফট এবং ফাইনাল ফাইল ডেলিভারি।
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">৩. রিভিশন ও সাপোর্ট পলিসি (Revision & Support)</h2>
              <p>
                কাস্টম ডিজাইন ও প্রোফাইলের ক্ষেত্রে সর্বোচ্চ ৩ বার ফ্রি রিভিশন সুবিধা পাবেন। যেকোনো টেকনিক্যাল বা শিট সেটআপ সংক্রান্ত জটিলতায় ৩০ দিনের ফ্রি হোয়াটসঅ্যাপ সাপোর্ট অ্যাক্সেস থাকবে।
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">৪. রিফান্ড পলিসি (Refund Policy)</h2>
              <p>
                যেহেতু এগুলো ইন্টেলেকচুয়াল প্রপার্টি ও ডিজিটাল ডাউনলোডযোগ্য অ্যাসেট, ফাইল ডেলিভারির পর সাধারণ ক্যাশ রিফান্ড প্রযোজ্য নয়। তবে ডেলিভারিকৃত ফাইলের কোনো ক্রুটি থাকলে আমাদের টেকনিক্যাল টিম তাৎক্ষণিক তা সমাধান বা রিপ্লেস করে দেবে।
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t flex items-center justify-between">
            <Link href="/" className="text-sm font-black text-[#1971A5] hover:underline">
              ← হোমপেজে ফিরে যান
            </Link>
            <Link href="/privacy" className="text-sm font-bold text-gray-500 hover:text-[#0B1733]">
              Privacy Policy দেখুন →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
