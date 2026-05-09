"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag, CheckCircle, Bike, MapPin, Package
} from "lucide-react";

const STEPS = [
  { n: "01", icon: ShoppingBag, title: "Place Your Order", body: "Browse hundreds of vendors, build a multi-vendor cart, and check out in seconds." },
  { n: "02", icon: CheckCircle, title: "Vendor Confirms", body: "The vendor receives your order instantly and begins preparing for pickup." },
  { n: "03", icon: Bike, title: "Rider Dispatched", body: "Our AI assigns the nearest available rider automatically — no manual matching." },
  { n: "04", icon: MapPin, title: "Track Live", body: "Watch your rider move across the city in real time with sub-second location updates." },
  { n: "05", icon: Package, title: "Delivered", body: "Your order arrives intact. Rate the experience and earn loyalty rewards." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 lg:px-8 relative overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(134,239,172,0.05) 0%, transparent 70%)" }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.25)", color: "#86EFAC", fontFamily: "'Inter', sans-serif" }}>
            How It Works
          </div>
          <h2 className="font-black text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}>
            From click to doorstep<br />
            <span style={{ color: "#86EFAC" }}>in five fluid steps.</span>
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, #86EFAC, #3B82F6, #A78BFA, #FB923C, #86EFAC)", opacity: 0.3 }} />
          <div className="flex flex-col gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const accents = ["#86EFAC", "#3B82F6", "#A78BFA", "#FB923C", "#86EFAC"];
              const accent = accents[i];
              return (
                <motion.div key={step.n} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0">
                    <motion.div whileHover={{ scale: 1.15 }} className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${accent}15`, border: `1px solid ${accent}40` }}>
                      <Icon size={22} style={{ color: accent }} />
                    </motion.div>
                  </div>
                  <div className="flex-1 rounded-2xl p-5" style={{ background: "#020617", border: "1px solid #1E293B" }}>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-bold tracking-widest" style={{ color: accent, fontFamily: "'Inter', sans-serif" }}>{step.n}</span>
                      <h3 className="text-white font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.title}</h3>
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{step.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
