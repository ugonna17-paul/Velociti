"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Amara Osei", role: "Restaurant Owner, Accra", rating: 5, text: "Our daily order volume tripled in two months after joining Velociti. The dispatch system never misses.", color: "#86EFAC" },
  { name: "Lena Müller", role: "Regular Customer", rating: 5, text: "Groceries, pharmacy, and takeout in one checkout. Everything arrived together in 25 minutes. Remarkable.", color: "#3B82F6" },
  { name: "Kofi Asante", role: "Delivery Rider", rating: 5, text: "Route optimisation saves me fuel and time. I complete 40% more deliveries per shift than before.", color: "#A78BFA" },
  { name: "Sofia Reyes", role: "E-commerce Merchant", rating: 5, text: "Zero customer complaints about missing orders since switching. The live tracking killed our support queue.", color: "#FB923C" },
  { name: "James Okafor", role: "Regular Customer", rating: 5, text: "The live map is addictive. Watching the rider navigate to me feels like magic every single time.", color: "#86EFAC" },
  { name: "Yuki Tanaka", role: "Boutique Owner", rating: 5, text: "The vendor dashboard gives me real-time analytics on every order. The insight alone is worth the switch.", color: "#3B82F6" },
];

export function TestimonialsSection() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="py-28 overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.25)", color: "#86EFAC", fontFamily: "'Inter', sans-serif" }}>
            Testimonials
          </div>
          <h2 className="font-black text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}>
            Trusted by riders, vendors,<br /><span style={{ color: "#86EFAC" }}>and customers alike.</span>
          </h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #0F172A, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #0F172A, transparent)" }} />
        <div className="flex gap-5" style={{ animation: "ticker 40s linear infinite", width: "max-content", padding: "8px 0" }}>
          {doubled.map((t, i) => (
            <div key={i} className="flex-shrink-0 rounded-2xl p-5 w-72" style={{ background: "#020617", border: "1px solid #1E293B" }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={12} fill="#FDE047" color="#FDE047" />)}
              </div>
              <p className="text-[#CBD5E1] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#020617]" style={{ background: t.color, fontFamily: "'Inter', sans-serif" }}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{t.name}</div>
                  <div className="text-[#64748B] text-[10px]" style={{ fontFamily: "'Inter', sans-serif" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
