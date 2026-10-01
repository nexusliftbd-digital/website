"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function GrowthArchitectureSection() {
  const steps = [
    { title: "Business Profile", desc: "Identity & Credibility", color: "#1971A5" },
    { title: "Conversion Website", desc: "Digital Growth Engine", color: "#0B5A96" },
    { title: "Custom CRM", desc: "Control & Pipeline", color: "#059669" },
    { title: "Business Growth", desc: "Scalable Revenue", color: "#0B1733" }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1160px] mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-16 underline decoration-[#43A7E8] underline-offset-8">
          The Nexus Lift Growth Architecture
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black" style={{ backgroundColor: step.color }}>
                  {idx + 1}
                </div>
                <h3 className="font-black text-[#0B1733] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[#43A7E8] text-2xl font-black">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
