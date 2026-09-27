"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    title: "ব্যবসার ক্যাশ ফ্লো নিয়ে দুশ্চিন্তা?",
    desc: "প্রচুর সেলস হচ্ছে কিন্তু দিনশেষে লাভের খাতা শূন্য? আমাদের Finance & Profit Audit আপনার লসের ছিদ্র বন্ধ করবে।",
  },
  {
    title: "আপনি না থাকলে বিজনেস চলে না?",
    desc: "পুরো ডিপেন্ডেন্সি আপনার ওপর? আমাদের Founder Delegation OS আপনাকে ওটিসি (Owner-to-Team) ট্রান্সজিশন দেবে।",
  },
  {
    title: "কুরিয়ার রিটার্ন ও ইনবক্স ড্রপ?",
    desc: "প্রতিটা অর্ডারের পেছনে লস? আমাদের Facebook Commerce OS আপনার রিটার্ন রেট ৪০% পর্যন্ত কমিয়ে দেবে।",
  },
  {
    title: "বড় ডিল বা টেন্ডার হাতছাড়া হয়?",
    desc: "মান্ধাতা আমলের প্রোফাইল? আমাদের Premium Corporate Profile বড় ক্লায়েন্ট ও ইনভেস্টরের সাথে বিশ্বাস তৈরি করে।",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-black text-[#0B1733] text-center mb-16">
          আপনার ব্যবসার বাধার দেয়ালগুলো কি এগুলোই?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl"
            >
              <h3 className="text-xl font-black text-[#0B1733] mb-3">{p.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
