"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const visionItems = [
  {
    img: "/assets/products/p_corp_profile.svg",
    gradient: "from-[#0B1733] to-[#1971A5]",
    accent: "#43A7E8",
    eyebrow: "Brand & Authority",
    title: "প্রতিটি ব্যবসার একটি পেশাদার পরিচয় থাকা চাই",
    desc: "Research-backed corporate profile যা বড় ক্লায়েন্ট ও টেন্ডারে বিশ্বাস তৈরি করে।",
    stat: "৩০–৪০ পৃষ্ঠা",
    statLabel: "Institutional Deck",
  },
  {
    img: "/assets/products/p_fcommerce_os.svg",
    gradient: "from-[#1971A5] to-[#0B1733]",
    accent: "#34D399",
    eyebrow: "Conversion OS",
    title: "কুরিয়ার রিটার্ন কমান, প্রতিটি বিক্রি নিশ্চিত করুন",
    desc: "F-Commerce OS — COD loss protection, Messenger script ও courier verification সব একসাথে।",
    stat: "৪০%",
    statLabel: "Return Loss কমে",
  },
  {
    img: "/assets/products/p_mod_crm.svg",
    gradient: "from-[#0B1733] to-[#43A7E8]",
    accent: "#F59E0B",
    eyebrow: "CRM Infrastructure",
    title: "লিড থেকে ডেলিভারি — সব এক সিস্টেমে ট্র্যাক করুন",
    desc: "7-Tab CRM Architecture: Lead → Pipeline → Dispatch → Vault Handoff, প্রতিটি স্তর নিয়ন্ত্রণে।",
    stat: "7 Tab",
    statLabel: "Connected Pipeline",
  },
  {
    img: "/assets/products/p_enterprise_os.svg",
    gradient: "from-[#071127] to-[#1971A5]",
    accent: "#A78BFA",
    eyebrow: "Enterprise Growth",
    title: "পুরো কোম্পানি চালান — সিইও ছাড়াও",
    desc: "একটি All-in-One Enterprise OS যা ১০টি ডিপার্টমেন্টের SOP, KPI ও CRM এক ভল্টে রাখে।",
    stat: "All-in-One",
    statLabel: "Business OS",
  },
  {
    img: "/assets/products/p_growth_profile.svg",
    gradient: "from-[#1971A5] to-[#071127]",
    accent: "#43A7E8",
    eyebrow: "SME Growth Suite",
    title: "এসএমই ও F-Commerce-এর জন্য পূর্ণ গ্রোথ স্যুট",
    desc: "১২–১৫ পৃষ্ঠার রিসার্চ-ব্যাকড প্রোফাইল, ফাউন্ডার স্টোরি এবং ৩৬০° ভ্যালু প্রেজেন্টেশন।",
    stat: "৳1,499",
    statLabel: "Flagship Kit",
  },
  {
    img: "/assets/products/p_mod_ai.svg",
    gradient: "from-[#0B1733] via-[#0f2d5e] to-[#1971A5]",
    accent: "#6EE7B7",
    eyebrow: "AI Automation",
    title: "২৪/৭ ইনবক্সে বিক্রি — AI ফ্লো দিয়ে",
    desc: "Automated inbox routing, pre-order validation ও conversion scripts — ঘুম থেকে উঠেও বিক্রি চলুক।",
    stat: "24/7",
    statLabel: "AI Sales Active",
  },
];

export default function VisionGallery() {
  return (
    <section className="py-20 bg-[#071127] overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">

        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#43A7E8] font-black text-xs uppercase tracking-widest inline-block mb-3 bg-[#43A7E8]/10 px-4 py-1.5 rounded-full border border-[#43A7E8]/20"
          >
            Nexus Lift Vision · Total Growth System
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[44px] font-black tracking-tight leading-tight text-white"
          >
            একটি সিস্টেম,<br />
            <span className="text-[#43A7E8]">পুরো বিজনেস গ্রোথের সমাধান।</span>
          </motion.h2>
          <p className="text-[#94A3B8] text-base mt-4 leading-relaxed">
            Brand identity থেকে শুরু করে enterprise CRM পর্যন্ত — Nexus Lift-এর প্রতিটি পণ্য আপনার ব্যবসার একটি নির্দিষ্ট সমস্যা সমাধান করে এবং একসাথে একটি সম্পূর্ণ গ্রোথ আর্কিটেকচার তৈরি করে।
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visionItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${item.gradient} group`}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: item.accent }}
              />

              {/* Product visual */}
              <div className="h-[150px] flex items-center justify-center p-5 relative">
                <div className="relative w-[130px] h-[110px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Nexus brand colour bar */}
              <div className="h-[3px] w-full" style={{ background: item.accent }} />

              {/* Content */}
              <div className="p-5 bg-gradient-to-b from-black/20 to-black/40">
                <span
                  className="text-[10px] font-black uppercase tracking-widest mb-2 inline-block"
                  style={{ color: item.accent }}
                >
                  {item.eyebrow}
                </span>
                <h3 className="text-sm font-extrabold text-white leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/70 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-white">{item.stat}</span>
                  <span className="text-[11px] text-white/60 font-bold">{item.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="text-white font-black text-lg mb-1">
              আপনার ব্যবসার কোন সমস্যা আগে সমাধান করতে চান?
            </div>
            <p className="text-[#94A3B8] text-sm">
              আমাদের এআই ডায়াগনস্টিক ইঞ্জিন আপনার প্রয়োজন বিশ্লেষণ করে সঠিক সিস্টেম সাজেস্ট করবে।
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#diagnose"
              className="px-6 py-3 bg-[#43A7E8] text-[#0B1733] rounded-xl font-extrabold text-sm hover:bg-white transition"
            >
              AI Diagnose করুন →
            </a>
            <a
              href="https://wa.me/8801814716713"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white rounded-xl font-extrabold text-sm hover:bg-[#1eb956] transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
