"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { products as defaultProducts, ProductDef, ProductCategory } from '@/data/products';

interface Lead {
  id: string;
  name: string;
  phone: string;
  type: string;
  solution: string;
  status: 'New' | 'In Progress' | 'Delivered' | 'Paid';
  amount: string;
  date: string;
}

const initialLeads: Lead[] = [
  {
    id: "NL-1082",
    name: "তানভীর আহমেদ (Fashion Hub)",
    phone: "01712-XXXXXX",
    type: "F-Commerce",
    solution: "Facebook Commerce OS",
    status: "Delivered",
    amount: "৳1,499",
    date: "Today, 11:20 AM"
  },
  {
    id: "NL-1081",
    name: "রাফিয়া সুলতানা (Craft BD)",
    phone: "01819-XXXXXX",
    type: "Handicrafts SME",
    solution: "Women Entrepreneur Kit",
    status: "In Progress",
    amount: "৳1,499",
    date: "Today, 09:45 AM"
  },
  {
    id: "NL-1080",
    name: "মেহরাব হোসেন (Apex Engineering)",
    phone: "01911-XXXXXX",
    type: "B2B Contractor",
    solution: "Growth Business Profile",
    status: "Paid",
    amount: "৳1,499",
    date: "Yesterday"
  },
  {
    id: "NL-1079",
    name: "ড. শামীম রেজা (HealthTech Agro)",
    phone: "01622-XXXXXX",
    type: "Agro Tech",
    solution: "Enterprise Business OS",
    status: "In Progress",
    amount: "৳5,999",
    date: "Yesterday"
  }
];

