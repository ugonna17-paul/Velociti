"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useAccent } from "@/context/AccentContext";

export function Nav() {
  const { accent } = useAccent();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Vendors", href: "#marketplace" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(2,6,23,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1E293B" : "1px solid transparent",
        scrollBehavior: "smooth",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-7" style={{ fontFamily: "'Inter', sans-serif" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 tracking-wide cursor-pointer">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => router.push("/login")} className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/signup")}
            className="px-5 py-2 text-sm font-semibold text-[#020617] rounded-full transition-all duration-700 cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, #4ADE80 100%)`,
              boxShadow: `0 0 24px ${accent}55`,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Get Started
          </motion.button>
        </div>
        <button className="md:hidden text-white p-1 cursor-pointer" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[#1E293B] bg-[#020617]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-[#94A3B8] hover:text-white transition-colors py-1 text-sm cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {l.label}
                </a>
              ))}
              <button onClick={() => router.push("/signup")} className="w-full py-3 text-sm font-semibold text-[#020617] rounded-full cursor-pointer" style={{ background: `linear-gradient(135deg, ${accent}, #4ADE80)`, fontFamily: "'Inter', sans-serif" }}>
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
