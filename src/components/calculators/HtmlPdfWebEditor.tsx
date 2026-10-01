"use client";

import React, { useState, useRef } from "react";

const SAMPLE_TEMPLATES: Record<string, { name: string; html: string }> = {
  invoice: {
    name: "🧾 ই-কমার্স ইনভয়েস (Invoice Template)",
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 24px; color: #1e293b; background: #fff; margin: 0; }
    .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0B1733; padding-bottom: 16px; margin-bottom: 20px; }
    .brand { font-size: 22px; font-weight: 900; color: #0B1733; letter-spacing: 0.5px; }
    .invoice-title { font-size: 18px; font-weight: 700; color: #1971A5; text-align: right; }
    .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; font-size: 13px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
    .table th { background: #f1f5f9; padding: 10px; text-align: left; font-weight: 700; border-bottom: 1px solid #cbd5e1; }
    .table td { padding: 10px; border-bottom: 1px solid #e2e8f0; }
    .total-box { margin-left: auto; width: 260px; font-size: 13px; }
    .total-row { display: flex; justify-content: space-between; padding: 4px 0; }
    .grand-total { font-weight: 900; font-size: 16px; color: #0B1733; border-top: 2px solid #0B1733; padding-top: 6px; margin-top: 4px; }
    .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px dashed #cbd5e1; padding-top: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="brand">NEXUS COMMERCE</div>
      <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Dhaka, Bangladesh | Phone: 01814-716713</div>
    </div>
    <div>
      <div class="invoice-title">INVOICE / ক্যাশ মেমো</div>
      <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Invoice #: NX-9842 | Date: 30 Sep 2026</div>
    </div>
  </div>

  <div class="meta-grid">
    <div>
      <strong>গ্রাহকের বিবরণ (Billed To):</strong><br>
      মোহাম্মদ তানভীর আহমেদ<br>
      বাড়ি #১২, রোড #৫, ধানমন্ডি, ঢাকা<br>
      ফোন: 01712-345678
    </div>
    <div style="text-align: right;">
      <strong>পেমেন্ট মেথড:</strong> ক্যাশ অন ডেলিভারি (COD)<br>
      <strong>কুরিয়ার পার্টনার:</strong> Steadfast Courier<br>
      <strong>ডেলিভারি স্ট্যাটাস:</strong> Processing
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>বিবরণ (Item Description)</th>
        <th style="text-align: center;">পরিমাণ (Qty)</th>
        <th style="text-align: right;">ইউনিট মূল্য</th>
        <th style="text-align: right;">মোট (৳)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Premium Cotton Polo Shirt (Black - L)</td>
        <td style="text-align: center;">2</td>
        <td style="text-align: right;">৳1,250</td>
        <td style="text-align: right;">৳2,500</td>
      </tr>
      <tr>
        <td>Genuine Leather Minimalist Wallet (Brown)</td>
        <td style="text-align: center;">1</td>
        <td style="text-align: right;">৳950</td>
        <td style="text-align: right;">৳950</td>
      </tr>
    </tbody>
  </table>

  <div class="total-box">
    <div class="total-row"><span>সাব-টোটাল (Subtotal):</span><span>৳3,450</span></div>
    <div class="total-row"><span>ডেলিভারি চার্জ (Delivery):</span><span>৳100</span></div>
    <div class="total-row"><span>ডিসকাউন্ট (Voucher):</span><span>-৳150</span></div>
    <div class="total-row grand-total"><span>সর্বমোট প্রদেয়:</span><span>৳3,400</span></div>
  </div>

  <div class="footer">
    আমাদের সাথে কেনাকাটা করার জন্য ধন্যবাদ! পার্সেল গ্রহণের পূর্বে প্রোডাক্ট চেক করে নিন।<br>
    Powered by Nexus Lift Business Infrastructure.
  </div>
</body>
</html>`,
  },
  quotation: {
    name: "📑 কর্পোরেট প্রপোজাল / কোটেশন (Quotation)",
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: sans-serif; padding: 24px; color: #0F172A; }
    .title { font-size: 20px; font-weight: 800; color: #1971A5; margin-bottom: 8px; }
    .box { background: #F8FAFC; border: 1px solid #E2E8F0; padding: 16px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
    th, td { border: 1px solid #CBD5E1; padding: 8px 12px; text-align: left; }
    th { background: #0B1733; color: #fff; }
  </style>
</head>
<body>
  <div class="title">BUSINESS SERVICE QUOTATION</div>
  <p style="font-size: 12px; color: #64748B;">Client: Acme Retail Group | Valid Until: 30 Days</p>
  <div class="box">
    <strong>প্রজেক্ট নাম:</strong> Complete Brand Guideline & Social Kit Setup<br>
    <strong>ডেলিভারি টাইমলাইন:</strong> ৭ কর্মদিবস
  </div>
  <table>
    <tr><th>সার্ভিস আইটেম</th><th>মূল্য (BDT)</th></tr>
    <tr><td>Brand Identity, Scientific Logo & Color Rulebook</td><td>৳২,৬০০</td></tr>
    <tr><td>Social Media Creative Asset Kit (30 Templates)</td><td>৳৩,৫০০</td></tr>
    <tr><td><strong>মোট প্রাক্কলিত বাজেট</strong></td><td><strong>৳৬,১০০</strong></td></tr>
  </table>
  <p style="font-size: 11px; color: #94A3B8;">Terms: ৫০% অ্যাডভান্স ওয়ার্ক অর্ডারের সময় প্রযোজ্য।</p>
</body>
</html>`,
  },
};

export default function HtmlPdfWebEditor() {
  const [htmlCode, setHtmlCode] = useState<string>(SAMPLE_TEMPLATES.invoice.html);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    }
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "document.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border text-left border-gray-200 shadow-sm rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-xl text-2xl font-black">
            🖨️
          </div>
          <div>
            <h3 className="text-xl font-black text-[#0B1733]">
              HTML to PDF & Live Web Document Generator
            </h3>
            <p className="text-xs text-gray-500">
              ক্যাশ মেমো, ইনভয়েস বা কোটেশন কোড সরাসরি প্রিভিউ করুন এবং ১-ক্লিকে হাই-কোয়ালিটি প্রিন্ট/PDF সেভ করুন
            </p>
          </div>
        </div>

        {/* Template Quick Select & Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setHtmlCode(SAMPLE_TEMPLATES.invoice.html)}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#0B1733] font-bold rounded-lg text-xs transition"
          >
            Invoice Template
          </button>
          <button
            onClick={() => setHtmlCode(SAMPLE_TEMPLATES.quotation.html)}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#0B1733] font-bold rounded-lg text-xs transition"
          >
            Quotation Template
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-1.5 bg-[#1971A5] hover:bg-[#0B1733] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition"
          >
            🖨️ প্রিন্ট / Save as PDF
          </button>
          <button
            onClick={handleDownloadHtml}
            className="px-3 py-1.5 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold rounded-lg text-xs transition"
          >
            💾 Download HTML
          </button>
        </div>
      </div>

      {/* Editor & Preview Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left: Code Editor */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center justify-between bg-slate-900 text-slate-300 px-4 py-2.5 rounded-t-xl text-xs font-mono">
            <span>HTML & Inline CSS Editor</span>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Live Sync</span>
          </div>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            className="w-full h-[420px] p-4 bg-slate-950 text-emerald-400 font-mono text-xs rounded-b-xl focus:outline-none focus:ring-2 focus:ring-[#1971A5] resize-none border border-slate-900 leading-relaxed overflow-y-auto"
            placeholder="Write or paste your custom HTML here..."
            spellCheck={false}
          />
        </div>

        {/* Right: Live Interactive Web View / PDF Preview */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center justify-between bg-gray-100 border border-b-0 border-gray-200 px-4 py-2.5 rounded-t-xl text-xs font-bold text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
              <span className="ml-2 font-mono text-[11px] text-gray-500">Live Web View & PDF Canvas</span>
            </div>
            <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              Ready for Print
            </span>
          </div>
          <div className="h-[420px] bg-white border border-gray-200 rounded-b-xl overflow-hidden shadow-inner">
            <iframe
              ref={iframeRef}
              srcDoc={htmlCode}
              title="HTML PDF Live Preview"
              className="w-full h-full border-0 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Expert Usage Tips */}
      <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-3">
        <span className="text-base">💡</span>
        <div>
          <strong className="text-slate-900 font-bold">প্রো-টিপস (Best Practice for Invoice & PDF Printing):</strong>
          <p className="mt-0.5 text-[11px] text-slate-500">
            ১. ইনভয়েসে আপনার কোম্পানির নাম, ফোন নম্বর ও কুরিয়ার ট্র্যাকিং ফিল্ডগুলো সহজেই এডিট করতে পারবেন।<br />
            ২. প্রিন্ট বাটনে চাপ দিলে ব্রাউজারের প্রিন্ট ডায়ালগ ওপেন হবে — সেখান থেকে Destination হিসেবে <strong>&quot;Save as PDF&quot;</strong> সিলেক্ট করে ফাইলটি কাস্টমারকে WhatsApp-এ পাঠাতে পারেন।
          </p>
        </div>
      </div>
    </div>
  );
}
