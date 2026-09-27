"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  text: string;
  recommendation?: {
    title: string;
    price: string;
    badge: string;
    waUrl: string;
  };
}

export default function AiRouterChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'সালাম! আমি Nexus Lift AI সিস্টেম আর্কিটেক্ট। আপনার ব্যবসা কোন ধরনের এবং বর্তমানে সবচেয়ে বড় সমস্যা কী হচ্ছে? (যেমন: কুরিয়ার রিটার্ন, প্রফেশনাল প্রোফাইলের অভাব, বা অপারেশন্স অগোছালো)'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = '';
      let rec = undefined;

      const lower = userText.toLowerCase();
      if (lower.includes('f-commerce') || lower.includes('রিটার্ন') || lower.includes('কুরিয়ার') || lower.includes('courier') || lower.includes('ইনবক্স')) {
        replyText = 'আপনার F-Commerce বা ডেলিভারি রিটার্ন সমস্যার জন্য আমাদের "Facebook Commerce OS" আদর্শ। এতে কুরিয়ার ভেরিফিকেশন এবং হাই-কনভার্টিং ইনবক্স স্ক্রিপ্ট রয়েছে।';
        rec = {
          title: "Facebook Commerce OS",
          price: "৳1,499",
          badge: "RECOMMENDED",
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent("সালাম, AI Router সুপারিশকৃত Facebook Commerce OS সম্পর্কে জানতে চাই।")}`
        };
      } else if (lower.includes('profile') || lower.includes('প্রোফাইল') || lower.includes('b2b') || lower.includes('ক্লায়েন্ট') || lower.includes('টেন্ডার')) {
        replyText = 'ক্লায়েন্ট বায়ার কনভার্সন এবং প্রফেশনাল ব্র্যান্ডিংয়ের জন্য "Growth Business Profile Suite" ১২-১৫ পৃষ্ঠার রিসার্চ-ব্যাকড ফাইল দিয়ে আপনার বিশ্বাসযোগ্যতা সর্বোচ্চ পর্যায়ে নিয়ে যাবে।';
        rec = {
          title: "Growth Business Profile Suite",
          price: "৳1,499",
          badge: "FLAGSHIP MATCH",
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent("সালাম, AI Router সুপারিশকৃত Growth Business Profile সম্পর্কে জানতে চাই।")}`
        };
      } else {
        replyText = 'আপনার ব্যবসার প্রয়োজন বিশ্লেষণ করা হয়েছে। পুরো সিস্টেমকে একটি স্ট্যান্ডার্ড কাঠামোর আওতায় আনতে আমাদের ফাউন্ডেশন বা এন্টারপ্রাইজ সিস্টেম আর্কিটেকচার গ্রহণ করতে পারেন।';
        rec = {
          title: "Starter Business Profile",
          price: "৳999",
          badge: "FOUNDATION MATCH",
          waUrl: `https://wa.me/8801814716713?text=${encodeURIComponent("সালাম, AI Router সুপারিশকৃত Starter Business Profile প্যাকেজটি সম্পর্কে জানতে চাই।")}`
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: replyText,
          recommendation: rec
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <section className="py-20 bg-[#F0F7FD] border-b border-[#E4E7EC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <span className="text-[#1971A5] font-black text-xs uppercase tracking-widest block mb-2">
              Instant AI Solution Finder · স্মার্ট ডায়াগনসিস
            </span>
            <h2 className="text-3xl md:text-[40px] font-black tracking-tight text-[#0B1733] leading-tight mb-4">
              আপনার ব্যবসার জন্য কোন সিস্টেমটি সঠিক?
            </h2>
            <p className="text-[#667085] text-base leading-relaxed mb-6">
              আমাদের ইন্টেলিজেন্ট এআই রাউটারের সাথে কথা বলে কয়েক সেকেন্ডেই আপনার বর্তমান চ্যালেঞ্জ অনুযায়ী সেরা সমাধান ও সিস্টেম প্যাকেজ নির্বাচন করুন।
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#334155] font-semibold">
                <span className="w-6 h-6 rounded-full bg-[#1971A5] text-white flex items-center justify-center text-xs font-black">✓</span>
                <span>রিসার্চ-ব্যাকড সিস্টেম অ্যালগরিদম</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#334155] font-semibold">
                <span className="w-6 h-6 rounded-full bg-[#1971A5] text-white flex items-center justify-center text-xs font-black">✓</span>
                <span>সরাসরি ১-ক্লিক হোয়াটসঅ্যাপ অর্ডার রাউটিং</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#334155] font-semibold">
                <span className="w-6 h-6 rounded-full bg-[#1971A5] text-white flex items-center justify-center text-xs font-black">✓</span>
                <span>বিনা খরচে ইনস্ট্যান্ট বিজনেস অ্যানালাইসিস</span>
              </div>
            </div>
          </div>

          {/* Live Chat Box */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden flex flex-col h-[520px]">
            <div className="bg-[#0B1733] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                <div>
                  <div className="font-extrabold text-sm">Nexus Lift AI Assistant</div>
                  <div className="text-[11px] text-[#93C5FD]">Smart System Matcher</div>
                </div>
              </div>
              <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full text-white font-bold">24/7 Active</span>
            </div>

            {/* Chat message flow */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              <AnimatePresence>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-[#1971A5] text-white rounded-br-none'
                          : 'bg-[#F1F5F9] text-[#1E293B] rounded-bl-none font-medium'
                      }`}
                    >
                      {m.text}
                    </div>

                    {m.recommendation && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-3 max-w-[85%] bg-[#EAF6FF] border border-[#BAE6FD] rounded-2xl p-4 text-left"
                      >
                        <div className="text-[10px] font-black text-[#0369A1] uppercase tracking-wider mb-1">
                          {m.recommendation.badge}
                        </div>
                        <div className="text-base font-extrabold text-[#0B1733]">
                          {m.recommendation.title}
                        </div>
                        <div className="text-sm font-black text-[#1971A5] my-1">
                          {m.recommendation.price}
                        </div>
                        <a
                          href={m.recommendation.waUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 block w-full py-2 bg-[#25D366] text-white text-xs font-bold text-center rounded-lg hover:bg-[#1eb956] transition shadow-sm"
                        >
                          💬 WhatsApp-এ কনফার্ম করুন
                        </a>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <div className="text-xs text-[#64748B] italic">Nexus AI লিখছে...</div>
              )}
            </div>

            {/* Input form */}
            <form onSubmit={handleSend} className="p-3 border-t border-[#E2E8F0] bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="আপনার ব্যবসার ধরন বা সমস্যা লিখুন..."
                className="flex-1 px-4 py-2.5 text-sm border border-[#D0D5DD] rounded-xl focus:outline-none focus:border-[#1971A5]"
              />
              <button
                type="submit"
                className="bg-[#0B1733] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold hover:bg-black transition"
              >
                পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
