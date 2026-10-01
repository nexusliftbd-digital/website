"use client";

import React, { useState, useRef, useEffect } from 'react';
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
  const quickChips = [
    { label: "📦 কুরিয়ার রিটার্ন কমাব", query: "আমার এফ-কমার্স বিজনেসে কুরিয়ার রিটার্ন অনেক বেশি, কীভাবে সমাধান করব?" },
    { label: "📄 কোম্পানি প্রোফাইল চাই", query: "আমার ক্লায়েন্ট মিটিং ও টেন্ডারের জন্য প্রফেশনাল কোম্পানি প্রোফাইল দরকার।" },
    { label: "💰 ফাইন্যান্স ও প্রফিট ট্র্যাকিং", query: "বিজনেস প্রফিট ও কস্টিং কন্ট্রোল করার কোনো এক্সেল সিস্টেম আছে কি?" },
    { label: "⚙️ ফুল বিজনেস ওএস (OS)", query: "ব্যবসার সম্পূর্ণ টিম ও অপারেশন্স অটোমেট করার গাইড দরকার।" },
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'সালাম! আমি Nexus Lift AI সিস্টেম আর্কিটেক্ট। আপনার ব্যবসা কোন ধরনের এবং বর্তমানে সবচেয়ে বড় চ্যালেঞ্জ কী? (যেমন: কুরিয়ার রিটার্ন, প্রফেশনাল প্রোফাইলের অভাব, বা অগোছালো অপারেশন্স)'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const processQuery = async (userText: string) => {
    if (!userText.trim()) return;

    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages as Message[]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userText, history: newMessages })
      });
      const data = await response.json();
      setMessages((prev) => [...prev, {
        role: 'assistant',
        text: data.reply,
        recommendation: data.recommendation || undefined
      }]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    processQuery(input);
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
            <p className="text-[#374151] text-base leading-relaxed mb-6">
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
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden flex flex-col h-[560px]">
            <div className="bg-[#0B1733] text-white px-6 py-4 flex items-center justify-between shrink-0">
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
            <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-[#FAFBFD]">
              <AnimatePresence>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-[#1971A5] text-white rounded-br-none shadow-sm'
                          : 'bg-white border border-[#E2E8F0] text-[#1E293B] rounded-bl-none font-medium shadow-sm'
                      }`}
                    >
                      {m.text}
                    </div>

                    {m.recommendation && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-3 max-w-[88%] bg-[#EAF6FF] border border-[#BAE6FD] rounded-2xl p-4 text-left shadow-sm"
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
                          className="mt-3 block w-full py-2.5 bg-[#25D366] text-white text-xs font-bold text-center rounded-xl hover:bg-[#1eb956] transition shadow-md"
                        >
                          💬 WhatsApp-এ কনফার্ম করুন
                        </a>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <div className="text-xs text-[#64748B] italic flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#1971A5] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#1971A5] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#1971A5] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  <span className="ml-1">Nexus AI লিখছে...</span>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Click Chips */}
            <div className="px-4 py-2.5 bg-white border-t border-[#E2E8F0] shrink-0">
              <div className="text-[10px] font-bold text-gray-400 mb-1.5">দ্রুত সাজেশনের জন্য বেছে নিন:</div>
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {quickChips.map((chip, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => processQuery(chip.query)}
                    className="text-[11px] font-bold bg-[#F1F5F9] text-[#0B1733] hover:bg-[#1971A5] hover:text-white px-3 py-1.5 rounded-xl transition border border-gray-200 shrink-0"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#E2E8F0] flex gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="সমস্যা লিখুন বা ফোন নম্বর দিন..."
                className="flex-1 px-4 py-2.5 text-sm border border-[#D0D5DD] rounded-xl focus:outline-none focus:border-[#1971A5]"
              />
              <button
                type="submit"
                className="bg-[#0B1733] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold hover:bg-[#1971A5] transition"
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
