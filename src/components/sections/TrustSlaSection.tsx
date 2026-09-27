"use client";

import { motion } from "framer-motion";

const trustPillars = [
  {
    icon: "⚡",
    title: "48–72h Digital Vault SLA",
    desc: "অর্ডারের পর নির্দিষ্ট সময়সীমার মধ্যে সরাসরি আপনার প্রাইভেট ক্লাউড ফোল্ডারে সম্পূর্ণ রেডি সিস্টেম ডেলিভারি।",
  },
  {
    icon: "📝",
    title: "100% Editable Source Files",
    desc: "শুধু লক করা পিডিএফ নয়—পুরো এডিটেবল Word (.docx), Excel / Google Sheets এবং Presentation স্লাইডস প্রদান করা হয়।",
  },
  {
    icon: "🛡️",
    title: "2-Round Revision Guarantee",
    desc: "ফাইল ডেলিভারির পরবর্তী ৭ দিনের মধ্যে আপনার স্পেসিফিক রিকোয়ারমেন্ট অনুযায়ী ২ রাউন্ড রিভিশন সুবিধা।",
  },
  {
    icon: "🔒",
    title: "Client NDA & Data Privacy",
    desc: "আপনার বিজনেস ডেটা, ক্লায়েন্ট লিস্ট ও ফাইন্যান্সিয়াল ইনফরমেশনের শতভাগ গোপনীয়তা নিশ্চিত।",
  },
];

export default function TrustSlaSection() {
  return (
    <section className="py-16 bg-[#0B1733] text-white">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="text-center max-w-[650px] mx-auto mb-12">
          <span className="text-[#43A7E8] font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/15 inline-block mb-3">
            Nexus Lift Service Standard
          </span>
          <h2 className="text-2xl md:text-3xl font-black">
            কেন Nexus Lift সাধারণ টেমপ্লেটের চেয়ে আলাদা?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="font-bold text-base text-white mb-2">{p.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
