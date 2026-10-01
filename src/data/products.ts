export type ProductCategory =
  | 'foundation'    // 🏗️ 1. Build Your Business (Brand, Identity, Presentation, Legal)
  | 'sales'         // 🚀 2. Get More Customers (Sales, Scripts, Pipeline, Recovery)
  | 'operations'    // ⚙️ 3. Fix Your Operations (SOP, Workflows, Delegation, F-Commerce)
  | 'finance'       // 💰 4. Control Your Numbers (Costing, Cash Flow, Profitability, Pricing)
  | 'team'          // 👥 5. Build Your Team (HR, Roles, Onboarding, KPIs, Meetings)
  | 'executive';    // 🤖 6. Scale With AI & OS (Executive OS, CEO Dashboard, AI Agents)

export type ProductStatus = 'live' | 'turned_off' | 'out_of_stock';

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductDef {
  id: string;
  title: string;
  cat: ProductCategory;
  badge: string;
  price: string;
  desc: string;
  img: string;
  features: string[];
  tagline?: string;
  popular?: boolean;
  status?: ProductStatus;
  painPoint?: string;
  faqs?: ProductFAQ[];
}

export const products: ProductDef[] = [
  // ════════════════════════════════════════════════════════════
  // 1. BUILD YOUR BUSINESS (Brand, Identity & Legal Readiness)
  // ════════════════════════════════════════════════════════════
  {
    id: "brand-guideline-system",
    title: "Brand Identity & Guideline System",
    tagline: "সাইন্টিফিক লোগো ও ব্র্যান্ড রুলবুক",
    cat: "foundation",
    badge: "🔥 BEST VALUE",
    price: "৳2,600",
    desc: "প্রিমিয়াম কনসেপ্ট লোগো এবং ২০+ পেজের সম্পূর্ণ ব্র্যান্ড বুক (কালার কোড, ফন্টস, মকআপ ও স্টোরিলাইন)। রেগুলার প্রাইস ৳৩,০০০।",
    painPoint: "আপনার ব্র্যান্ডের কোনো নির্দিষ্ট কালার কোড বা গাইডলাইন নেই? ক্যানভার সাধারণ লোগো দিয়ে ট্রাস্ট তৈরি হচ্ছে না?",
    faqs: [
      { q: "কেন এই সিস্টেমের মূল্য ৳২,৬০০?", a: "কারণ এটি শুধু একটি ছবি নয়। আমরা মার্কেট রিসার্চ, পেন্সিল ড্রাফট, কালার সাইকোলজি, ৪টি ব্যাকগ্রাউন্ড টেস্ট (White, Black, Red, Green) এবং ২০+ পেজের কমপ্লিট ডু/ডোন্টস গাইডলাইন তৈরি করি।" },
      { q: "আমি কি প্রিন্ট করার জন্য ভেক্টর ফাইল পাবো?", a: "অবশ্যই! বিলবোর্ড থেকে ভিজিটিং কার্ড—যেকোনো সাইজে ব্যবহার করার জন্য অরিজিনাল AI, EPS, PDF এবং SVG ভেক্টর ফাইল দেওয়া হয়।" }
    ],
    img: "/assets/products/p_corp_profile.svg", // Fallback image since brand specific doesn't exist yet, can be updated later
    features: [
      "🧠 ইন্ডাস্ট্রি রিসার্চ ও পেন্সিল স্কেচিং কনসেপ্ট",
      "🎭 সাইন্টিফিক কালার সাইকোলজি ও এক্সাক্ট হেক্স কোড",
      "⬛ 4-Background Fit Test (Black, White, Red, Green)",
      "📐 ভেক্টর রিভার্সিবিলিটি ও প্রিন্ট রেডি সোর্স ফাইল",
      "📖 কমপ্লিট ব্র্যান্ড গাইড রুলবুক (Do's & Don'ts)"
    ],
    status: "live",
    popular: true,
  },
  {
    id: "starter-profile",
    title: "Starter Business Profile",
    tagline: "নিজেকে প্রফেশনালভাবে উপস্থাপন করুন",
    cat: "foundation",
    badge: "STARTER",
    price: "৳999",
    desc: "নতুন উদ্যোক্তা ও ফ্রিল্যান্সারদের জন্য ৬–৮ পৃষ্ঠার ফাউন্ডেশন বিজনেস প্রোফাইল।",
    painPoint: "অগোছালো প্রেজেন্টেশনের কারণে বারবার ক্লায়েন্ট হারাচ্ছেন? প্রফেশনাল কোম্পানির মত নিজেকে উপস্থাপন করতে পারছেন না?",
    faqs: [
      { q: "এটি রেডি হতে কতদিন লাগবে?", a: "সর্বোচ্চ ৪৮ ঘণ্টার মধ্যে আমরা আপনাকে ড্রাইভ লিংক বুঝিয়ে দিবো।" },
      { q: "আমি কি পরে এটি এডিট করতে পারবো?", a: "হ্যাঁ, আমরা আপনাকে এডিটেবল সোর্স ফাইলও দিয়ে দিবো।" }
    ],
    img: "/assets/products/p_starter_profile.svg",
    features: [
      "৬–৮ পৃষ্ঠার প্রফেশনাল লেআউট ও স্ট্রাকচার",
      "Executive Summary & Mission Statement",
      "Core Services & Product Portfolio Section",
      "প্রিন্ট-রেডি PDF + এডিটেবল Word (.docx)",
      "৪৮ ঘণ্টার মধ্যে ক্লাউড ড্রাইভ ডেলিভারি",
    ],
  },
  {
    id: "growth-profile",
    title: "Growth Business Profile Suite",
    tagline: "SME ও এফ-কমার্সের জন্য পূর্ণ পরিচয়",
    cat: "foundation",
    badge: "🔥 HERO",
    price: "৳1,499",
    popular: true,
    desc: "রিসার্চ-ভিত্তিক ১২–১৫ পৃষ্ঠার পূর্ণাঙ্গ প্রেজেন্টেশন ও ক্লায়েন্ট ট্রাস্ট স্যুট।",
    painPoint: "আপনার বিজনেসের ভালো ভ্যালু থাকা সত্ত্বেও ট্রাস্টের অভাবে সেলস ড্রপ হচ্ছে? ক্লায়েন্ট বড় প্রোফাইল দেখতে চায়?",
    faqs: [
      { q: "বিজনেস প্রোফাইলে কি কি থাকে?", a: "আমাদের профиле-এ ফাউন্ডার স্টোরি, ভ্যালু প্রপোজিশন, ক্লায়েন্ট টেস্টিমোনিয়াল সহ ১২-১৫ পৃষ্ঠার রিসার্চ ডেটা থাকে।" },
      { q: "আমাদের কোম্পানি নতুন, এটি কি আমাদের জন্য কাজ করবে?", a: "অবশ্যই, নতুন কোম্পানির ট্রাস্ট বিল্ড করার জন্যই এটি সবচেয়ে বেশি প্রয়োজন।" }
    ],
    img: "/assets/products/p_growth_profile.svg",
    features: [
      "১২–১৫ পৃষ্ঠার রিসার্চ-ব্যাকড কর্পোরেট প্রোফাইল",
      "Founder Story & 360° Value Proposition",
      "Organizational Chart & Core Workflow",
      "Client Testimonials & Case Study Format",
      "প্রিন্ট-রেডি PDF + এডিটেবল Word (.docx)",
    ],
  },
  {
    id: "corp-profile",
    title: "Premium Corporate Profile",
    tagline: "ব্যাংক, টেন্ডার ও বড় B2B ডিলের জন্য",
    cat: "foundation",
    badge: "ENTERPRISE",
    price: "৳2,999",
    popular: true,
    desc: "বড় B2B ডিল, ব্যাংক লোন ও টেন্ডারের জন্য ৩০–৪০ পৃষ্ঠার ইনস্টিটিউশনাল প্রোফাইল।",
    painPoint: "বড় মাল্টিন্যাশনাল বা সরকারি টেন্ডারে বিড করতে পারছেন না? সাধারণ প্রোফাইল দেখে বড় ক্লায়েন্ট বিশ্বাস করতে চায় না?",
    faqs: [
      { q: "এটি টেন্ডার ও ব্যাংকের জন্য উপযুক্ত তো?", a: "হ্যাঁ, এতে ফিন্যান্সিয়াল ক্যাপাসিটি, কমপ্লায়েন্স এবং কোয়ালিটি পলিসির পূর্ণাঙ্গ ইনস্টিটিউশনাল ফরম্যাট অন্তর্ভুক্ত রয়েছে।" },
      { q: "কত পৃষ্ঠার প্রোফাইল তৈরি হয়?", a: "সাধারণত ৩০ থেকে ৪০ পৃষ্ঠার কমপ্লিট ইনস্টিটিউশনাল ডেক।" }
    ],
    img: "/assets/products/p_corp_profile.svg",
    features: [
      "৩০–৪০ পৃষ্ঠার ইনস্টিটিউশনাল মাস্টার ডেক",
      "Financial Capacity & Compliance Ready",
      "Detailed QA & Operational Architecture",
      "Govt / Multi-national Tender Ready",
      "৭২ ঘণ্টার মধ্যে ফুল ড্রাইভ ভল্ট হ্যান্ডঅফ",
    ],
  },
  {
    id: "brand-foundation-starter",
    title: "Brand Foundation Starter",
    tagline: "পজিশনিং, ভ্যালু ও অডিয়েন্স ক্ল্যারিটি",
    cat: "foundation",
    badge: "BRAND KIT",
    price: "৳1,499",
    desc: "ব্র্যান্ড পজিশনিং, টার্গেট কাস্টমার ডিফিনিশন এবং কমিউনিকেশন রুলস সেটআপ।",
    painPoint: "আপনার ব্র্যান্ডের কোনো ইউনিক আইডেন্টিটি নেই? বিজ্ঞাপনে টাকা খরচ হলেও ব্র্যান্ড রিকল হচ্ছে না?",
    faqs: [
      { q: "ব্র্যান্ড কিটে কী কী পাওয়া যাবে?", a: "ব্র্যান্ড ভয়েস, টোন, টার্গেট কাস্টমার ক্ল্যারিটি ও কমিউনিকেশন রুলস সহ সম্পূর্ণ গাইড।" }
    ],
    img: "/assets/products/p_mod_brandkit.svg",
    features: [
      "Brand Positioning & Target Customer Clarity",
      "Core Value Proposition & Differentiator Map",
      "Brand Voice, Tone & Key Messaging Guide",
      "Basic Visual Direction & Typography Standard",
      "Customer Communication Rules & Scripts",
    ],
  },
  {
    id: "company-deck",
    title: "Company Presentation Deck",
    tagline: "ইনভেস্টর ও ক্লায়েন্ট পিচ প্রেজেন্টেশন",
    cat: "foundation",
    badge: "PITCH DECK",
    price: "৳1,999",
    desc: "হাই-ইমপ্যাক্ট স্লাইড ডেক যা মিটিং ও পিচে আপনার ভ্যালু তুলে ধরে।",
    painPoint: "ক্লায়েন্ট মিটিং বা ইনভেস্টর পিচে স্লাইডগুলো আকর্ষক মনে হচ্ছে না? ডেটা ঠিকভাবে উপস্থাপন করতে পারছেন না?",
    faqs: [
      { q: "স্লাইডগুলো কি এডিট করা যাবে?", a: "হ্যাঁ, সম্পূর্ণ এডিটেবল PowerPoint (.pptx) এবং Google Slides ফরম্যাটে ডেলিভারি পাবেন।" }
    ],
    img: "/assets/products/p_starter_profile.svg",
    features: [
      "১৫–২০ স্লাইডের হাই-কনভার্টিং স্লাইড ডেক",
      "Problem-Solution-Proof Architecture",
      "Market Opportunity & Business Model Slides",
      "Editable PowerPoint (.pptx) + Google Slides",
      "প্রফেশনাল ডাটা ভিজ্যুয়ালাইজেশন ও চার্ট",
    ],
  },
  {
    id: "catalogue-pack",
    title: "Service / Product Catalogue",
    tagline: "ক্লিন ক্যাটালগ ও স্পেসিফিকেশন ডেক",
    cat: "foundation",
    badge: "CATALOGUE",
    price: "৳1,499",
    desc: "প্রোডাক্ট ও সার্ভিসের মূল্য, প্যাকেজ ও অফার সুন্দরভাবে উপস্থাপনের বুকলেট।",
    painPoint: "গ্রাহকদের প্রোডাক্ট বা সার্ভিসের রেট ও ফিচার পাঠাতে মেসেঞ্জারে অনেক সময় নষ্ট হচ্ছে?",
    faqs: [
      { q: "এটি কি পিডিএফ আকারে হোয়াটসঅ্যাপে শেয়ার করা যাবে?", a: "হ্যাঁ, যেকোনো ডিভাইসে পড়ার উপযোগী হাই-রেজুলেশন ডিজিটাল ও প্রিন্ট-রেডি ফরম্যাট পাবেন।" }
    ],
    img: "/assets/products/p_mod_brandkit.svg",
    features: [
      "১০–১৬ পৃষ্ঠার পূর্ণাঙ্গ প্রোডাক্ট ক্যাটালগ",
      "Pricing Tables & Tier Comparison",
      "Product Specs & Ordering Guide",
      "Print Ready PDF + Printable InDesign/Word",
      "Digital Shareable Link Ready",
    ],
  },
  {
    id: "tender-readiness",
    title: "Tender Readiness & Compliance Pack",
    tagline: "টেন্ডার ও ভেন্ডর এনলিস্টমেন্ট ফাইল",
    cat: "foundation",
    badge: "COMPLIANCE",
    price: "৳1,699",
    desc: "কর্পোরেট ও সরকারি টেন্ডারে যোগ্যতা প্রমাণ করার ডকুমেন্টেশন স্ট্রাকচার।",
    painPoint: "ভেন্ডর এনলিস্টমেন্ট বা টেন্ডার ফর্ম পূরণ করতে গিয়ে ডকুমেন্টের ঘাটতির কারণে রিজেক্ট হচ্ছেন?",
    faqs: [
      { q: "কী কী কমপ্লায়েন্স ফরম্যাট থাকে?", a: "কোয়ালিটি পলিসি, সেফটি ডিক্লেয়ারেশন, ফিন্যান্সিয়াল অডিট ফরম্যাট ও এক্সপেরিয়েন্স ম্যাট্রিক্স।" }
    ],
    img: "/assets/products/p_corp_profile.svg",
    features: [
      "Tender Document Structure & Table of Contents",
      "Vendor Enlistment Capability Statement",
      "Compliance, Quality Policy & Safety Declarations",
      "Financial Declaration & Audit Format",
      "Past Experience Matrix & Client Reference Sheet",
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 2. GET MORE CUSTOMERS (Sales, Scripts, Pipelines & Recovery)
  // ════════════════════════════════════════════════════════════

  {
    id: "custom-conversion-website",
    title: "High-Converting Conversion Website",
    tagline: "আপনার ব্যবসার ডিজিটাল হেডকোয়ার্টার",
    cat: "sales",
    badge: "🔥 HERO",
    price: "৳24,999+",
    popular: true,
    desc: "সীসা ক্যাপচার, কাস্টম ফানেল এবং অটোমেশন ইন্টিগ্রেশন সহ প্রফেশনাল কনভার্সন ওয়েবসাইট।",
    painPoint: "ফেসবুক পেজে ইনবক্স ম্যানেজ করতে করতে হয়রান? ওয়েবসাইট ভিজিটর আসছে কিন্তু সেলস হচ্ছে না?",
    faqs: [
      { q: "এই ওয়েবসাইট কি મોબাইল ফ্রেন্ডলি?", a: "হ্যাঁ, আমাদের প্রতিটি কনভার্সন ওয়েবসাইট ১০০% রেস্পনসিভ এবং মোবাইল ফার্স্ট ডিজাইনে তৈরি।" },
      { q: "এটি क्या হোয়াটসঅ্যাপের সাথে কানেক্টেড?", a: "হ্যাঁ, ডিরেক্ট Make.com এবং হোয়াটসঅ্যাপ এপিআই-এর মাধ্যমে অটোমেশন সেটআপ করা থাকে।" }
    ],
    img: "/assets/products/p_conversion_website.svg",
    features: [
      "অটোমেটেড লিড ক্যাপচার এবং Make.com ইন্টিগ্রেশন",
      "হাই-কনভার্টিং ল্যান্ডিং পেজ ফ্রেমওয়ার্ক",
      "পিক্সেল এবং কনভার্সন এপিআই সেটআপ",
      "ডায়নামিক হোয়াটসঅ্যাপ চ্যাটবট ইন্টিগ্রেশন",
      "ফুল-স্ট্যাক এসইও অপ্টিমাইজেশন",
    ],
  },
  {
    id: "crm-7tab-starter",
    title: "Custom CRM Dashboard",
    tagline: "কাস্টম সিআরএম এবং অটোমেটেড লিড পাইপলাইন",
    cat: "sales",
    badge: "🔥 HERO",
    price: "৳999",
    popular: true,
    desc: "লিড ট্র্যাকিং, সেলস পাইপলাইন ও ক্লায়েন্ট ডাটাবেজের জন্য ক্লাউড ট্র্যাকার।",
    painPoint: "লিড হারিয়ে যাচ্ছে? কে পেমেন্ট করেছে আর কে করেনি তার কোনো হিসাব রাখতে পারছেন না?",
    faqs: [
      { q: "আমি কি আমার মোবাইল থেকে এটি দেখতে পারবো?", a: "অবশ্যই, ক্লাউড ট্র্যাকার হওয়ায় স্মার্টফোন থেকেই সবকিছু কন্ট্রোল করতে পারবেন।" },
      { q: "ডেটা কতটা নিরাপদ?", a: "আপনার ডেটা আপনার নিজস্ব Google সার্ভার/ব্রাইভে স্টোর থাকবে, ১০০% নিরাপদ এবং প্রাইভেট।" }
    ],
    img: "/assets/products/p_crm_dashboard.svg",
    features: [
      "Lead Capture & Scoring System",
      "Sales Pipeline Stage Progression",
      "Courier & Delivery Status Tracker",
      "Customer History & Purchase Logs",
      "Monthly Conversion Summary Dashboard",
    ],
  },
  {
    id: "lost-lead-recovery",
    title: "Lost Lead Recovery System",
    tagline: "পুরোনো ও ড্রপ করা লিড থেকে ৮০% রিকভারি",
    cat: "sales",
    badge: "SALES BOOST",
    price: "৳1,199",
    popular: true,
    desc: "ইনবক্সে যারা মেসেজ দিয়ে কিনতে দ্বিধা করেছে, তাদের কনভার্ট করার ফলো-আপ মেথড।",
    img: "/assets/products/p_mod_crm.svg",
    features: [
      "Drop-off Diagnosis & Follow-up Matrix",
      "5-Step Objections Cracking Scripts",
      "Timely Reminder & Special Offer Triggers",
      "Re-engagement Campaign Framework",
      "Lead Status Tracker (Hot/Warm/Cold Recovery)",
    ],
  },
  {
    id: "messenger-script-pack",
    title: "Messenger Sales Script Pack",
    tagline: "ইনবক্স চ্যাটকে বিক্রিতে রূপান্তর করুন",
    cat: "sales",
    badge: "SCRIPTS",
    price: "৳799",
    desc: "হাই-কনভার্টিং ইনবক্স সেলস স্ক্রিপ্ট, অবজেকশন হ্যান্ডলিং ও ক্লোজিং ফর্মুলা।",
    img: "/assets/products/p_mod_crm.svg",
    features: [
      "Greeting to Closing 7-Step Formula",
      "Price Objection ('দাম বেশি') Handling Scripts",
      "Trust Building & Proof Sharing Templates",
      "COD Confirmation & Advance Charge Scripts",
      "Urgency & Limited Slot Closing Phrases",
    ],
  },
  {
    id: "offer-creation-system",
    title: "Irresistible Offer Creation System",
    tagline: "অফার যা কাস্টমার রিজেক্ট করতে পারবে না",
    cat: "sales",
    badge: "OFFER OS",
    price: "৳999",
    desc: "Product → Problem → Promise → Proof → Offer → CTA আর্কিটেকচার।",
    img: "/assets/products/p_growth_profile.svg",
    features: [
      "Grand Slam Offer Framing Guide",
      "Value Stack & Bonus Structuring Sheet",
      "Risk Reversal & Guarantee Formulations",
      "Tiered Pricing & Upsell Architecture",
      "Landing Page / Ad Offer Copy Generator",
    ],
  },
  {
    id: "whatsapp-sales-flow",
    title: "WhatsApp Sales & Broadcast OS",
    tagline: "হোয়াটসঅ্যাপে দ্রুত সেলস ও অটোমেশন",
    cat: "sales",
    badge: "CONVERSION",
    price: "৳1,299",
    desc: "WhatsApp Business ক্যাটালগ, কুইক রিপ্লাই এবং ব্রডকাস্ট সেলস ফানেল।",
    img: "/assets/products/p_mod_ai.svg",
    features: [
      "WhatsApp Business Setup & Quick Reply Library",
      "Catalog Structuring & Order Automation",
      "Segmented Broadcast Strategy (Anti-Ban Rules)",
      "Payment Link & Delivery Tracking Handoff",
      "VIP Customer Nurturing Sequence",
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 3. FIX YOUR OPERATIONS (SOPs, Workflows, Delegation & Delivery)
  // ════════════════════════════════════════════════════════════
  {
    id: "fcommerce-os",
    title: "Facebook Commerce OS",
    tagline: "রিটার্ন কমান, বিক্রি বাড়ান",
    cat: "operations",
    badge: "ECOMMERCE",
    price: "৳1,499",
    popular: true,
    desc: "কুরিয়ার রিটার্ন ও ইনবক্স ড্রপ কমানোর পূর্ণাঙ্গ অপারেশনাল সিস্টেম।",
    img: "/assets/products/p_fcommerce_os.svg",
    features: [
      "কুরিয়ার রিটার্ন প্রিভেনশন চেকলিস্ট ও অ্যালগরিদম",
      "ইনবক্স কনভার্সন সেলস স্ক্রিপ্ট ও ক্লোজিং টেমপ্লেট",
      "ডেইলি অর্ডার ট্র্যাকার ও ডেলিভারি স্ট্যাটাস শিট",
      "কাস্টমার কমপ্লেইন ও রিটার্ন হ্যান্ডলিং এসওপি",
      "ইউনিট ইকোনমিক্স ও অ্যাড আরওআই ট্র্যাকার",
    ],
  },
  {
    id: "founder-team-transition-os",
    title: "Founder-to-Team Transition OS",
    tagline: "ব্যবসা চলবে আপনাকে ছাড়া — টিম চালনা",
    cat: "operations",
    badge: "DELEGATION",
    price: "৳2,499",
    popular: true,
    desc: "মালিকের ওপর সম্পূর্ণ নির্ভরশীলতা কাটিয়ে টিমকে স্বয়ংক্রিয় করার পূর্ণ মেথড।",
    img: "/assets/products/p_founder_os.svg",
    features: [
      "Founder Responsibilities Audit & Handover Matrix",
      "Delegation Matrix (Who does what and when)",
      "Approval Limits & Decision Rights Guide",
      "Escalation Rules (কখন ফাউন্ডারকে জানাতে হবে)",
      "Daily & Weekly Team Reporting Dashboards",
    ],
  },
  {
    id: "founder-delegation-os",
    title: "Founder Delegation OS",
    tagline: "প্রতিদিনের কাজের চাপ টিমকে বুঝিয়ে দিন",
    cat: "operations",
    badge: "OPERATIONS",
    price: "৳1,099",
    desc: "ফাউন্ডারের সময় বাঁচানোর মেগা সিস্টেম — টাস্ক অ্যালটমেন্ট ও এপ্রুভাল রুলস।",
    img: "/assets/products/p_founder_os.svg",
    features: [
      "টাস্ক ডেলিগেশন ও অ্যাসাইনমেন্ট ফ্রেমওয়ার্ক",
      "ডিসিশন-মেকিং অথরিটি ম্যাট্রিক্স",
      "ডেইলি স্ট্যান্ডআপ ও উইকলি রিভিউ শিট",
      "কোর টিম মেম্বারদের রোল ও রেসপনসিবিলিটি গাইড",
      "ফাউন্ডার টাইম ম্যানেজমেন্ট ভল্ট",
    ],
  },
  {
    id: "business-sop-starter",
    title: "Business SOP Starter OS",
    tagline: "কাজের ধারাবাহিকতা ও ভুল কমানোর ম্যানুয়াল",
    cat: "operations",
    badge: "SOP SUITE",
    price: "৳1,499",
    desc: "অর্ডার প্রসেসিং, ডেলিভারি ও কোয়ালিটি চেকের স্টেপ-বাই-স্টেপ SOP টেমপ্লেট।",
    img: "/assets/products/p_mod_sop.svg",
    features: [
      "১০টি কোর বিজনেস প্রসেস SOP টেমপ্লেট",
      "Order Fulfillment & Quality Check Process",
      "Customer Support & Dispute Escalation",
      "Vendor Management & Inventory SOP",
      "Step-by-Step Visual Flowchart Guide",
    ],
  },
  {
    id: "daily-operations-control",
    title: "Daily Operations Control System",
    tagline: "প্রতিদিনের কাজের নির্ভুল চেকলিস্ট ও লগ",
    cat: "operations",
    badge: "CONTROL",
    price: "৳1,299",
    desc: "সকাল থেকে রাত পর্যন্ত ব্যবসার প্রতিটি অপারেশনের লাইভ কন্ট্রোল শীট।",
    img: "/assets/products/p_mod_sop.svg",
    features: [
      "Morning Kick-off & Evening EOD Reporting Sheet",
      "Stock Level Alert & Re-order Trigger Log",
      "Courier Dispatch Verification Protocol",
      "Issue Logging & Root-Cause Elimination Matrix",
      "Cross-Department Handoff Checklist",
    ],
  },
  {
    id: "digital-vault",
    title: "Digital Vault Setup",
    tagline: "সব ফাইল, পাসওয়ার্ড ও SOP সুরক্ষিত ক্লাউডে",
    cat: "operations",
    badge: "INFRASTRUCTURE",
    price: "৳599",
    desc: "সব বিজনেস ডকুমেন্ট সুরক্ষিত ও গুছিয়ে রাখার সুনির্দিষ্ট ফাইল স্ট্রাকচার।",
    img: "/assets/products/p_mod_vault.svg",
    features: [
      "ক্লাউড ড্রাইভ ফোল্ডার স্ট্রাকচার",
      "এক্সেস কন্ট্রোল ও সিকিউরিটি চেকলিস্ট",
      "ফাইল নেমিং কনভেনশন গাইড",
      "অটোমেটেড ব্যাকআপ প্রটোকল",
      "টিম অনবোর্ডিং হ্যান্ডঅফ ডক",
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 4. CONTROL YOUR NUMBERS (Costing, Cash Flow, Unit Economics)
  // ════════════════════════════════════════════════════════════
  {
    id: "product-profitability-audit",
    title: "Product Profitability Audit OS",
    tagline: "বিক্রি হচ্ছে কিন্তু লাভ হচ্ছে কি? যাচাই করুন",
    cat: "finance",
    badge: "PROFIT AUDIT",
    price: "৳899",
    popular: true,
    desc: "কুরিয়ার চার্জ, প্যাকেজিং ও রিটার্ন কস্ট বাদ দিয়ে প্রতি আইটেমের নিখুঁত নেট প্রফিট।",
    img: "/assets/products/p_mod_finance.svg",
    features: [
      "SKU-Wise Gross & Net Margin Calculator",
      "Courier Return Loss Absorption Formula",
      "Packaging, Overhead & Ad Spend Attribution",
      "Bleeding Products (লস আইটেম) শনাক্তকরণ অ্যালগরিদম",
      "Winner SKU Scaling Recommendation Engine",
    ],
  },
  {
    id: "cash-flow-control-sheet",
    title: "Cash Flow Control Sheet",
    tagline: "ক্যাশ ক্রাইসিস বন্ধ করুন, ফান্ড ম্যানেজ করুন",
    cat: "finance",
    badge: "CASH FLOW",
    price: "৳999",
    desc: "দৈনিক আয়, ব্যয়, বকেয়া ও কুরিয়ার পেমেন্ট ডিসবার্সমেন্ট ট্র্যাকার।",
    img: "/assets/products/p_mod_finance.svg",
    features: [
      "30-Day Rolling Cash Inflow & Outflow Tracker",
      "Courier COD Disbursement Reconciliation",
      "Supplier Outstanding & Payment Schedule",
      "Emergency Reserve & Expense Allocation Ratio",
      "Month-End Liquidity & Working Capital Forecast",
    ],
  },
  {
    id: "unit-economics",
    title: "Unit Economics Tracker",
    tagline: "কুরিয়ার লস, অ্যাড কস্ট ও নেট প্রফিট ট্র্যাকার",
    cat: "finance",
    badge: "FINANCE",
    price: "৳749",
    desc: "প্রোডাক্ট প্রতি খরচ, শিপিং লস ও অ্যাড স্পেন্ড থেকে নেট প্রফিট গণনার ফর্মুলা।",
    img: "/assets/products/p_mod_finance.svg",
    features: [
      "কস্ট অফ গুডস সোল্ড (COGS) ক্যালকুলেটর",
      "অ্যাড স্পেন্ড আরওআই ট্র্যাকার (ROAS)",
      "কুরিয়ার রিটার্ন লস ব্যালেন্স শিট",
      "নেট মার্জিন অ্যানালাইসিস ড্যাশবোর্ড",
      "মান্থলি ব্রেক-ইভেন সেলস গোল ক্যালকুলেটর",
    ],
  },
  {
    id: "pricing-strategy-toolkit",
    title: "Pricing Strategy & Margin Toolkit",
    tagline: "সঠিক মূল্য নির্ধারণ করে মুনাফা নিশ্চিত করুন",
    cat: "finance",
    badge: "PRICING",
    price: "৳999",
    desc: "ভ্যালু-বেসড প্রাইসিং, বান্ডেল ডিসকাউন্ট ও সাইকোলজিক্যাল প্রাইসিং মডেল।",
    img: "/assets/products/p_mod_finance.svg",
    features: [
      "Cost-Plus vs Value-Based Pricing Models",
      "Bundle & Tiered Discount Margin Simulator",
      "Psychological Price Anchoring Matrix",
      "Competitor Pricing Sensitivity Benchmark",
      "Volume Discount Break-Even Threshold Sheet",
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 5. BUILD YOUR TEAM (HR, Roles, Onboarding, KPIs & Meetings)
  // ════════════════════════════════════════════════════════════
  {
    id: "role-responsibility-matrix",
    title: "Role & Responsibility Matrix",
    tagline: "এই কাজটা আসলে কে করবে? স্পষ্ট জবাব",
    cat: "team",
    badge: "TEAM ROLES",
    price: "৳899",
    popular: true,
    desc: "প্রত্যেক কর্মীর দায়িত্ব, কেপিআই ও এপ্রুভাল এরিয়া পরিষ্কার নির্ধারণ করার ফ্রেমওয়ার্ক।",
    img: "/assets/products/p_founder_os.svg",
    features: [
      "Role → Responsibility → KPI → Reporting Flow",
      "Sales, Ops, Packing, Customer Care RACI Matrix",
      "Job Description (JD) Starter Templates for SMEs",
      "Authority & Decision Boundaries Definition",
      "Cross-Team Overlap & Confusion Resolver",
    ],
  },
  {
    id: "performance-kpi-system",
    title: "Performance KPI & Appraisal System",
    tagline: "কাজের ফলাফল মূল্যায়ন ও ইনসেনটিভ সিস্টেম",
    cat: "team",
    badge: "KPI SYSTEM",
    price: "৳1,299",
    desc: "কর্মীদের পারফরম্যান্স ট্র্যাক, স্কোরকার্ড ও সেলস কমিশন রুলস।",
    img: "/assets/products/p_mod_kpi.svg",
    features: [
      "Department-wise Key Performance Indicators (KPI)",
      "Monthly Employee Performance Scorecard",
      "Commission & Incentive Calculation Structure",
      "Quarterly Performance Review (QPR) Template",
      "PIP (Performance Improvement Plan) Framework",
    ],
  },
  {
    id: "employee-onboarding-kit",
    title: "Employee Onboarding Kit",
    tagline: "নতুন কর্মী জয়েন করার প্রথম ৭ দিনের গাইড",
    cat: "team",
    badge: "HR ONBOARD",
    price: "৳999",
    desc: "নতুন কর্মী নিয়োগের অফার লেটার, কোম্পানি রুলস ও ফার্স্ট-উইক চেকলিস্ট।",
    img: "/assets/products/p_mod_sop.svg",
    features: [
      "Job Offer Letter & Employment Agreement Pack",
      "Day 1 to Day 7 Induction & Training Schedule",
      "Company Handbook & Code of Conduct Template",
      "Asset Handover & System Access Checklist",
      "Probation Period Evaluation Rubric",
    ],
  },
  {
    id: "team-meeting-os",
    title: "Team Meeting & Sync OS",
    tagline: "অযথা মিটিং বন্ধ, কাজের ফলো-আপ নিশ্চিত",
    cat: "team",
    badge: "MEETING OS",
    price: "৳799",
    desc: "১০ মিনিটের ডেইলি স্ট্যান্ডআপ, উইকলি রিভিউ ও মান্থলি স্ট্র্যাটেজি এজেন্ডা।",
    img: "/assets/products/p_mod_sop.svg",
    features: [
      "10-Minute Daily Standup Format",
      "Weekly Operational Progress Review Sheet",
      "Monthly Strategic Health Check Agenda",
      "Action-Item Tracker & Accountability Log",
      "Meeting Elimination (কখন মিটিং না করে ডক পাঠাবেন)",
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 6. SCALE WITH AI & OS (Executive OS, CEO Command, AI Agents)
  // ════════════════════════════════════════════════════════════
  {
    id: "enterprise-os",
    title: "Enterprise Business OS Suite",
    tagline: "১০টি ডিপার্টমেন্টের পূর্ণাঙ্গ বিজনেস সিস্টেম",
    cat: "executive",
    badge: "🔥 ULTIMATE",
    price: "৳5,999",
    popular: true,
    desc: "SOP, CRM, টিম ম্যানেজমেন্ট, ব্র্যান্ড আর্কিটেকচার ও এআই অটোমেশন সব এক ভল্টে।",
    img: "/assets/products/p_enterprise_os.svg",
    features: [
      "১০টি কমপ্লিট ডিপার্টমেন্টাল এসওপি আর্কিটেকচার",
      "ফুল-স্কেল সিআরএম ও লিড ম্যানেজমেন্ট হাব",
      "কেপিআই কমান্ড বোর্ড ও সিইও ড্যাশবোর্ড",
      "টিম অনবোর্ডিং ও পারফরম্যান্স ম্যানেজমেন্ট প্যাক",
      "লাইফটাইম আপডেট + লাইভ সেটআপ কনসালটেশন",
    ],
  },
  {
    id: "ceo-dashboard",
    title: "CEO Executive Command Dashboard",
    tagline: "এক স্ক্রিনে পুরো কোম্পানির লাইভ হেলথ",
    cat: "executive",
    badge: "CEO DASHBOARD",
    price: "৳2,999",
    popular: true,
    desc: "সেলস, লিড, ফাইন্যান্স, টিম পারফরম্যান্স ও ঝুঁকি মনিটর করার অল-ইন-ওয়ান বোর্ড।",
    img: "/assets/products/p_mod_kpi.svg",
    features: [
      "Real-time Revenue, Margin & Cash Health Display",
      "Sales Pipeline & Lead Velocity Overview",
      "Operational Bottleneck & Escalation Matrix",
      "Weekly Priority Focus & Top Decisions Tracker",
      "Cloud Connected Google Sheets / Notion Template",
    ],
  },
  {
    id: "ai-messenger-flow",
    title: "Automation Messenger Flow",
    tagline: "২৪/৭ স্বয়ংক্রিয় ইনবক্স সেলস সিস্টেম",
    cat: "executive",
    badge: "AI AUTOMATION",
    price: "৳1,299",
    desc: "ইনবক্স অটোমেশন ফ্লোচার্ট, প্রি-অর্ডার কোয়ালিফায়ার ও কাস্টমার সাপোর্ট বট।",
    img: "/assets/products/p_mod_ai.svg",
    features: [
      "অটোমেটেড ইনবক্স রাউটিং ফ্লোচার্ট",
      "প্রি-অর্ডার ভ্যালিডেশন স্ক্রিপ্ট ও কিওয়ার্ডস",
      "২৪/৭ কাস্টমার এনগেজমেন্ট লজিক",
      "হ্যান্ডঅফ টু হিউম্যান এজেন্ট রুলস",
      "অর্ডার কনফার্মেশন ওয়েবহুক রেডি গাইড",
    ],
  },
  {
    id: "kpi-command-board",
    title: "KPI Command Board",
    tagline: "টিমের কাজের অগ্রগতি পরিমাপ করুন",
    cat: "executive",
    badge: "MANAGEMENT",
    price: "৳1,199",
    desc: "বিক্রি, ডেলিভারি, অ্যাড খরচ ও টিমের পারফরম্যান্স এক নজরে দেখার ড্যাশবোর্ড।",
    img: "/assets/products/p_mod_kpi.svg",
    features: [
      "ডিপার্টমেন্ট-ভিত্তিক কেপিআই ট্র্যাকার",
      "ডেইলি সেলস ও ডেলিভারি পারফরম্যান্স মেট্রিক্স",
      "অ্যাড স্পেন্ড ভার্সেস রেভিনিউ চার্ট",
      "টিম ইন্ডিভিজুয়াল টার্গেট ও অ্যাচিভমেন্ট স্কোর",
      "মান্থলি গ্রোথ অ্যান্ড প্রজেকশন ভিউ",
    ],
  },
  {
    id: "custom-ai-business-agent",
    title: "Custom Business AI Agent OS",
    tagline: "আপনার বিজনেসের নিজস্ব কাস্টম AI অ্যাসিস্ট্যান্ট",
    cat: "executive",
    badge: "AI AGENT",
    price: "৳7,999+",
    desc: "কাস্টমার সাপোর্ট, সেলস স্ক্রিনিং ও ইন্টারনাল নলেজ বেসের জন্য কাস্টম AI এজেন্ট আর্কিটেকচার।",
    img: "/assets/products/p_mod_ai.svg",
    features: [
      "Custom Knowledge Base Trained on Your Business Docs",
      "Automated Lead Qualification & Inquiry Triage",
      "24/7 Intelligent Customer Support Assistant",
      "CRM & Spreadsheet Live Data Integration",
      "Dedicated Setup & Calibration Consultation",
    ],
  },
];
