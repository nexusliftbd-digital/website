"use client";

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { products as defaultProducts, ProductCategory, ProductDef } from '@/data/products';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

type DashboardTab = 'ceo-command' | 'ceo-schedule' | 'ceo-book' | 'pipeline' | 'ceo-products';

type PipelineStatus = 'New' | 'Qualified' | 'Offer Sent' | 'Follow-up Scheduled' | 'Converted' | 'Closed';

type PipelineItem = {
  id: string;
  productId: string;
  productTitle: string;
  productCat: ProductCategory;

  clientName?: string;
  clientPhone?: string;

  createdAt: number; // epoch ms
  updatedAt: number; // epoch ms
  status: PipelineStatus;

  followUpAt: number; // epoch ms
  nextOfferProductId?: string;
  nextOfferProductTitle?: string;
  nextOfferConfidence?: number; // 0..1
};

type Lead = {
  id: string;
  name: string;
  phone: string;
  type: string;
  solution: string;
  status: 'New' | 'In Progress' | 'Delivered' | 'Paid';
  amount: string;
  createdAt: number; // epoch ms
};

export type CeoTask = {
  id: string;
  dateStr: string; // YYYY-MM-DD
  title: string;
  time?: string;
  priority: 'High' | 'Medium' | 'Low';
  done: boolean;
  category: 'Strategy' | 'Operations' | 'Sales' | 'Meeting';
};

const PIPELINE_STORAGE_KEY = 'nexuslift_ceo_pipeline_v1';
const PRODUCT_STORAGE_KEY = 'nexuslift_ceo_products_v1';
const TASKS_STORAGE_KEY = 'nexuslift_ceo_tasks_v1';

const now = () => Date.now();

function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function formatBangladeshDateTime(epochMs: number) {
  try {
    return new Intl.DateTimeFormat('bn-BD', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(epochMs));
  } catch {
    return new Date(epochMs).toLocaleString();
  }
}

function getCategoryNext(category: ProductCategory): ProductCategory {
  const order: ProductCategory[] = ['foundation', 'sales', 'operations', 'finance', 'team', 'executive'];
  const idx = order.indexOf(category);
  if (idx === -1) return 'sales';
  return order[Math.min(order.length - 1, idx + 1)];
}

function pickNextOffer(args: {
  currentProduct: ProductDef;
  productCatalog: ProductDef[];
}): { product?: ProductDef; confidence: number } {
  const { currentProduct, productCatalog } = args;

  const targetCat = getCategoryNext(currentProduct.cat);
  const candidatesSameCat = productCatalog.filter((p) => p.id !== currentProduct.id && p.cat === targetCat);
  if (candidatesSameCat.length > 0) {
    const sorted = [...candidatesSameCat].sort((a, b) => Number(!!b.popular) - Number(!!a.popular));
    return { product: sorted[0], confidence: 0.86 };
  }

  const fallback = productCatalog.filter((p) => p.id !== currentProduct.id);
  if (fallback.length === 0) return { product: undefined, confidence: 0.2 };

  const sortedFallback = [...fallback].sort((a, b) => Number(!!b.popular) - Number(!!a.popular));
  return { product: sortedFallback[0], confidence: 0.45 };
}

function recommendFollowUpAt(createdAt: number, cat: ProductCategory) {
  const hoursByCat: Record<ProductCategory, number> = {
    foundation: 36,
    sales: 18,
    operations: 48,
    finance: 30,
    team: 54,
    executive: 72,
  };

  return createdAt + (hoursByCat[cat] ?? 24) * 60 * 60 * 1000;
}