export default function DashboardPage() {
  const [leads] = useState<Lead[]>(initialLeads);
  const [filter, setFilter] = useState('all');
  const [activeTab, setActiveTab] = useState<'pipeline' | 'ceo-products'>('pipeline');

  // CEO Product Management State
  const [productList, setProductList] = useState<ProductDef[]>(defaultProducts);
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newBadge, setNewBadge] = useState('NEW');
  const [newCat, setNewCat] = useState<ProductCategory>('foundation');
  const [newDesc, setNewDesc] = useState('');

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice.trim()) return;

    const newProd: ProductDef = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      price: newPrice.startsWith('৳') ? newPrice : `৳${newPrice}`,
      badge: newBadge || 'NEW',
      cat: newCat,
      desc: newDesc || 'কাস্টম পণ্য বিবরণ।',
      img: '/assets/products/p_starter_profile.svg',
      features: ['সম্পূর্ণ এডিটেবল ফাইল', 'ক্লাউড ড্রাইভ ভল্ট অ্যাক্সেস']
    };

    setProductList([newProd, ...productList]);
    setNewTitle('');
    setNewPrice('');
    setNewDesc('');
    alert('প্রোডাক্ট সফলভাবে যুক্ত হয়েছে!');
  };

  const movePosition = (index: number, direction: 'up' | 'down') => {
    const updated = [...productList];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= updated.length) return;

    const [movedItem] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, movedItem);
    setProductList(updated);
  };

  const removeProduct = (id: string) => {
    setProductList(productList.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Top Bar */}
      <header className="bg-[#0B1733] text-white border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-black text-lg tracking-wider text-[#43A7E8] hover:text-white transition">
            ← NEXUS LIFT
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-xs font-bold text-gray-300">Executive CRM & Infrastructure Command Center</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white/10 p-1 rounded-xl text-xs">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${activeTab === 'pipeline' ? 'bg-[#1971A5] text-white' : 'text-gray-300'}`}
            >
              Order Pipeline
            </button>
            <button
              onClick={() => setActiveTab('ceo-products')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${activeTab === 'ceo-products' ? 'bg-[#1971A5] text-white' : 'text-gray-300'}`}
            >
              👑 CEO Product Manager
            </button>
          </div>
          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-bold border border-emerald-500/30">
            ● AI Sync Engine Online
          </span>
        </div>
      </header>

      {/* Main Command Dashboard */}
      <div className="flex-1 max-w-[1240px] w-full mx-auto p-6 md:p-8 space-y-8">

        {activeTab === 'pipeline' ? (
          <>
            {/* KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Total Active Pipelines</div>
                <div className="text-3xl font-black text-[#0B1733] mt-2">24 Orders</div>
                <div className="text-xs font-bold text-emerald-600 mt-2">↑ 18% vs Last Week</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Monthly Run Rate</div>
                <div className="text-3xl font-black text-[#1971A5] mt-2">৳48,500</div>
                <div className="text-xs font-bold text-emerald-600 mt-2">Verified bKash Inflow</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Avg. SLA Turnaround</div>
                <div className="text-3xl font-black text-[#0B1733] mt-2">38.4 Hours</div>
                <div className="text-xs font-bold text-blue-600 mt-2">Within 48-72h SLA Target</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">AI System Accuracy</div>
                <div className="text-3xl font-black text-emerald-600 mt-2">99.4%</div>
                <div className="text-xs font-bold text-gray-500 mt-2">Zero Format Defects</div>
              </div>
            </div>

            {/* Lead & Delivery Pipeline Table */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#E2E8F0] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h2 className="text-lg font-black text-[#0B1733]">Live Order Pipeline & Vault Hand-offs</h2>
                  <p className="text-xs text-[#64748B] mt-0.5">রিয়েল-টাইম ক্লায়েন্ট অর্ডার স্ট্যাটাস এবং ড্রাইভ ডেলিভারি মনিটর</p>
                </div>
                <div className="flex gap-2">
                  {['all', 'In Progress', 'Delivered'].map((btn) => (
                    <button
                      key={btn}
                      onClick={() => setFilter(btn)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition ${
                        filter === btn
                          ? 'bg-[#0B1733] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {btn === 'all' ? 'All Leads' : btn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#F8FAFC] text-xs font-bold text-[#64748B] uppercase border-b border-[#E2E8F0]">
                    <tr>
                      <th className="px-6 py-4">Client / Company</th>
                      <th className="px-6 py-4">Solution Package</th>
                      <th className="px-6 py-4">Revenue</th>
                      <th className="px-6 py-4">Current Status</th>
                      <th className="px-6 py-4">Intake Time</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {leads
                      .filter((l) => filter === 'all' || l.status === filter)
                      .map((lead) => (
                        <tr key={lead.id} className="hover:bg-[#F8FAFC] transition">
                          <td className="px-6 py-4">
                            <div className="font-extrabold text-[#0B1733]">{lead.name}</div>
                            <div className="text-xs text-gray-500">{lead.phone} · {lead.type}</div>
                          </td>
                          <td className="px-6 py-4 font-bold text-gray-700">{lead.solution}</td>
                          <td className="px-6 py-4 font-black text-[#1971A5]">{lead.amount}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-black ${
                                lead.status === 'Delivered'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : lead.status === 'In Progress'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}
                            >
                              ● {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-gray-500">{lead.date}</td>
                          <td className="px-6 py-4 text-right">
                            <a
                              href="https://wa.me/8801814716713"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block px-3 py-1.5 bg-[#EAF6FF] text-[#125883] rounded-lg text-xs font-extrabold hover:bg-[#1971A5] hover:text-white transition"
                            >
                              WhatsApp Vault
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          /* CEO Product Manager Section */
          <div className="space-y-8">
            {/* Add Product Form */}
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h2 className="text-lg font-black text-[#0B1733] mb-1">
                👑 CEO Product Management Console
              </h2>
              <p className="text-xs text-[#64748B] mb-6">
                নতুন পণ্য, মূল্য, বিবরণ যুক্ত করুন এবং হোমপেজের প্রোডাক্টের অগ্রাধিকার/পজিশন সাজান।
              </p>

              <form onSubmit={handleAddProduct} className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">Product Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="e.g. VIP Business Master OS"
                    className="w-full text-xs p-2.5 border rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">Price</label>
                  <input
                    type="text"
                    value={newPrice}
                    onChange={e => setNewPrice(e.target.value)}
                    placeholder="e.g. ৳2,499"
                    className="w-full text-xs p-2.5 border rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">Badge</label>
                  <input
                    type="text"
                    value={newBadge}
                    onChange={e => setNewBadge(e.target.value)}
                    placeholder="e.g. 🔥 HOT HIT"
                    className="w-full text-xs p-2.5 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">Category</label>
                  <select
                    value={newCat}
                    onChange={e => setNewCat(e.target.value as ProductCategory)}
                    className="w-full text-xs p-2.5 border rounded-xl bg-white"
                  >
                    <option value="foundation">1. Build Your Business</option>
                    <option value="sales">2. Get More Customers</option>
                    <option value="operations">3. Fix Your Operations</option>
                    <option value="finance">4. Control Your Numbers</option>
                    <option value="team">5. Build Your Team</option>
                    <option value="executive">6. Scale With AI & OS</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#334155] mb-1">Short Description</label>
                  <input
                    type="text"
                    value={newDesc}
                    onChange={e => setNewDesc(e.target.value)}
                    placeholder="পণ্য সম্পর্কে ১-২ লাইনের বিবরণ"
                    className="w-full text-xs p-2.5 border rounded-xl"
                  />
                </div>
                <div className="md:col-span-3">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#0B1733] text-white text-xs font-extrabold rounded-xl hover:bg-[#1971A5] transition shadow"
                  >
                    + Add New Product to System
                  </button>
                </div>
              </form>
            </div>

            {/* Position and Catalog List */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-extrabold text-base text-[#0B1733]">Live Product Ordering & Positions ({productList.length} Items)</h3>
                <span className="text-xs text-[#64748B]">Use arrows (↑ ↓) to rearrange order</span>
              </div>

              <div className="space-y-3">
                {productList.map((p, index) => (
                  <div key={p.id} className="flex items-center justify-between p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#EAF6FF] text-[#1971A5] font-black text-xs flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div>
                        <div className="font-bold text-xs text-[#0B1733]">{p.title}</div>
                        <div className="text-[11px] text-[#64748B]">{p.badge} · {p.price}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => movePosition(index, 'up')}
                        disabled={index === 0}
                        className="px-2.5 py-1 bg-white border rounded text-xs font-black disabled:opacity-30 hover:bg-gray-100"
                        title="Move Up"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => movePosition(index, 'down')}
                        disabled={index === productList.length - 1}
                        className="px-2.5 py-1 bg-white border rounded text-xs font-black disabled:opacity-30 hover:bg-gray-100"
                        title="Move Down"
                      >
                        ↓
                      </button>
                      <button
                        onClick={() => removeProduct(p.id)}
                        className="px-2.5 py-1 text-red-600 bg-red-50 border border-red-200 rounded text-xs font-bold hover:bg-red-100"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
