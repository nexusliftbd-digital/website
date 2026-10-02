"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const heroProducts = [
  {
    badge: "⭐ সবচেয়ে জনপ্রিয়",
    badgeColor: "bg-amber-100 text-amber-800",
    icon: "🏢",
    title: "Business Profile",
    subtitle: "Corporate Identity System",
    price: "৳ ২,৬০০",
    originalPrice: "৳ ৪,৫০০",
    desc: "Research-backed ৩০–৪০ পৃষ্ঠার Corporate Profile যা বড় ক্লায়েন্ট, টেন্ডার ও বিনিয়োগকারীদের কাছে প্রফেশনাল বিশ্বাসযোগ্যতা তৈরি করে।",
    features: [
      "৩০–৪০ পৃষ্ঠা ফুল কর্পোরেট প্রোফাইল",
      "Editable Word + Print-Ready PDF",
      "ফাউন্ডার স্টোরি + ভিশন সেকশন",
      "৪৮–৭২ ঘণ্টায় ডেলিভারি",
    ],
    accent: "#1971A5",
    accentLight: "#EAF6FF",
    accentText: "#1971A5",
    borderColor: "border-blue-200",
    href: "/business-profile",
    waMsg: "সালাম Nexus Lift, আমি Business Profile / Corporate Identity System অর্ডার করতে চাই। দাম ৳২,৬০০। আমার ব্যবসার নাম:",
    ctaLabel: "এখনই অর্ডার করুন",
    ctaBg: "bg-[#1971A5] hover:bg-[#1558849]",
  },
  {
    badge: "🔥 হাই কনভার্শন",
    badgeColor: "bg-orange-100 text-orange-800",
    icon: "🌐",
    title: "Conversion Website",
    subtitle: "Professional Sales Funnel Site",
    price: "৳ ৩,৫০০",
    originalPrice: "৳ ৬,০০০",
    desc: "সম্পূর্ণ কাস্টম ওয়েবসাইট যা ভিজিটরকে ক্রেতায় রূপান্তরিত করে — SEO-ready, mobile-first ও ফেসবুক পিক্সেল সংযুক্ত।",
    features: [
      "মোবাইল-ফার্স্ট রেসপন্সিভ ডিজাইন",
      "SEO + Facebook Pixel সেটআপ",
      "WhatsApp/Messenger CTA ইন্টিগ্রেশন",
      "৭ দিনের রিভিশন সাপোর্ট",
    ],
    accent: "#059669",
    accentLight: "#ECFDF5",
    accentText: "#065F46",
    borderColor: "border-emerald-200",
    href: "/conversion-website",
    waMsg: "সালাম Nexus Lift, আমি Professional Conversion Website অর্ডার করতে চাই। দাম ৳৩,৫০০। আমার ব্যবসার নাম:",
    ctaLabel: "ওয়েবসাইট বুক করুন",
    ctaBg: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    badge: "⚡ সিইও-লেভেল কন্ট্রোল",
    badgeColor: "bg-purple-100 text-purple-800",
    icon: "📊",
    title: "Custom CRM Dashboard",
    subtitle: "Order & Business Control System",
    price: "৳ ৪,৫০০",
    originalPrice: "৳ ৮,০০০",
    desc: "কাস্টম CRM যা লিড থেকে ডেলিভারি পর্যন্ত সব ট্র্যাক করে। কুরিয়ার রিটার্ন কমান, টিম ম্যানেজ করুন — এক ড্যাশবোর্ড থেকে।",
    features: [
      "Lead → Pipeline → Dispatch ট্র্যাকিং",
      "কুরিয়ার রিটার্ন প্রটেকশন লেয়ার",
      "টিম KPI ও পারফর্মেন্স রিপোর্ট",
      "Google Sheets / Excel ফরম্যাট",
    ],
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentText: "#5B21B6",
    borderColor: "border-purple-200",
    href: "/custom-crm-dashboard",
    waMsg: "সালাম Nexus Lift, আমি Custom CRM Dashboard অর্ডার করতে চাই। দাম ৳৪,৫০০। আমার ব্যবসার নাম:",
    ctaLabel: "CRM সিস্টেম নিন",
    ctaBg: "bg-violet-600 hover:bg-violet-700",
  },
];

export default function HeroProducts() {
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#0B1733] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            ৩টি Core Product — সরাসরি Order করুন
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-[#0B1733] leading-tight">
            আমাদের ৩টি হিরো প্রোডাক্ট
          </h2>
          <p className="text-[#64748B] text-sm md:text-base mt-2 max-w-[560px] mx-auto">
            Business Profile · Conversion Website · Custom CRM Dashboard — বাংলাদেশের সেরা ব্যবসায়িক সিস্টেম।
          </p>
        </div>

        {/* 3 Hero Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroProducts.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 ${p.borderColor} shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden`}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: p.accent }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${p.badgeColor}`}>
                  {p.badge}
                </span>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <div className="text-lg font-black text-[#0B1733] leading-tight">{p.title}</div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{p.subtitle}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{p.desc}</p>

                {/* Feature List */}
                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px] text-gray-700">
                      <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-black" style={{ color: p.accent }}>{p.price}</span>
                  <span className="text-sm text-gray-400 line-through">{p.originalPrice}</span>
                </div>

                {/* CTAs */}
                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href={`https://wa.me/8801814716713?text=${encodeURIComponent(p.waMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full text-center py-3 rounded-xl text-white font-extrabold text-sm transition ${p.ctaBg}`}
                  >
                    💬 {p.ctaLabel}
                  </a>
                  <Link
                    href={p.href}
                    className="w-full text-center py-2.5 rounded-xl border-2 text-sm font-bold transition hover:bg-gray-50"
                    style={{ borderColor: p.accent, color: p.accent }}
                  >
                    বিস্তারিত দেখুন →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom reassurance strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[12px] text-gray-500 font-bold">
          <span>✓ ৪৮–৭২ ঘণ্টায় ডেলিভারি</span>
          <span>✓ bKash / Nagad / ব্যাংক পেমেন্ট</span>
          <span>✓ আনলিমিটেড রিভিশন</span>
          <span>✓ ৭ দিনের সাপোর্ট গ্যারান্টি</span>
        </div>
      </div>
    </section>
  );
}
