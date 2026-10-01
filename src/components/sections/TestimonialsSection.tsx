"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "তানভীর আহমেদ",
    company: "Fashion Hub BD (F-Commerce)",
    metric: "রিটার্ন লস কমেছে ৩৮%",
    quote: "Facebook Commerce OS এবং ডেলিভারি ট্র্যাকার ব্যবহার করার পর আমাদের কুরিয়ার রিটার্ন এক মাসে ৩৮% কমে গেছে। ইনবক্স সেলস স্ক্রিপ্টগুলো আসলেই গেম-চেঞ্জার!",
    badge: "F-Commerce OS",
    image: "/assets/brand/user-1.jpg"
  },
  {
    name: "মেহরাব হোসেন",
    company: "Apex Engineering & Logistics",
    metric: "৳২৫ লাখের টেন্ডার জয়",
    quote: "Nexus Lift-এর Premium Corporate Profile দিয়ে আমরা প্রথমবার একটি মাল্টিন্যাশনাল টেন্ডারে বিড করে সফল হয়েছি। প্রোফাইলের রিসার্চ এবং ডিজাইন ক্লায়েন্টকে ভরসা দিয়েছে।",
    badge: "Corporate Profile",
    image: "/assets/brand/user-2.jpg"
  },
  {
    name: "রাফিয়া সুলতানা",
    company: "Craft & Bloom BD",
    metric: "মালিকের দৈনিক ৩ ঘণ্টা সময় সাশ্রয়",
    quote: "সব কাজ আমাকেই করতে হতো। Founder Delegation OS নেওয়ার পর টিমকে স্পষ্ট রোল এবং এসওপি বুঝিয়ে দিতে পেরেছি। এখন ব্যবসা আমাকে ছাড়া স্মুথলি চলে।",
    badge: "Delegation OS",
    image: "/assets/brand/user-3.jpg"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest bg-[#EAF6FF] px-4 py-1.5 rounded-full border border-[#43A7E8]/30 inline-block mb-3">
            Real Founder Results & Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1733] tracking-tight">
            বাংলাদেশের শত শত উদ্যোক্তা তাদের গ্রোথ সিস্টেম তৈরি করছেন
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#EAF6FF] text-[#1971A5] border border-[#BAE6FD]">
                    {s.badge}
                  </span>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    ★ ★ ★ ★ ★
                  </span>
                </div>
                <div className="text-lg font-black text-[#0B1733] mb-2">{s.metric}</div>
                <p className="text-xs text-[#64748B] leading-relaxed italic mb-6">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#1971A5] shadow-sm"
                />
                <div>
                  <div className="text-xs font-black text-[#0B1733]">{s.name}</div>
                  <div className="text-[11px] text-gray-500">{s.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