const DEFAULT_CEO_BIBLE_TEXT = `# 🛡️ Nexus Lift Secret Layer Bible
**The Master Operating System, Strategy & Competitor Analysis Blueprint**

---
> **"This document is the ultimate source of truth for Nexus Lift. Do not guess, do not assume—read the Bible."**

## 📑 Table of Contents
1. **The Plan Layer (Foundation)** - Identity, Mission, Vision, Colors & Core
2. **The Repair Layer (Operations)** - Organogram, SOPs, Current Fixes & Workflow
3. **The Next Layer (Scale)** - Development Targets & Short-term Integrations
4. **The Vision Layer (Endgame)** - The Ultimate Future of Nexus Lift
5. **CEO Strategy & Competitor Analysis Report** - BD Top 10, India Top 3, Global Top 3 Analysis

---

# 1️⃣ THE PLAN LAYER (Foundation & Identity)
*This layer defines WHO we are, WHAT we look like, and WHY we exist. No changes can be made without the CEO's direct approval.*

### 🎯 Executive Summary
**Nexus Lift** is a **Business Architecture & Growth Infrastructure builder**. We help SMEs and F-Commerce owners escape the chaos of manual operations by providing High-Converting Websites, Custom CRM Dashboards, Automated Webhooks (Make.com), and Premium Corporate Profiles.

### 👁️ Mission & Vision
- **Mission:** To eliminate operational bottlenecks for Bangladeshi SMEs through exact, automated, and design-perfect digital infrastructure.
- **Vision:** To become the default "Operating System" for businesses in Bangladesh.

### 🎨 Brand Identity & Color Palette
- **Primary Base (Authority):** Navy Deep (#071127) & Navy (#0B1733)
- **Accent (Action/Tech):** Blue (#43A7E8) & Ice Blue (#EAF6FF)
- **Success (Conversion):** Emerald (#10B981)
- **Typography:** Hind & Inter

---

# 2️⃣ THE REPAIR LAYER (Operations & Workflows)
*This layer is about fixing, operating, and the day-to-day running of the company.*

### 🏢 Organogram (Company Structure)
1. **CEO (Vision & System Architect):** Focuses ONLY on The Next & Vision layers, partnerships, and final Q/A.
2. **Operations Manager:** Connects the team, ensures SOPs are followed.
3. **Development Team:** Frontend (Next.js/React), UI/UX Designers.
4. **Growth & Automation Team:** Make.com/Webhook experts, CRM managers.
5. **Sales & Support (Closers):** Handles incoming leads via FB/WhatsApp.

### ⚙️ Developer & Content SOP
- **Product Edits:** All Product Titles, Prices, Descriptions, Options, and Statuses ('live' | 'turned_off' | 'out_of_stock') live in \`src/data/products.ts\`.
- **CEO Dashboard (\`/dashboard\`):** Private executive control center for live pipelines, lead status, schedules, and competitor analysis.

---

# 3️⃣ THE NEXT LAYER (Development Targets & Scaling)
1. **Make.com Full Automation Loop:** Real-time sync with WhatsApp Business API.
2. **Live SEO Blog Ecosystem (100+ Articles):** Establish total topical authority for SME automation.
3. **CEO Pipeline Intelligence:** AI-driven upsell probability indicator.

---

# 4️⃣ THE VISION LAYER (The Ultimate Endgame)
- **Year 1 Target:** Establish Nexus Lift as the most premium Micro-SaaS & Agency hybrid in Bangladesh.
- **Year 3 Target:** Transition to a centralized "Client Portal" with full API integration.
- **Year 5 (The Paradigm Shift):** Nexus Lift becomes an Infrastructure Company powering 10,000+ SMEs.

---

# 🏁 CEO Strategy & Competitor Analysis Report

## Part 1: Strategic Competitor Analysis (Global & Local)

### A. Top 10 Bangladesh Competitors (SEO & Growth Landscape)
1. **TechCloud Ltd.** - Strong in enterprise B2B software, lacks modular F-commerce agility.
2. **Softify Bangladesh** - Good generic development, weak brand-led sales funnels.
3. **Webable Digital** - High-end agency, slow for micro-business operations.
4. **CodersTrust** - Education/Training focus, not infrastructure build.
5. **Brainstation-23** - Enterprise level, not focused on SMEs/F-Commerce.
6. **Bit Mascot** - Tech-heavy, missing the "Business Strategy" layer we provide.
7. **Adplay** - Advertising-led, lacks core operational automation (Make.com/CRM).
8. **Dcastalia** - Good design, inefficient operational conversion flows.
9. **Magnito Digital** - High-budget creative, lacks low-cost high-impact SME modularity.
10. **AamarPay/SSLCommerz** - Strategic partners rather than competitors.

### B. Top 3 Indian Competitors (Market Leaders in Automation/Micro-SaaS)
1. **Instamojo (India)** - Master of SME digitization, storefront + payment pioneer.
2. **Zoho One (India)** - The benchmark for complete Business Operating Systems.
3. **Graphy (Unacademy)** - Excellent creator & knowledge infrastructure selling.

### C. Top 3 Global Competitors (The Blueprint)
1. **Shopify (Canada)** - The gold standard in product catalog management.
2. **Carrd.co** - Global leader in simple, high-converting one-page sites.
3. **Zapier (USA)** - Benchmark for seamless no-code automated logic.

---

## Part 2: CEO Competitor Differentiation Matrix
| Competitor Feature | Their Strength | Nexus Lift Superiority |
| :--- | :--- | :--- |
| **Automation** | Generic API Tools | Make.com + WhatsApp + CRM fully pre-configured per niche. |
| **Onboarding** | Slow/High-cost | "System-in-a-Box" (48-72h delivery for fully operational infra). |
| **Pricing** | Hidden/High | Transparent modular pricing (৳999 to ৳24,999+). |
| **SME Focus** | Overlook SME needs | SME infrastructure is our "Core", not an "Afterthought". |
`;

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  // Auth form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // UI state
  const [activeTab, setActiveTab] = useState<DashboardTab>('ceo-command');
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Product state
  const [productList, setProductList] = useState<ProductDef[]>(() => {
    if (typeof window === 'undefined') return defaultProducts;
    return safeJsonParse<ProductDef[]>(localStorage.getItem(PRODUCT_STORAGE_KEY), defaultProducts);
  });

  // New product add state
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCat, setNewCat] = useState<ProductCategory>('foundation');
  const [newDesc, setNewDesc] = useState('');
  const [newBadge, setNewBadge] = useState('NEW');
  const [newImg, setNewImg] = useState('/assets/products/p_starter_profile.svg');
  const [newStatus, setNewStatus] = useState<'live' | 'out_of_stock' | 'turned_off'>('live');

  // Schedule / task state
  const todayStr = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskPriority, setTaskPriority] = useState<'High' | 'Medium' | 'Low'>('High');
  const [taskCategory, setTaskCategory] = useState<'Strategy' | 'Operations' | 'Sales' | 'Meeting'>('Strategy');
  const [tasks, setTasks] = useState<CeoTask[]>(() => {
    if (typeof window === 'undefined') return [];
    return safeJsonParse<CeoTask[]>(localStorage.getItem(TASKS_STORAGE_KEY), []);
  });

  // Pipeline state
  const [pipelineItems, setPipelineItems] = useState<PipelineItem[]>(() => {
    if (typeof window === 'undefined') return [];
    return safeJsonParse<PipelineItem[]>(localStorage.getItem(PIPELINE_STORAGE_KEY), []);
  });

  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editBadge, setEditBadge] = useState('');
  const [editImg, setEditImg] = useState('');
  const [editStatus, setEditStatus] = useState<'live' | 'out_of_stock' | 'turned_off'>('live');

  const startEditProduct = (p: ProductDef) => {
    setEditingProductId(p.id);
    setEditTitle(p.title);
    setEditPrice(p.price);
    setEditDesc(p.desc || '');
    setEditBadge(p.badge || '');
    setEditImg(p.img || '/assets/products/p_starter_profile.svg');
    setEditStatus(p.status || 'live');
  };

  const cancelEditProduct = () => {
    setEditingProductId(null);
  };

  const handleSaveProductEdit = (id: string) => {
    const updated = productList.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          title: editTitle.trim() || p.title,
          price: editPrice.startsWith('৳') ? editPrice.trim() : `৳${editPrice.trim()}`,
          desc: editDesc.trim(),
          badge: editBadge.trim(),
          img: editImg.trim() || p.img,
          status: editStatus,
        };
      }
      return p;
    });
    setProductList(updated);
    setEditingProductId(null);
  };

  const toggleProductOnOff = (id: string) => {
    const updated = productList.map((p) => {
      if (p.id === id) {
        const nextStatus = p.status === 'turned_off' ? 'live' : 'turned_off';
        return { ...p, status: nextStatus as 'live' | 'turned_off' };
      }
      return p;
    });
    setProductList(updated);
  };

  // Leads state
  const [leads, setLeads] = useState<Lead[]>([
    { id: 'lead-1', name: 'রহিম সাহেব', phone: '01712345678', type: 'F-Commerce', solution: 'Conversion Website + CRM', status: 'In Progress', amount: '৳14,999', createdAt: Date.now() - 86400000 * 2 },
    { id: 'lead-2', name: 'করিম ভাই', phone: '01812345678', type: 'SME', solution: 'Corporate Profile', status: 'Delivered', amount: '৳4,999', createdAt: Date.now() - 86400000 * 5 },
    { id: 'lead-3', name: 'Farida Begum', phone: '01912345678', type: 'Startup', solution: 'Founder OS + Make.com', status: 'New', amount: '৳24,999', createdAt: Date.now() - 3600000 },
  ]);
  const [filter, setFilter] = useState<'all' | 'In Progress' | 'Delivered'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Clock effect
  useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Secure check: verify httpOnly cookie on the server — localStorage alone is NOT trusted
    fetch('/api/auth')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true);
        }
      })
      .finally(() => setIsVerifying(false));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PIPELINE_STORAGE_KEY, JSON.stringify(pipelineItems));
    }
  }, [pipelineItems]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(productList));
    }
  }, [productList]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        const data = await res.json();
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch {
      setLoginError('Network error connecting to auth server.');
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1733] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-[#43A7E8] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-[#94A3B8]">Verifying Secure Session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#071127] text-white flex flex-col justify-center items-center px-4">
        <div className="max-w-md w-full bg-[#0B1733] border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#43A7E8]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center mb-8">
            <Link href="/" className="inline-block text-[#43A7E8] font-black text-sm uppercase tracking-widest mb-2 hover:underline">
              ← Back to Nexus Lift
            </Link>
            <h1 className="text-2xl font-black tracking-tight text-white mt-1">
              Nexus Lift CEO Command Center
            </h1>
            <p className="text-xs text-[#94A3B8] mt-2">
              Executive HQ, Secret Layer Bible & Real-time Operations Console
            </p>
          </div>

          {loginError && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs text-center font-bold">
              ⚠️ {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">
                Executive Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihttushar134@gmail.com"
                required
                className="w-full bg-[#071127] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#43A7E8] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">
                Security Passcode
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full bg-[#071127] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#43A7E8] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#1971A5] to-[#43A7E8] hover:from-[#125883] hover:to-[#1971A5] text-white font-black text-sm rounded-xl shadow-lg transition duration-200 mt-2"
            >
              🔓 Unlock CEO Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <span className="text-[11px] text-[#64748B]">
              🔒 256-bit Encrypted Session · Strictly Confidential
            </span>
          </div>
        </div>
      </div>
    );
  }

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const newTask: CeoTask = {
      id: `task-${Date.now()}`,
      dateStr: selectedDate,
      title: taskTitle.trim(),
      time: taskTime,
      priority: taskPriority,
      done: false,
      category: taskCategory,
    };

    setTasks([newTask, ...tasks]);
    setTaskTitle('');
  };

  const toggleTaskDone = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleDownloadBible = () => {
    const blob = new Blob([DEFAULT_CEO_BIBLE_TEXT], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `NexusLift_Secret_Bible_${new Date().toISOString().slice(0, 10)}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintBible = () => {
    window.print();
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice.trim()) return;

    const price = newPrice.startsWith('৳') ? newPrice : `৳${newPrice}`;
    const newProd: ProductDef = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      price,
      badge: newBadge || 'NEW',
      cat: newCat,
      desc: newDesc || 'কাস্টম পণ্য বিবরণ।',
      img: newImg || '/assets/products/p_starter_profile.svg',
      status: newStatus,
      features: ['সম্পূর্ণ এডিটেবল ফাইল', 'ক্লাউড ড্রাইভ ভল্ট অ্যাক্সেস'],
    };

    setProductList([newProd, ...productList]);
    setNewTitle('');
    setNewPrice('');
    setNewDesc('');
    setNewBadge('NEW');
    setNewCat('foundation');
    setNewImg('/assets/products/p_starter_profile.svg');
    setNewStatus('live');

    alert('প্রোডাক্ট সফলভাবে যুক্ত হয়েছে!');
  };

  const handleMakeSync = async () => {
    try {
      const res = await fetch('/api/products/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: productList, eventType: 'catalog_sync_manual' }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Make.com Sync Successful!');
      } else {
        alert('Make.com Sync Error: ' + (data.error || 'Unknown error'));
      }
    } catch (e: any) {
      alert('Network error syncing to Make.com: ' + e?.message);
    }
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
    setProductList(productList.filter((p) => p.id !== id));
  };

  function addProductToPipeline(args: { product: ProductDef; clientName?: string; clientPhone?: string; status?: PipelineStatus }) {
    const createdAt = now();
    const next = pickNextOffer({ currentProduct: args.product, productCatalog: productList });
    const followUpAt = recommendFollowUpAt(createdAt, args.product.cat);

    const item: PipelineItem = {
      id: `pipe-${createdAt}-${Math.random().toString(16).slice(2)}`,
      productId: args.product.id,
      productTitle: args.product.title,
      productCat: args.product.cat,
      clientName: args.clientName,
      clientPhone: args.clientPhone,
      createdAt,
      updatedAt: createdAt,
      status: args.status ?? 'New',
      followUpAt,
      nextOfferProductId: next.product?.id,
      nextOfferProductTitle: next.product?.title,
      nextOfferConfidence: next.confidence,
    };

    setPipelineItems((prev) => [item, ...prev]);

    if (args.clientName || args.clientPhone) {
      setLeads((prev) =>
        prev.map((l) => {
          const same = (args.clientName && l.name === args.clientName) || (args.clientPhone && l.phone === args.clientPhone);
          if (!same) return l;
          return { ...l, status: 'In Progress' };
        })
      );
    }

    setActiveTab('pipeline');
  }

  const recommendedNextOfferForPipeline = useMemo(() => {
    const latest = pipelineItems[0];
    if (!latest) return null;
    const next = pipelineItems.find((p) => p.id === latest.id)?.nextOfferProductId;
    if (!next) return null;
    const prod = productList.find((p) => p.id === next);
    if (!prod) return null;
    return prod;
  }, [pipelineItems, productList]);

  const latestPipeline = pipelineItems[0];

  const handleExportCSV = () => {
    const headers = ['Lead ID,Name,Phone,Business Type,Solution,Status,Amount,Date'];
    const rows = filteredLeads.map((l) =>
      `"${l.id}","${l.name}","${l.phone}","${l.type}","${l.solution}","${l.status}","${l.amount}","${new Date(l.createdAt).toLocaleDateString()}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,﻿' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NexusLift_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesFilter = filter === 'all' || l.status === filter;
    const matchesSearch =
      searchQuery === '' ||
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone.includes(searchQuery) ||
      l.solution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Task Statistics & Pie Chart Calculation
  const selectedDateTasks = useMemo(() => {
    return tasks.filter((t) => t.dateStr === selectedDate);
  }, [tasks, selectedDate]);

  const totalTasksCount = tasks.length;
  const doneTasksCount = tasks.filter((t) => t.done).length;
  const undoneTasksCount = totalTasksCount - doneTasksCount;
  const donePercentage = totalTasksCount > 0 ? Math.round((doneTasksCount / totalTasksCount) * 100) : 0;

  const pieChartData = [
    { name: 'Completed', value: doneTasksCount, color: '#10B981' },
    { name: 'Pending / In Progress', value: undoneTasksCount, color: '#F59E0B' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Top Bar */}
      <header className="bg-[#0B1733] text-white border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-black text-lg tracking-wider text-[#43A7E8] hover:text-white transition">
            ← NEXUS LIFT
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-xs font-bold text-gray-300">Executive HQ & Secret Vault</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <div className="hidden lg:flex flex-col items-end mr-2">
            <span className="text-xs font-bold text-gray-300">
              {currentTime ? new Intl.DateTimeFormat('bn-BD', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(currentTime) : ''}
            </span>
            <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
              ● Live Sync
            </span>
          </div>

          <div className="flex flex-wrap bg-white/10 p-1 rounded-xl text-xs gap-1">
            <button
              onClick={() => setActiveTab('ceo-command')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'ceo-command' ? 'bg-[#1971A5] text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              📊 Overview
            </button>
            <button
              onClick={() => setActiveTab('ceo-schedule')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'ceo-schedule' ? 'bg-[#1971A5] text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              📅 Tasks & Schedule
            </button>
            <button
              onClick={() => setActiveTab('ceo-book')}
              className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                activeTab === 'ceo-book' ? 'bg-[#10B981] text-white shadow' : 'text-emerald-300 hover:text-white'
              }`}
            >
              📖 CEO BOOK
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'pipeline' ? 'bg-[#1971A5] text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Order Pipeline
            </button>
            <button
              onClick={() => setActiveTab('ceo-products')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                activeTab === 'ceo-products' ? 'bg-[#1971A5] text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              ⚙️ Products
            </button>
          </div>

          <button
            onClick={async () => {
              await fetch('/api/auth', { method: 'DELETE' });
              setIsAuthenticated(false);
            }}
            className="px-3 py-1.5 bg-red-500/20 text-red-300 hover:bg-red-500/30 text-xs font-bold rounded-lg border border-red-500/30 transition"
          >
            🔒 Logout
          </button>
        </div>
      </header>

      {/* Main Command Content */}
      <div className="flex-1 max-w-[1280px] w-full mx-auto p-6 md:p-8 space-y-8">

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'ceo-command' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[#0B1733] to-[#152e5c] p-6 rounded-2xl text-white shadow-lg border border-white/10">
                <div className="text-[10px] font-black tracking-widest text-[#43A7E8] uppercase mb-1">Total Revenue (MTD)</div>
                <div className="text-3xl font-black mb-1">৳৪,৮৫,০০০</div>
                <div className="text-xs text-[#aebfd5] font-bold">↑ 22% vs Last Month</div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs">
                  <span className="text-[#aebfd5]">Net Margin: 68%</span>
                  <span className="text-emerald-400 font-bold">TARGET HIT</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0]">
                <div className="text-[10px] font-black tracking-widest text-[#64748B] uppercase mb-1">Tasks Completed</div>
                <div className="text-3xl font-black text-[#0B1733] mb-1">{donePercentage}%</div>
                <div className="text-xs text-emerald-600 font-bold">{doneTasksCount} of {totalTasksCount} Action Items Done</div>
                <div className="mt-4 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${donePercentage}%` }} />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0]">
                <div className="text-[10px] font-black tracking-widest text-[#64748B] uppercase mb-1">Avg. Delivery SLA</div>
                <div className="text-3xl font-black text-[#0B1733] mb-1">36H</div>
                <div className="text-xs text-emerald-600 font-bold">On-track (Target: 48-72h)</div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs font-bold text-gray-500">Active WIP: {pipelineItems.length || 14}</span>
                  <span className="text-xs font-bold text-gray-500">Overdue: 0</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0] relative overflow-hidden">
                <div className="text-[10px] font-black tracking-widest text-[#64748B] uppercase mb-1">Secret Vault & Bible</div>
                <div className="text-xl font-black text-[#0B1733] mb-1">Vault 100% Synced</div>
                <div className="text-xs font-bold text-emerald-600 mb-3">CEO Access Only (Private)</div>
                <button
                  onClick={() => setActiveTab('ceo-book')}
                  className="w-full py-1.5 px-3 bg-[#EAF6FF] text-[#1971A5] text-xs font-black rounded-lg hover:bg-[#1971A5] hover:text-white transition text-center"
                >
                  📖 Open Secret Bible & Competitors →
                </button>
              </div>
            </div>

            {/* Visual Growth & Revenue Trajectory Chart */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-lg font-black text-[#0B1733]">Monthly Revenue Trajectory (BDT)</h2>
                  <p className="text-xs text-[#64748B]">Real-time growth across Foundation, Sales & Management OS Suites</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-[#1971A5]">
                    <span className="w-3 h-3 rounded-full bg-[#1971A5] inline-block" /> Revenue
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> Target
                  </span>
                </div>
              </div>
              <div className="h-[260px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { month: 'মে', revenue: 185000, target: 150000 },
                      { month: 'জুন', revenue: 240000, target: 200000 },
                      { month: 'জুলাই', revenue: 310000, target: 280000 },
                      { month: 'আগস্ট', revenue: 395000, target: 350000 },
                      { month: 'সেপ্টেম্বর', revenue: 485000, target: 450000 },
                    ]}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1971A5" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#1971A5" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} tickFormatter={(v) => `৳${v/1000}k`} />
                    <Tooltip
                      formatter={(val: any) => [`৳${Number(val).toLocaleString()}`, '']}
                      contentStyle={{ backgroundColor: '#0B1733', color: '#fff', borderRadius: '12px', border: 'none', fontSize: '12px' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#1971A5" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    <Area type="monotone" dataKey="target" stroke="#10B981" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorTarget)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Link to Schedule */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-[#0B1733] text-base">📅 Today&apos;s High-Priority Action Items</h3>
                <p className="text-xs text-[#64748B] mt-0.5">You have {selectedDateTasks.filter(t => !t.done).length} pending tasks scheduled for today.</p>
              </div>
              <button
                onClick={() => setActiveTab('ceo-schedule')}
                className="px-5 py-2.5 bg-[#0B1733] text-white text-xs font-black rounded-xl hover:bg-[#1971A5] transition"
              >
                Open Daywise Calendar & Tasks →
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: CEO CALENDAR & TASK MANAGER */}
        {activeTab === 'ceo-schedule' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div>
                <h2 className="text-xl font-black text-[#0B1733] flex items-center gap-2">
                  <span>📅</span> CEO Daywise Executive Scheduler & Action Hub
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  সিইও হিসেবে প্রতিদিনের প্রায়োরিটি টাস্ক, স্ট্র্যাটেজিক মিটিং এবং ডেলিগেশন ট্র্যাকার।
                </p>
              </div>

              {/* Date Selector */}
              <div className="flex items-center gap-3 bg-[#F8FAFC] p-2 rounded-xl border border-[#E2E8F0]">
                <span className="text-xs font-bold text-[#64748B]">Select Date:</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-white text-xs font-black text-[#0B1733] px-3 py-1.5 border rounded-lg focus:outline-none focus:border-[#1971A5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left 2 Cols: Task Management */}
              <div className="lg:col-span-2 space-y-6">
                {/* Add Task Card */}
                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                  <h3 className="text-sm font-black text-[#0B1733] uppercase tracking-wide mb-4">+ Add Executive Task for {selectedDate}</h3>
                  <form onSubmit={handleAddTask} className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className="md:col-span-2">
                      <input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        placeholder="Task title (e.g., Finalize Make.com sync with WhatsApp)..."
                        className="w-full text-xs p-3 border rounded-xl focus:outline-none focus:border-[#1971A5]"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={taskTime}
                        onChange={(e) => setTaskTime(e.target.value)}
                        placeholder="Time (e.g. 11:30 AM)"
                        className="w-full text-xs p-3 border rounded-xl focus:outline-none focus:border-[#1971A5]"
                      />
                    </div>
                    <div>
                      <select
                        value={taskPriority}
                        onChange={(e) => setTaskPriority(e.target.value as any)}
                        className="w-full text-xs p-3 border rounded-xl bg-white focus:outline-none"
                      >
                        <option value="High">🔴 High Priority</option>
                        <option value="Medium">🟡 Medium Priority</option>
                        <option value="Low">🟢 Low Priority</option>
                      </select>
                    </div>
                    <div className="md:col-span-4 flex justify-between items-center pt-2">
                      <div className="flex gap-2">
                        {(['Strategy', 'Operations', 'Sales', 'Meeting'] as const).map((cat) => (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => setTaskCategory(cat)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                              taskCategory === cat ? 'bg-[#0B1733] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-[#1971A5] text-white text-xs font-black rounded-xl hover:bg-[#0B1733] transition shadow"
                      >
                        + Add to Schedule
                      </button>
                    </div>
                  </form>
                </div>

                {/* Day's Tasks List */}
                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-[#0B1733]">
                      Tasks for {selectedDate} ({selectedDateTasks.length} Items)
                    </h3>
                    <span className="text-xs text-emerald-600 font-bold">
                      {selectedDateTasks.filter(t => t.done).length} / {selectedDateTasks.length} Completed
                    </span>
                  </div>

                  <div className="space-y-3">
                    {selectedDateTasks.map((t) => (
                      <div
                        key={t.id}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition ${
                          t.done ? 'bg-emerald-50/50 border-emerald-200' : 'bg-[#F8FAFC] border-[#E2E8F0]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={t.done}
                            onChange={() => toggleTaskDone(t.id)}
                            className="w-4 h-4 text-emerald-600 rounded cursor-pointer accent-[#10B981]"
                          />
                          <div>
                            <div className={`text-xs font-bold ${t.done ? 'line-through text-gray-400' : 'text-[#0B1733]'}`}>
                              {t.title}
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
                              <span>⏰ {t.time || 'All Day'}</span>
                              <span>•</span>
                              <span className="px-1.5 py-0.5 rounded bg-gray-200 text-gray-700 font-bold">{t.category}</span>
                              <span>•</span>
                              <span className={`font-bold ${t.priority === 'High' ? 'text-red-600' : t.priority === 'Medium' ? 'text-amber-600' : 'text-emerald-600'}`}>
                                {t.priority}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleTaskDone(t.id)}
                            className={`px-2.5 py-1 rounded text-xs font-black transition ${
                              t.done ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-700 hover:bg-emerald-100 hover:text-emerald-800'
                            }`}
                          >
                            {t.done ? '✓ Done' : 'Mark Done'}
                          </button>
                          <button
                            onClick={() => deleteTask(t.id)}
                            className="text-gray-400 hover:text-red-600 text-sm font-bold px-1.5"
                            title="Delete Task"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}

                    {selectedDateTasks.length === 0 && (
                      <div className="text-center py-10 text-xs text-gray-400">
                        No tasks scheduled for {selectedDate}. Use the form above to add your priority tasks!
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Col: Pie Chart & Productivity Metrics */}
              <div className="space-y-6">
                {/* Pie Chart Card */}
                <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                  <h3 className="font-black text-sm text-[#0B1733] uppercase tracking-wide mb-1">
                    📊 Task Completion Ratio
                  </h3>
                  <p className="text-xs text-[#64748B] mb-4">Overall Executive Productivity</p>

                  <div className="h-[220px] w-full flex items-center justify-center">
                    {totalTasksCount > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: any) => [`${value} Tasks`, '']} />
                          <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="text-xs text-gray-400">No task data yet.</div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-center">
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
                      <div className="text-[10px] font-bold text-emerald-700 uppercase">Completed</div>
                      <div className="text-xl font-black text-emerald-800">{doneTasksCount}</div>
                    </div>
                    <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-100">
                      <div className="text-[10px] font-bold text-amber-700 uppercase">Pending</div>
                      <div className="text-xl font-black text-amber-800">{undoneTasksCount}</div>
                    </div>
                  </div>
                </div>

                {/* CEO Habit & Execution Rule */}
                <div className="bg-gradient-to-br from-[#0B1733] to-[#152e5c] p-6 rounded-2xl text-white shadow-lg border border-white/10">
                  <div className="text-[10px] font-black tracking-widest text-[#43A7E8] uppercase mb-1">Executive Rule #1</div>
                  <div className="text-base font-bold text-white mb-2">Focus on The Vision & Next Layers</div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    &ldquo;If a task can be done via an SOP or a Make.com automated webhook, delegate it immediately. Your time is reserved for 10x strategic decisions.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CEO SECRET BIBLE & COMPETITOR ANALYSIS (PRIVATE) */}
        {activeTab === 'ceo-book' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#0B1733] via-[#0F224A] to-[#1971A5] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black tracking-widest uppercase border border-emerald-500/30 mb-2">
                  🔒 Strictly Confidential • CEO Eyes Only
                </div>
                <h1 className="text-2xl font-black tracking-tight text-white">
                  Nexus Lift Secret Layer Bible & Competitor Matrix
                </h1>
                <p className="text-xs text-white/70 mt-1 max-w-2xl">
                  আপনার সম্পূর্ণ বিজনেস ব্লুপ্রিন্ট, ৪টি লেয়ারের মেথডোলজি, এবং বাংলাদেশ, ভারত ও গ্লোবাল শীর্ষ প্রতিযোগীদের চুলচেরা বিশ্লেষণ।
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={handleDownloadBible}
                  className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  📥 Download Markdown (.md)
                </button>
                <button
                  onClick={handlePrintBible}
                  className="px-4 py-2.5 bg-white text-[#0B1733] hover:bg-gray-100 font-black text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  🖨️ Print to PDF
                </button>
              </div>
            </div>

            {/* Rendered Document Viewer */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 md:p-10 prose prose-slate max-w-none">
              <div className="border-b pb-6 mb-6 flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-[#1971A5] uppercase tracking-wider">Document Code: NL-BIBLE-2026</span>
                  <h2 className="text-xl font-black text-[#0B1733] mt-1">Master Architecture & Strategy Report</h2>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full">
                  Status: Active & Protected
                </span>
              </div>

              <div className="space-y-8 text-sm text-[#334155] leading-relaxed">
                {/* Section 1 */}
                <div className="p-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <h3 className="text-base font-extrabold text-[#0B1733] mb-2">1️⃣ The Plan Layer (Foundation & Core Identity)</h3>
                  <p><strong>Mission:</strong> To eliminate operational bottlenecks for Bangladeshi SMEs through exact, automated digital infrastructure.</p>
                  <p><strong>Color Palette Strategy:</strong> Navy Deep (#071127) for Authority, Ice Blue (#EAF6FF) for Clarity, and Emerald (#10B981) for High Conversion.</p>
                </div>

                {/* Section 2 */}
                <div className="p-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <h3 className="text-base font-extrabold text-[#0B1733] mb-2">2️⃣ The Repair Layer (Operations & SOPs)</h3>
                  <p><strong>Organogram:</strong> CEO (Architecture) → Operations Manager (SOP Enforcement) → Dev & Automation Teams → Sales Closers.</p>
                  <p><strong>Product Central Repository:</strong> All product titles, pricing, and live status are stored in <code>src/data/products.ts</code> and syncable via Make.com Webhook.</p>
                </div>

                {/* Section 3 & 4 */}
                <div className="p-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <h3 className="text-base font-extrabold text-[#0B1733] mb-2">3️⃣ & 4️⃣ The Next & Vision Layers (Scaling Horizon)</h3>
                  <p><strong>Year 1:</strong> Niche dominance in SME automation in Bangladesh.</p>
                  <p><strong>Year 3:</strong> Full Client Portal launching with automatic Courier & WhatsApp integrations.</p>
                  <p><strong>Year 5:</strong> Transition to pure digital infrastructure partner powering 10,000+ businesses.</p>
                </div>

                {/* Competitors Analysis */}
                <div className="p-5 bg-gradient-to-br from-[#0B1733] to-[#152e5c] text-white rounded-xl shadow">
                  <h3 className="text-base font-extrabold text-[#43A7E8] mb-3">🏁 Strategic Competitor Analysis Report</h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <h4 className="font-black text-white text-sm">🇧🇩 Top 10 Bangladesh Competitors:</h4>
                      <p className="text-white/80 mt-1">TechCloud, Softify BD, Webable, Brainstation-23, Bit Mascot, Adplay, Dcastalia, Magnito Digital, CodersTrust, AamarPay.</p>
                      <p className="text-emerald-400 mt-1"><strong>Nexus Edge:</strong> Unlike generic software agencies, we build modular, turnkey operational infrastructure delivered in 48-72 hours.</p>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <h4 className="font-black text-white text-sm">🇮🇳 Top 3 Indian Benchmarks:</h4>
                      <p className="text-white/80 mt-1">Instamojo (Storefront + Payment), Zoho One (Operating System), Graphy (Knowledge Infrastructure).</p>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <h4 className="font-black text-white text-sm">🌐 Top 3 Global Blueprints:</h4>
                      <p className="text-white/80 mt-1">Shopify (E-Commerce Standard), Carrd.co (One-page Conversion), Zapier (Automation Simplicity).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ORDER PIPELINE */}
        {activeTab === 'pipeline' && (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#E2E8F0] flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h2 className="text-lg font-black text-[#0B1733]">Live Order Pipeline & Vault Hand-offs</h2>
                <p className="text-xs text-[#64748B] mt-0.5">রিয়েল-টাইম ক্লায়েন্ট অর্ডার স্ট্যাটাস এবং ড্রাইভ ডেলিভারি মনিটর</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="🔍 Search name, phone, solution..."
                    className="text-xs px-3 py-1.5 border rounded-lg w-48 sm:w-64 bg-white focus:outline-none focus:border-[#1971A5]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1.5 text-xs text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex gap-1.5">
                  {(['all', 'In Progress', 'Delivered'] as const).map((btn) => (
                    <button
                      key={btn}
                      onClick={() => setFilter(btn)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition ${
                        filter === btn ? 'bg-[#0B1733] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {btn === 'all' ? 'All Leads' : btn}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleExportCSV}
                  className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-black flex items-center gap-1 hover:bg-emerald-700 transition shadow-sm"
                  title="Download CSV report"
                >
                  📥 Export CSV
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr]">
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
                    {filteredLeads.map((lead) => (
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
                        <td className="px-6 py-4 text-xs text-gray-500">{formatBangladeshDateTime(lead.createdAt)}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                            <a
                              href="https://wa.me/8801814716713"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block px-3 py-1.5 bg-[#EAF6FF] text-[#125883] rounded-lg text-xs font-extrabold hover:bg-[#1971A5] hover:text-white transition"
                            >
                              WhatsApp Vault
                            </a>

                            <button
                              className="inline-block px-3 py-1.5 bg-[#0B1733] text-white rounded-lg text-xs font-extrabold hover:bg-[#1971A5] transition"
                              onClick={() => {
                                const starter = productList.find((p) => p.cat === 'foundation') ?? productList[0];
                                addProductToPipeline({
                                  product: starter,
                                  clientName: lead.name,
                                  clientPhone: lead.phone,
                                  status: 'New',
                                });
                              }}
                              title="Add starter offer to pipeline"
                            >
                              + Pipeline
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {filteredLeads.length === 0 && (
                      <tr>
                        <td className="px-6 py-10 text-center text-xs text-[#64748B]" colSpan={6}>
                          No leads match this filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Follow-up + recommended next offer */}
              <aside className="border-l border-[#E2E8F0] p-6 bg-[#F8FAFC]">
                <h3 className="font-black text-[#0B1733] mb-1">Follow-up Scheduler</h3>
                <p className="text-xs text-[#64748B] mb-5">Pipeline items auto-generate due dates & the next best offer.</p>

                {pipelineItems.length === 0 ? (
                  <div className="text-xs text-[#64748B] bg-white border border-[#E2E8F0] rounded-2xl p-4">
                    Add a product to pipeline to see recommended offers here.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {pipelineItems.slice(0, 5).map((item) => {
                      const nextProd = item.nextOfferProductId
                        ? productList.find((p) => p.id === item.nextOfferProductId)
                        : undefined;

                      return (
                        <div key={item.id} className="bg-white border border-[#E2E8F0] rounded-2xl p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-[10px] font-black uppercase tracking-widest text-[#64748B]">Pipeline</div>
                              <div className="text-sm font-black text-[#0B1733] mt-1">{item.productTitle}</div>
                              <div className="text-xs text-[#64748B] mt-1">Client: {item.clientName ?? '—'}</div>
                            </div>
                            <span className="bg-[#EAF6FF] text-[#125883] text-[10px] font-black px-2 py-1 rounded-full">{item.status}</span>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-2">
                            <div className="text-xs text-[#64748B]">
                              Follow-up due: <span className="font-extrabold text-[#0B1733]">{formatBangladeshDateTime(item.followUpAt)}</span>
                            </div>
                            <div className="text-xs text-[#64748B]">
                              Next offer: <span className="font-extrabold text-[#1971A5]">{nextProd?.title ?? '—'}</span>
                            </div>
                          </div>

                          <div className="mt-4 flex gap-2 flex-wrap">
                            <a
                              href={`https://wa.me/8801814716713?text=${encodeURIComponent(
                                `সালাম ${item.clientName || 'স্যার'}, আপনার "${item.productTitle}" এর পরবর্তী স্টেপ হিসেবে আমাদের "${nextProd?.title || 'স্পেশাল আপগ্রেড'}" ফ্রেমওয়ার্কটি রেডি করা হয়েছে। আপনি কি বিস্তারিত দেখতে চান?`
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-2 bg-[#25D366] text-white text-[11px] font-extrabold rounded-xl hover:bg-green-600 transition flex items-center gap-1 shadow-sm"
                            >
                              💬 WhatsApp Offer
                            </a>
                            <button
                              className="px-3 py-2 bg-[#0B1733] text-white text-[11px] font-extrabold rounded-xl hover:bg-[#1971A5] transition"
                              onClick={() => {
                                if (!nextProd) {
                                  alert('No next offer found in catalog.');
                                  return;
                                }
                                addProductToPipeline({
                                  product: nextProd,
                                  clientName: item.clientName,
                                  clientPhone: item.clientPhone,
                                  status: 'Offer Sent',
                                });
                              }}
                              disabled={!nextProd}
                            >
                              Apply Next Offer
                            </button>
                            <button
                              className="px-3 py-2 bg-white border border-[#E2E8F0] text-[#0B1733] text-[11px] font-extrabold rounded-xl hover:bg-[#F1F5F9] transition"
                              onClick={() => {
                                setPipelineItems((prev) =>
                                  prev.map((p) =>
                                    p.id === item.id
                                      ? { ...p, status: 'Follow-up Scheduled', updatedAt: now() }
                                      : p
                                  )
                                );
                              }}
                            >
                              Mark Follow-up
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </aside>
            </div>
          </div>
        )}

        {/* TAB 5: PRODUCT MANAGER */}
        {activeTab === 'ceo-products' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h2 className="text-lg font-black text-[#0B1733] mb-1">👑 Product Management Console</h2>
              <p className="text-xs text-[#64748B] mb-6">নতুন পণ্য, মূল্য, বিবরণ যুক্ত করুন এবং হোমপেজের প্রোডাক্টের অগ্রাধিকার/পজিশন সাজান।</p>

              <form onSubmit={handleAddProduct} className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">Product Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
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
                    onChange={(e) => setNewPrice(e.target.value)}
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
                    onChange={(e) => setNewBadge(e.target.value)}
                    placeholder="e.g. 🔥 HOT HIT"
                    className="w-full text-xs p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">Category</label>
                  <select
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value as ProductCategory)}
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
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="পণ্য সম্পর্কে ১-২ লাইনের বিবরণ"
                    className="w-full text-xs p-2.5 border rounded-xl"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#334155] mb-1">Image URL</label>
                  <input
                    type="text"
                    value={newImg}
                    onChange={(e) => setNewImg(e.target.value)}
                    placeholder="/assets/products/... (Relative URL)"
                    className="w-full text-xs p-2.5 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">Default Status</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as any)}
                    className="w-full text-xs p-2.5 border rounded-xl bg-white"
                  >
                    <option value="live">🟢 Live</option>
                    <option value="out_of_stock">🟡 Out of Stock</option>
                    <option value="turned_off">🔴 Turned Off</option>
                  </select>
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

            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-extrabold text-base text-[#0B1733]">Live Product Ordering & Positions ({productList.length} Items)</h3>
                  <span className="text-xs text-[#64748B]">Use arrows (↑ ↓) to rearrange order. Toggle status below.</span>
                </div>
                <button
                  onClick={handleMakeSync}
                  className="px-4 py-2 bg-[#25D366] text-white text-xs font-black flex items-center gap-2 rounded-lg hover:bg-green-600 transition shadow"
                  title="Push catalog and statuses to Make.com Webhook"
                >
                  🚀 Sync with Make.com
                </button>
              </div>

              <div className="space-y-4">
                {productList.map((p, index) => {
                  const isEditing = editingProductId === p.id;

                  return (
                    <div
                      key={p.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        p.status === 'turned_off'
                          ? 'bg-gray-100/80 border-gray-300 opacity-75'
                          : p.status === 'out_of_stock'
                          ? 'bg-amber-50/50 border-amber-200'
                          : 'bg-[#F8FAFC] border-[#E2E8F0]'
                      }`}
                    >
                      {isEditing ? (
                        /* Inline Edit Form */
                        <div className="space-y-4 bg-white p-4 rounded-xl border border-[#43A7E8]/40 shadow-sm">
                          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                            <span className="text-xs font-black text-[#1971A5] uppercase">
                              ✏️ Editing Product: {p.title}
                            </span>
                            <span className="text-[10px] text-gray-500 font-mono">ID: {p.id}</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="md:col-span-2">
                              <label className="block text-[11px] font-bold text-gray-600 mb-1">Product Title</label>
                              <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="w-full text-xs p-2 border rounded-lg focus:outline-none focus:border-[#1971A5]"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-gray-600 mb-1">Price (৳)</label>
                              <input
                                type="text"
                                value={editPrice}
                                onChange={(e) => setEditPrice(e.target.value)}
                                className="w-full text-xs p-2 border rounded-lg focus:outline-none focus:border-[#1971A5]"
                              />
                            </div>

                            <div className="md:col-span-3">
                              <label className="block text-[11px] font-bold text-gray-600 mb-1">Description (বাংলা/ইংরেজি)</label>
                              <textarea
                                value={editDesc}
                                onChange={(e) => setEditDesc(e.target.value)}
                                rows={2}
                                className="w-full text-xs p-2 border rounded-lg focus:outline-none focus:border-[#1971A5]"
                              />
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-gray-600 mb-1">Badge Tag</label>
                              <input
                                type="text"
                                value={editBadge}
                                onChange={(e) => setEditBadge(e.target.value)}
                                className="w-full text-xs p-2 border rounded-lg focus:outline-none focus:border-[#1971A5]"
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label className="block text-[11px] font-bold text-gray-600 mb-1">Image URL / Path</label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={editImg}
                                  onChange={(e) => setEditImg(e.target.value)}
                                  placeholder="/assets/products/... or https://..."
                                  className="w-full text-xs p-2 border rounded-lg focus:outline-none focus:border-[#1971A5]"
                                />
                                {editImg && (
                                  <img
                                    src={editImg}
                                    alt="Preview"
                                    className="w-8 h-8 rounded object-cover border shrink-0 bg-white"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                  />
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-gray-600 mb-1">Availability Status</label>
                              <select
                                value={editStatus}
                                onChange={(e) => setEditStatus(e.target.value as any)}
                                className="w-full text-xs p-2 border rounded-lg bg-white"
                              >
                                <option value="live">🟢 Live (Active)</option>
                                <option value="out_of_stock">🟡 Out of Stock</option>
                                <option value="turned_off">🔴 Turned Off (Hidden)</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                            <button
                              type="button"
                              onClick={cancelEditProduct}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-200 transition"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveProductEdit(p.id)}
                              className="px-4 py-1.5 bg-[#1971A5] text-white text-xs font-black rounded-lg hover:bg-[#0B1733] transition shadow"
                            >
                              💾 Save Changes
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Product Summary Row */
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start md:items-center gap-3.5">
                            <span className="w-7 h-7 rounded-lg bg-[#EAF6FF] text-[#1971A5] font-black text-xs flex items-center justify-center shrink-0">
                              {index + 1}
                            </span>

                            {/* Product Thumbnail */}
                            <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                              {p.img ? (
                                <img
                                  src={p.img}
                                  alt={p.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/assets/products/p_starter_profile.svg';
                                  }}
                                />
                              ) : (
                                <span className="text-xs font-black text-gray-400">📦</span>
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-extrabold text-sm text-[#0B1733]">{p.title}</span>
                                {p.badge && (
                                  <span className="text-[10px] font-black bg-[#EAF6FF] text-[#1971A5] px-2 py-0.5 rounded border border-[#BAE6FD]">
                                    {p.badge}
                                  </span>
                                )}
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    p.status === 'turned_off'
                                      ? 'bg-red-100 text-red-700 border border-red-200'
                                      : p.status === 'out_of_stock'
                                      ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                      : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                  }`}
                                >
                                  {p.status === 'turned_off' ? '🔴 OFF (Hidden)' : p.status === 'out_of_stock' ? '🟡 Out of Stock' : '🟢 Active'}
                                </span>
                              </div>

                              <div className="text-xs text-[#64748B] mt-1 flex items-center gap-3 flex-wrap">
                                <span className="font-black text-[#1971A5] text-sm">{p.price}</span>
                                <span>•</span>
                                <span className="capitalize text-gray-600 font-bold">Cat: {p.cat}</span>
                                {p.desc && (
                                  <>
                                    <span>•</span>
                                    <span className="text-gray-500 truncate max-w-xs md:max-w-md" title={p.desc}>
                                      {p.desc}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Quick Controls */}
                          <div className="flex items-center gap-2 flex-wrap justify-end">
                            {/* Fast Turn ON / OFF Switch */}
                            <button
                              onClick={() => toggleProductOnOff(p.id)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-black transition ${
                                p.status === 'turned_off'
                                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                  : 'bg-gray-200 text-gray-700 hover:bg-red-100 hover:text-red-700'
                              }`}
                              title="Turn product visibility On/Off"
                            >
                              {p.status === 'turned_off' ? '⚡ Turn ON' : '⏸️ Turn OFF'}
                            </button>

                            {/* Full Edit Modal / Form Trigger */}
                            <button
                              onClick={() => startEditProduct(p)}
                              className="px-3 py-1.5 bg-[#EAF6FF] text-[#1971A5] hover:bg-[#1971A5] hover:text-white rounded-lg text-xs font-black transition border border-[#BAE6FD]"
                            >
                              ✏️ Edit Details
                            </button>

                            {/* Move Up/Down Order */}
                            <button
                              onClick={() => movePosition(index, 'up')}
                              disabled={index === 0}
                              className="px-2.5 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-black disabled:opacity-30 hover:bg-gray-100 transition shadow-sm"
                              title="Move Up"
                            >
                              ↑
                            </button>
                            <button
                              onClick={() => movePosition(index, 'down')}
                              disabled={index === productList.length - 1}
                              className="px-2.5 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-xs font-black disabled:opacity-30 hover:bg-gray-100 transition shadow-sm"
                              title="Move Down"
                            >
                              ↓
                            </button>

                            {/* Remove Product */}
                            <button
                              onClick={() => {
                                if (confirm(`Are you sure you want to remove "${p.title}"?`)) {
                                  removeProduct(p.id);
                                }
                              }}
                              className="px-2.5 py-1.5 text-red-600 bg-red-50 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition"
                              title="Delete Product"
                            >
                              🗑️
                            </button>

                            {/* Add to Pipeline */}
                            <button
                              className="px-3 py-1.5 bg-[#0B1733] text-white rounded-lg text-xs font-black hover:bg-[#1971A5] transition shadow-sm"
                              onClick={() => addProductToPipeline({ product: p, status: 'New' })}
                              title="Add to CEO Pipeline"
                            >
                              + Pipeline
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
