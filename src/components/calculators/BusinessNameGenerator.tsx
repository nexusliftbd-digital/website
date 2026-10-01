"use client";

import React, { useState } from "react";

export default function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState("fashion");
  const [results, setResults] = useState<{ name: string; slogan: string }[]>([]);

  const templates: Record<string, { prefixes: string[]; suffixes: string[]; slogans: string[] }> = {
    fashion: {
      prefixes: ["Aura", "Vogue", "Silk", "Elegance", "Noir", "Urban", "Craft"],
      suffixes: ["Attire", "BD", "Wear", "Fabrics", "Studio", "Threads", "Wardrobe"],
      slogans: ["Define Your Elegance", "বাংলাদেশের প্রিমিয়াম ফ্যাশন", "Trend Meets Comfort", "আপনার স্টাইলের নতুন পরিচয়"]
    },
    food: {
      prefixes: ["Pure", "Taste", "Royal", "Bhoj", "Organic", "Crisp", "Nature"],
      suffixes: ["Kitchen", "Delights", "Foods", "Farm", "Bites", "Treats", "Express"],
      slogans: ["খাঁটি স্বাদের নিশ্চয়তা", "Fresh & Pure Every Day", "টেস্টে সেরা কোয়ালিটি", "Farm Fresh to Your Table"]
    },
    tech: {
      prefixes: ["Nova", "Sync", "Nex", "Cyber", "Cloud", "Apex", "Logic"],
      suffixes: ["Tech", "Labs", "Solutions", "Matrix", "Byte", "Systems", "Digital"],
      slogans: ["Smart Tech for Modern BD", "ভবিষ্যতের ডিজিটাল সমাধান", "Automate & Scale", "Engineering Next-Gen Growth"]
    },
    general: {
      prefixes: ["Prime", "Zenith", "Elite", "Nexus", "Vertex", "Venture", "Omni"],
      suffixes: ["Hub", "Corporation", "Enterprise", "Global", "Direct", "Point"],
      slogans: ["Building Trust Everyday", "সফলতার বিশ্বস্ত অংশীদার", "Quality You Can Rely On", "Empowering Your Business"]
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const data = templates[industry] || templates.general;
    const base = keyword.trim() || data.prefixes[Math.floor(Math.random() * data.prefixes.length)];

    const list = [
      {
        name: `${base} ${data.suffixes[0]}`,
        slogan: data.slogans[0]
      },
      {
        name: `${data.prefixes[1]} ${base}`,
        slogan: data.slogans[1]
      },
      {
        name: `${base} ${data.suffixes[2]}`,
        slogan: data.slogans[2]
      },
      {
        name: `${data.prefixes[3]} ${base} ${data.suffixes[3]}`,
        slogan: data.slogans[3]
      },
      {
        name: `${base} ${data.suffixes[4]}`,
        slogan: data.slogans[0]
      }
    ];

    setResults(list);
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full uppercase">
            Branding & Idea Tool
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#0B1733] mt-2">
            Brand Name & Slogan Generator
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            আপনার নতুন ব্যবসা বা প্রজেক্টের জন্য ইনস্ট্যান্ট ক্যাচি ব্র্যান্ড নাম ও স্লোগান তৈরি করুন।
          </p>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            একটি মূল শব্দ (Keyword / নিশ):
          </label>
          <input
            type="text"
            placeholder="যেমন: Glow, Smart, Pure..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            ব্যবসার ক্যাটাগরি:
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl text-sm font-bold text-[#0B1733] focus:border-[#1971A5] outline-none bg-white"
          >
            <option value="fashion">👗 ফ্যাশন ও ক্লথিং</option>
            <option value="food">🍲 খাবার ও অর্গানিক ফুড</option>
            <option value="tech">💻 আইটি, সফটওয়্যার ও গ্যাজেট</option>
            <option value="general">🏢 কর্পোরেট ও জেনারেল বিজনেস</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-[#0B1733] text-white p-3 rounded-xl text-sm font-black hover:bg-[#1E293B] transition shadow-sm"
          >
            ⚡ নাম ও স্লোগান তৈরি করুন
          </button>
        </div>
      </form>

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {results.map((item, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border border-gray-200 p-4 rounded-xl flex flex-col justify-between hover:border-[#1971A5] transition">
              <div>
                <span className="text-[10px] font-black text-[#1971A5] bg-[#EAF6FF] px-2 py-0.5 rounded-full uppercase">
                  আইডিয়া #{idx + 1}
                </span>
                <h4 className="text-base font-black text-[#0B1733] mt-2 mb-1">{item.name}</h4>
                <p className="text-xs text-gray-500 italic font-medium">"{item.slogan}"</p>
              </div>
              <a
                href={`https://wa.me/8801814716713?text=${encodeURIComponent(`সালাম Nexus Lift, আমি "${item.name}" ব্র্যান্ড নামের জন্য ফুল কোম্পানি প্রোফাইল ও ব্র্যান্ডিং সিস্টেম বানাতে চাই।`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-[11px] font-bold text-[#1971A5] hover:underline"
              >
                এই নামের জন্য প্রোফাইল বুক করুন →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
