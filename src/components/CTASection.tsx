"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Particles } from "./Particles";

export function CTASection() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden" style={{ background: "#020617" }}>
      <Particles count={45} accent="#86EFAC" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(74,222,128,0.08) 0%, rgba(59,130,246,0.04) 50%, transparent 70%)" }} />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8" style={{ background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.25)", color: "#86EFAC", fontFamily: "'Inter', sans-serif" }}>
          Join Velociti Today
        </div>
        <h2 className="font-black text-white leading-[1.1] mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
          The Future Of Smart<br />
          <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", background: "linear-gradient(135deg, #86EFAC 0%, #4ADE80 40%, #3B82F6 100%)", backgroundClip: "text" }}>
            Delivery Starts Here
          </span>
        </h2>
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          Whether you are a customer, a growing vendor, or an ambitious rider — Velociti is built to accelerate you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#020617] cursor-pointer" style={{ background: "linear-gradient(135deg, #86EFAC, #4ADE80)", boxShadow: "0 0 40px rgba(74,222,128,0.45)", fontFamily: "'Inter', sans-serif" }}>
            Launch Your Store <ArrowRight size={16} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white cursor-pointer" style={{ border: "1px solid #1E293B", background: "rgba(15,23,42,0.6)", fontFamily: "'Inter', sans-serif" }}>
            Start Delivering
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
