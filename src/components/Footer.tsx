"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

const FOOTER_COLS = [
  { label: "Product", links: ["Features", "Marketplace", "Tracking", "Analytics", "Pricing"] },
  { label: "Company", links: ["About Us", "Careers", "Press", "Blog", "Partners"] },
  { label: "Support", links: ["Help Center", "Contact", "Status", "API Docs", "Community"] },
];

export function Footer() {
  return (
    <footer style={{ background: "#0F172A", borderTop: "1px solid #1E293B" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <Logo size={28} />
            <p className="text-sm text-[#64748B] leading-relaxed mt-4 max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              The intelligent multi-vendor delivery platform. Fast, seamless, and built for the future of urban logistics.
            </p>
            <div className="flex gap-3 mt-6">
              {["X", "IG", "LI", "YT"].map((s) => (
                <motion.button
                  key={s}
                  whileHover={{ scale: 1.1, borderColor: "#86EFAC", color: "#86EFAC" }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-[#64748B] transition-colors cursor-pointer"
                  style={{ border: "1px solid #1E293B", fontFamily: "'Inter', sans-serif" }}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.label}>
              <div className="text-xs font-bold uppercase tracking-widest text-[#475569] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{col.label}</div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#64748B] hover:text-white transition-colors duration-200 cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#1E293B]">
          <p className="text-xs text-[#475569]" style={{ fontFamily: "'Inter', sans-serif" }}>© 2026 Velociti Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-xs text-[#475569] hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
