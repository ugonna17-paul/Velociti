"use client";

import { motion } from "framer-motion";
import {
  Navigation, Zap, Globe, Bike, Lock, Bell, BarChart3, ArrowRight
} from "lucide-react";

const FEATURES = [
  { icon: Navigation, title: "Real-Time Tracking", desc: "Sub-second GPS updates, predictive ETA, and live route visualization from vendor to door.", span: "col-span-2 row-span-2", accent: "#86EFAC", bg: "https://images.unsplash.com/photo-1771575519871-685aace1e53a?w=900&h=500&fit=crop&auto=format", large: true },
  { icon: Zap, title: "Instant Dispatch", desc: "Orders matched to a rider in under 60 seconds. Our AI acts before you finish checkout.", span: "col-span-1", accent: "#3B82F6", large: false },
  { icon: Globe, title: "Multi-Vendor Cart", desc: "Shop across hundreds of vendors in one order. Combined pickups, one delivery.", span: "col-span-1", accent: "#A78BFA", large: false },
  { icon: Bike, title: "Smart Rider Assignment", desc: "Proprietary dispatch AI picks the closest rider based on load, route density, and live traffic.", span: "col-span-1 row-span-1", accent: "#FB923C", large: false },
  { icon: Lock, title: "Secure Payments", desc: "PCI-DSS compliant escrow transactions. Pay only on delivery confirmation.", span: "col-span-1", accent: "#86EFAC", large: false },
  { icon: Bell, title: "Live Notifications", desc: "Push, SMS, and in-app alerts at every stage of the delivery journey.", span: "col-span-1", accent: "#3B82F6", large: false },
  { icon: BarChart3, title: "Vendor Analytics", desc: "Real-time dashboards with order volume, revenue trends, and fulfilment metrics.", span: "col-span-1", accent: "#A78BFA", large: false },
];

function FeatureCard({ f }: { f: typeof FEATURES[0] }) {
  const Icon = f.icon;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`${f.span} relative rounded-3xl overflow-hidden group cursor-default`}
      style={{ background: f.large ? "none" : "#0F172A", border: "1px solid #1E293B", minHeight: f.large ? 280 : 180 }}
    >
      {f.large && (
        <>
          <img src={f.bg} alt={f.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(2,6,23,0.92) 30%, rgba(2,6,23,0.6) 100%)" }} />
        </>
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${f.accent}40` }} />
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}30` }}>
            <Icon size={18} style={{ color: f.accent }} />
          </div>
          <h3 className="text-white font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: f.large ? "1.4rem" : "1rem" }}>
            {f.title}
          </h3>
          <p className="text-[#94A3B8] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: f.large ? "0.95rem" : "0.82rem" }}>
            {f.desc}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all duration-200" style={{ color: f.accent, fontFamily: "'Inter', sans-serif" }}>
          Learn more <ArrowRight size={12} />
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6 lg:px-8" style={{ background: "#020617" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.25)", color: "#86EFAC", fontFamily: "'Inter', sans-serif" }}>
            Platform Features
          </div>
          <h2 className="font-black text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Everything your delivery<br />
            <span style={{ color: "#86EFAC" }}>ecosystem</span> needs.
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className={f.span}>
              <FeatureCard f={f} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
