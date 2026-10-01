"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GrowthAuditPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      id: "foundation",
      category: "1. Business Foundation",
      question: "আপনার ব্যবসার কি কোনো লিখিত ভিশন, মিশন ও রিসার্চ-ব্যাকড কোম্পানি প্রোফাইল আছে?",
      options: [
        { label: "হ্যাঁ, সম্পূর্ণ রেডি ও আধুনিক ডক/পিডিএফ আছে", points: 25 },
        { label: "সাধারণ একটি ওয়ার্ড ফাইল বা ব্রোশিওর আছে", points: 15 },
        { label: "না, মুখে মুখেই ক্লায়েন্টকে বোঝাতে হয়", points: 5 },
      ]
    },
    {
      id: "digital",
      category: "2. Conversion System",
      question: "আপনার ওয়েবসাইট বা ল্যান্ডিং পেজ কি ট্রাফিককে রেগুলার লিড/অর্ডারে কনভার্ট করতে পারে?",
      options: [
        { label: "হ্যাঁ, হাই-কনভার্টিং পেজ ও ক্লিয়ার সেলস ফানেল রয়েছে", points: 25 },
        { label: "ওয়েবসাইট আছে, কিন্তু সেলস কনভার্সন অনেক কম", points: 10 },
        { label: "কোনো ওয়েবসাইট নেই, শুধু ফেসবুক পেজ নির্ভর", points: 5 },
      ]
    },
    {
      id: "crm",
      category: "3. Customer & Lead Operations",
      question: "ইনবক্সের লিড, অর্ডার ট্র্যাকিং এবং কুরিয়ার রিটার্ন কীভাবে ম্যানেজ করেন?",
      options: [
        { label: "অটোমেটেড সিআরএম ও ডেলিভারি ট্র্যাকার ব্যবহার করি", points: 25 },
        { label: "এক্সেল শিট বা মেসেঞ্জার চ্যাটে ম্যানুয়ালি ট্র্যাক করি", points: 10 },
        { label: "কোনো ট্র্যাক রাখা হয় না, প্রচুর লিড হারিয়ে যায়", points: 0 },
      ]
    },
    {
      id: "growth",
      category: "4. Scalable Growth & Delegation",
      question: "আপনি উপস্থিত না থাকলেও কি টিম কাজ করতে পারে এবং এসওপি রয়েছে?",
      options: [
        { label: "হ্যাঁ, সুনির্দিষ্ট এসওপি ও কেপিআই সিস্টেম রয়েছে", points: 25 },
        { label: "কিছু কাজের নিয়ম আছে, তবে বেশিরভাগ আমাকে দেখতে হয়", points: 10 },
        { label: "সব কাজ একা করতে হয় (Founder Bottleneck)", points: 0 },
      ]
    }
  ];

  const handleSelect = (qId: string, pts: number) => {
    const updated = { ...answers, [qId]: pts };
    setAnswers(updated);
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          businessName,
          score: totalScore,
          source: 'Growth Audit Diagnostic',
          answers
        })
      });
    } catch (err) {
      console.error('Lead error:', err);
    } finally {
      setLoading(false);
      setShowLeadForm(false);
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] py-12 px-4">
        <div className="max-w-[700px] mx-auto bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
          {!showLeadForm && !submitted && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black text-[#1971A5] bg-[#EAF6FF] px-3 py-1 rounded-full uppercase">
                  Growth Health Diagnostic • ধাপ {step} / {questions.length}
                </span>
                <span className="text-xs font-bold text-gray-400">
                  {Math.round(((step - 1) / questions.length) * 100)}% সম্পন্ন
                </span>
              </div>

              <div className="h-1.5 w-full bg-gray-100 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-[#1971A5] transition-all duration-300"
                  style={{ width: `${((step - 1) / questions.length) * 100}%` }}
                />
              </div>

              <h2 className="text-xs sm:text-sm font-bold text-[#64748B] mb-1 uppercase tracking-wider">
                {questions[step - 1].category}
              </h2>
              <h3 className="text-lg sm:text-2xl font-black text-[#0B1733] mb-6">
                {questions[step - 1].question}
              </h3>

              <div className="space-y-3">
                {questions[step - 1].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(questions[step - 1].id, opt.points)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#1971A5] hover:bg-[#F0F8FF] transition-all flex items-center justify-between text-xs sm:text-sm font-bold text-[#334155]"
                  >
                    <span>{opt.label}</span>
                    <span className="text-[#1971A5] font-black">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {showLeadForm && !submitted && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-black text-[#0B5A96] bg-[#EAF6FF] px-3.5 py-1 rounded-full uppercase mb-4 inline-block">
                অডিট সম্পন্ন • রেজাল্ট আনলক করুন
              </span>
              <h2 className="text-2xl font-black text-[#0B1733] mb-2">
                আপনার বিজনেস স্কোরকার্ড ও রিপোর্ট তৈরি হয়েছে!
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                রিপোর্টটি দেখতে এবং বিশেষজ্ঞ রিকমেন্ডেশন পেতে আপনার তথ্য দিন:
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    আপনার ব্যবসার নাম (বা পেজ লিংক):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: ফ্যাশন হাউজ / এবিসি লিমিটেড"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1971A5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    WhatsApp বা ফোন নম্বর:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1971A5]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0B1733] text-white py-4 rounded-xl font-black text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'প্রসেসিং হচ্ছে...' : 'স্কোরকার্ড ও একশন প্ল্যান দেখুন →'}
                </button>
              </form>
            </motion.div>
          )}

          {submitted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
                ডায়াগনস্টিক রিপোর্ট
              </span>
              <h2 className="text-3xl font-black text-[#0B1733] mb-2">
                বিজনেস গ্রোথ স্কোর: {totalScore} / 100
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {totalScore < 50
                  ? "আপনার ব্যবসা বর্তমানে অপারেশন্স ও কনভার্সন ঝুঁকিতে রয়েছে। প্রতিষ্ঠাতা সরাসরি প্রতিটি কাজে আটকে আছেন (Founder Bottleneck)।"
                  : "আপনার ব্যবসার প্রাথমিক ভিত্তি ভালো, তবে স্কেল করার জন্য কনভার্শন ওয়েবসাইট ও সিআরএম দরকার।"}
              </p>

              <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-2xl mb-8 text-left space-y-3">
                <h4 className="text-sm font-black text-[#0B1733]">আপনার ব্যবসার জন্য ৩টি অগ্রাধিকার সমাধান:</h4>
                <ul className="text-xs space-y-2 text-[#475467]">
                  <li>✓ <strong>১. বিজনেস প্রোফাইল:</strong> প্রাতিষ্ঠানিক ক্রেডিবিলিটি ও ট্রাস্ট তৈরি করুন</li>
                  <li>✓ <strong>২. কনভার্সন ওয়েবসাইট:</strong> ফেসবুক নির্ভরতা কমিয়ে অটোমেটেড অর্ডার ফানেল তৈরি করুন</li>
                  <li>✓ <strong>৩. কাস্টম সিআরএম:</strong> মেসেঞ্জার চ্যাট বিশৃঙ্খলা দূর করে কুরিয়ার রিটার্ন কমিয়ে আনুন</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/8801814716713?text=${encodeURIComponent(`সালাম Nexus Lift, আমি ${businessName || 'আমার ব্যবসার'} জন্য গ্রোথ অডিট করেছি। আমার স্কোর: ${totalScore}/100। আমার ব্যবসার জন্য সেরা সমাধান কী হবে?`)}`}
                  className="bg-[#0B1733] text-white px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  💬 WhatsApp-এ স্ট্র্যাটেজিস্টের সাথে কথা বলুন
                </a>
                <Link
                  href="/#products"
                  className="border border-gray-300 text-[#0B1733] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-50 transition flex items-center justify-center"
                >
                  প্রোডাক্ট ক্যাটালগ দেখুন
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}
