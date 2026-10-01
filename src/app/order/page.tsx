"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product') || 'business-profile-pro';
  const planType = searchParams.get('type') || 'custom'; // 'ready' or 'custom'
  const prefillPrice = searchParams.get('price') || '1499';

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [requirements, setRequirements] = useState('');
  const [trxId, setTrxId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad'>('bKash');
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          phone,
          businessName,
          productId,
          productType: planType,
          amount: prefillPrice,
          trxId: trxId || 'PENDING_CONFIRMATION',
          requirements
        })
      });

      const data = await res.json();
      setOrderResult(data);
    } catch (err) {
      console.error('Order submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
      {!orderResult ? (
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-black text-[#1971A5] bg-[#EAF6FF] px-3 py-1 rounded-full uppercase">
              {planType === 'ready' ? '⚡ ইন্সট্যান্ট ডেলিভারি চেকআউট' : '🛠️ কাস্টম সিস্টেম অর্ডার'}
            </span>
            <span className="text-sm font-black text-[#0B1733]">
              মূল্য: ৳{prefillPrice}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#0B1733] mb-2">
            অর্ডার ও সিস্টেম কনফিগারেশন ফর্ম
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            তথ্য সাবমিট করার সাথে সাথে আপনার রিকোয়ারমেন্ট সরাসরি আমাদের সেন্ট্রাল সিস্টেমে সিঙ্ক হয়ে যাবে।
          </p>

          {/* Payment Instructions Card */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-2xl mb-6 text-xs text-[#334155] space-y-2">
            <div className="flex gap-2 items-center font-bold text-[#0B1733]">
              <span>💳 পেমেন্ট মাধ্যম:</span>
              <button
                type="button"
                onClick={() => setPaymentMethod('bKash')}
                className={`px-3 py-1 rounded-lg border font-black transition ${
                  paymentMethod === 'bKash' ? 'bg-[#D12053] text-white border-transparent' : 'bg-white text-gray-700'
                }`}
              >
                bKash (Personal)
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('Nagad')}
                className={`px-3 py-1 rounded-lg border font-black transition ${
                  paymentMethod === 'Nagad' ? 'bg-[#F7931E] text-white border-transparent' : 'bg-white text-gray-700'
                }`}
              >
                Nagad (Personal)
              </button>
            </div>
            <p className="font-semibold text-gray-700">
              নাম্বার: <strong className="text-[#0B1733] select-all">01814716713</strong> (Send Money / ক্যাশ ইন)
            </p>
            <p className="text-[11px] text-gray-500">
              পেমেন্ট করার পর ট্রানজেকশন আইডি (TrxID) নিচে দিন, অথবা ফাঁকা রেখে সরাসরি সাবমিট করে WhatsApp-এ জানান।
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  আপনার নাম:
                </label>
                <input
                  type="text"
                  required
                  placeholder="আপনার নাম"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1971A5]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  WhatsApp / ফোন নম্বর:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1971A5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                ব্যবসার নাম বা ফেসবুক পেজ লিংক:
              </label>
              <input
                type="text"
                required
                placeholder="যেমন: ফ্যাশন বিডি / https://facebook.com/yourpage"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1971A5]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                {planType === 'ready' ? 'কোনো বিশেষ নির্দেশন থাকলে লিখুন (ঐচ্ছিক):' : 'কাস্টম রিকোয়ারমেন্ট বা স্পেসিফিকেশন:'}
              </label>
              <textarea
                rows={3}
                placeholder={planType === 'ready' ? 'কোন ফরমেটে ফাইল দরকার বা ড্রাইভ ইমেইল...' : 'আপনার বিজনেস সম্পর্কে সংক্ষিপ্ত বিবরণ, কী কী পেজ বা ফিচার চান...'}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1971A5]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                পেমেন্ট TrxID (বিকাশ/নগদ):
              </label>
              <input
                type="text"
                placeholder="যেমন: 9J3K8L2P (পরে দিলেও চলবে)"
                value={trxId}
                onChange={(e) => setTrxId(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1971A5]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0B1733] text-white py-4 rounded-xl font-black text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {loading ? 'প্রসেসিং হচ্ছে...' : 'অর্ডার ও রিকোয়ারমেন্ট সাবমিট করুন →'}
            </button>
          </form>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
          <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            ✓ অর্ডার সফলভাবে সম্পন্ন হয়েছে
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1733] mb-2">
            অর্ডার আইডি: #{orderResult.orderId}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-md mx-auto">
            আপনার তথ্য ও রিকোয়ারমেন্ট স্বয়ংক্রিয়ভাবে সেন্ট্রাল ড্যাশবোর্ডে সংরক্ষিত হয়েছে।
          </p>

          {planType === 'ready' && orderResult.autoDeliveryLink && (
            <div className="bg-[#F0FDF4] border border-emerald-200 p-4 rounded-2xl mb-6 text-left">
              <h4 className="text-sm font-black text-emerald-900 mb-1">⚡ আপনার ইন্সট্যান্ট এক্সেস তৈরি:</h4>
              <p className="text-xs text-emerald-700 mb-3">
                নিচের বাটনে ক্লিক করে রেডি সিস্টেম টেমপ্লেট ও রিসোর্স এখনই এক্সেস করুন:
              </p>
              <a
                href={orderResult.autoDeliveryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-700 transition"
              >
                📥 ড্রাইভ ও রিসোর্স এক্সেস করুন
              </a>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/8801814716713?text=${encodeURIComponent(`সালাম Nexus Lift, আমি অর্ডার #${orderResult.orderId} সম্পন্ন করেছি (${businessName})। বিস্তারিত কনফার্ম করতে চাই।`)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0B1733] text-white px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              💬 WhatsApp-এ কনফার্ম করুন
            </a>
            <Link
              href="/"
              className="border border-gray-300 text-[#0B1733] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-50 transition flex items-center justify-center"
            >
              হোমে ফিরে যান
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] py-12 px-4">
        <Suspense fallback={<div className="text-center py-12 font-bold text-gray-500">লোড হচ্ছে...</div>}>
          <CheckoutContent />
        </Suspense>
      </main>
    </>
  );
}
