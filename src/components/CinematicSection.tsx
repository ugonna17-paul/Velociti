"use client";

import { motion } from "framer-motion";
import { Play, Timer, Shield, TrendingUp } from "lucide-react";

export function CinematicSection() {
  return (
    <section id="cinematic" className="relative py-32 px-6 lg:px-8 overflow-hidden min-h-[500px] flex items-center">
      <img src="https://images.unsplash.com/photo-1768423083233-b3f696c9b703?w=1600&h=800&fit=crop&auto=format" alt="Delivery rider at dusk" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.7) 50%, rgba(59,130,246,0.08) 100%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#93C5FD", fontFamily: "'Inter', sans-serif" }}>
            <Play size={10} fill="#93C5FD" />
            The Velociti Experience
          </div>
          <h2 className="font-black text-white leading-tight mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Speed is our<br /><span style={{ color: "#86EFAC" }}>core promise.</span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
            Every rider on our network is equipped with intelligent routing that adapts to live traffic, reducing average delivery times by 40% compared to traditional platforms.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="flex flex-col gap-4">
          {[
            { label: "Average Delivery Time", value: "18 min", icon: Timer, accent: "#86EFAC" },
            { label: "On-Time Delivery Rate", value: "99.4%", icon: Shield, accent: "#3B82F6" },
            { label: "Rider Network Growth", value: "+340% YoY", icon: TrendingUp, accent: "#A78BFA" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "rgba(15,23,42,0.8)", backdropFilter: "blur(12px)", border: "1px solid #1E293B" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.accent}18` }}>
                  <Icon size={18} style={{ color: s.accent }} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#64748B] mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
                </div>
                <div className="text-xl font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: s.accent }}>{s.value}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
