import React from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Nexus Lift Bangladesh",
  description: "Privacy Policy, data protection rules, and digital service terms for Nexus Lift customers.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] py-16 px-4 md:px-0">
        <div className="max-w-[840px] mx-auto bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-14 shadow-sm">
          <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest block mb-2">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#0B1733] mb-4">
            Privacy Policy (গোপনীয়তা নীতিমালা)
          </h1>
          <p className="text-sm text-gray-500 mb-8 border-b pb-4">
            সর্বশেষ আপডেট: ৩০ সেপ্টেম্বর, ২০২৬ | Nexus Lift System & Data Protocol
          </p>

          <div className="space-y-6 text-[#334155] text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">১. তথ্যের সংগ্রহ (Information We Collect)</h2>
              <p>
                Nexus Lift-এ আমরা গ্রাহকের ব্যবসায়ের সর্বোচ্চ গোপনীয়তা রক্ষা করি। যখন আপনি কোনো বিজনেস প্রোফাইল, SOP বা অপারেটিং সিস্টেম অর্ডার করেন, তখন শুধুমাত্র কাজের সুবিধার্থে আপনার ব্যবসার নাম, লোগো, ফোন নম্বর এবং প্রয়োজনীয় বিজনেস প্যারামিটার সংগ্রহ করা হয়।
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">২. তথ্যের ব্যবহার (How We Use Information)</h2>
              <p>
                আপনার প্রদত্ত তথ্য শুধুমাত্র আপনার অর্ডারকৃত ডিজিটাল অ্যাসেট, কাস্টমাইজড শিট, এবং হোয়াটসঅ্যাপ কনসালটেশন প্রক্রিয়ার জন্য ব্যবহৃত হয়। কোনো অবস্থাতেই তৃতীয় কোনো ব্যক্তি বা বাণিজ্যিক সংস্থার কাছে আপনার ব্যবসার ডেটা বিক্রি বা শেয়ার করা হয় না।
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">৩. পেমেন্ট ও ট্রানজেকশন নিরাপত্তা (Payment Security)</h2>
              <p>
                বিকাশ, নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট গ্রহণের সময় আমরা কোনো স্পর্শকাতর পিন বা ওটিপি সংরক্ষণ করি না। প্রতিটি ডিজিটাল অর্ডারের ইনভয়েস ভেরিফিকেশনের জন্য ট্রানজেকশন আইডি ব্যবহার করা হয়।
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-[#0B1733] mb-2">৪. যোগাযোগ ও অধিকার (Contact & Data Control)</h2>
              <p>
                আপনার যেকোনো ডেটা সিস্টেম থেকে মুছে ফেলার জন্য বা আপডেট করার জন্য আমাদের অফিশিয়াল হোয়াটসঅ্যাপ সাপোর্ট নম্বরে (+880 1814-716713) অথবা ইমেইল (nexusliftbd@gmail.com) এর মাধ্যমে অনুরোধ জানাতে পারেন।
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t flex items-center justify-between">
            <Link href="/" className="text-sm font-black text-[#1971A5] hover:underline">
              ← হোমপেজে ফিরে যান
            </Link>
            <Link href="/terms" className="text-sm font-bold text-gray-500 hover:text-[#0B1733]">
              Terms of Service দেখুন →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
