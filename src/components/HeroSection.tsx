"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Zap, Bell, CheckCircle, ShoppingBag, Bike, Package,
  Globe, Lock, Navigation, BarChart3, Star, ArrowRight, Menu, X,
  Play, TrendingUp, Timer, Radio, Shield, ChevronLeft, ChevronRight
} from "lucide-react";
import { Particles } from "./Particles";
import { useAccent } from "@/context/AccentContext";

// ── Slide data ──────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    category: "Food & Dining",
    headline: "Hot meals\ndelivered in\nminutes.",
    sub: "From your favorite burger spots to local restaurants, enjoy fast and seamless delivery with real-time tracking.",
    cta1: "Order Food",
    cta2: "Explore Restaurants",
    accent: "#FB923C",
    accentDim: "rgba(251,146,60,0.12)",
    accentGlow: "rgba(251,146,60,0.25)",
    bgImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&h=900&fit=crop&auto=format",
    cardImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=480&h=640&fit=crop&auto=format",
    vendor: "Burger Republic",
    vendorSub: "Fast Food · American",
    time: "18 min",
    rating: "4.9",
    trackingName: "Ahmed K.",
    trackingStatus: "En route · 3 min away",
    trackingPct: 78,
    notif: "Your burger is almost here!",
    stats: [
      { label: "Orders Today", value: "3,241" },
      { label: "Restaurants", value: "420+" },
      { label: "Avg Delivery", value: "18 min" },
    ],
  },
  {
    id: 1,
    category: "Premium Dining",
    headline: "Fresh flavors\ndelivered\ninstantly.",
    sub: "Experience premium dining from top-rated sushi vendors delivered directly to your doorstep in perfect condition.",
    cta1: "Order Sushi",
    cta2: "View Vendors",
    accent: "#A78BFA",
    accentDim: "rgba(167,139,250,0.12)",
    accentGlow: "rgba(167,139,250,0.25)",
    bgImg: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=1600&h=900&fit=crop&auto=format",
    cardImg: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=480&h=640&fit=crop&auto=format",
    vendor: "Sakura Fine Dining",
    vendorSub: "Japanese · Premium",
    time: "25 min",
    rating: "5.0",
    trackingName: "Kenji R.",
    trackingStatus: "Picked up · 5 min away",
    trackingPct: 62,
    notif: "Your sushi order is packed!",
    stats: [
      { label: "Premium Vendors", value: "180+" },
      { label: "Orders Today", value: "1,876" },
      { label: "Avg Delivery", value: "25 min" },
    ],
  },
  {
    id: 2,
    category: "Grocery Delivery",
    headline: "Daily essentials\nwithout\nthe stress.",
    sub: "Shop groceries, fresh produce, drinks, and household essentials from nearby vendors with live delivery tracking.",
    cta1: "Shop Groceries",
    cta2: "Start Shopping",
    accent: "#86EFAC",
    accentDim: "rgba(134,239,172,0.12)",
    accentGlow: "rgba(134,239,172,0.25)",
    bgImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&h=900&fit=crop&auto=format",
    cardImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=480&h=640&fit=crop&auto=format",
    vendor: "FreshMart",
    vendorSub: "Groceries · Organic",
    time: "22 min",
    rating: "4.8",
    trackingName: "Fatima O.",
    trackingStatus: "Packing your order",
    trackingPct: 38,
    notif: "Your groceries are being packed!",
    stats: [
      { label: "Grocery Stores", value: "630+" },
      { label: "Products", value: "12,000+" },
      { label: "Orders Today", value: "5,892" },
    ],
  },
  {
    id: 3,
    category: "Healthcare",
    headline: "Healthcare\ndelivered when\nyou need it.",
    sub: "Get medications and wellness essentials delivered safely and quickly from certified pharmacies near you.",
    cta1: "Order Essentials",
    cta2: "Find Pharmacies",
    accent: "#3B82F6",
    accentDim: "rgba(59,130,246,0.12)",
    accentGlow: "rgba(59,130,246,0.25)",
    bgImg: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&h=900&fit=crop&auto=format",
    cardImg: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=480&h=640&fit=crop&auto=format",
    vendor: "MediRun Pharmacy",
    vendorSub: "Healthcare · Certified",
    time: "30 min",
    rating: "4.9",
    trackingName: "Dr. James A.",
    trackingStatus: "Verified · Dispatched",
    trackingPct: 55,
    notif: "Your medication is on its way!",
    stats: [
      { label: "Pharmacies", value: "240+" },
      { label: "Products", value: "8,500+" },
      { label: "Avg Delivery", value: "30 min" },
    ],
  },
];

const SLIDE_DURATION = 5500;

const textItem = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
} as any;

export function HeroSection() {
  const { setAccent } = useAccent();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slide = SLIDES[active];

  const advance = (dir: 1 | -1 = 1) => {
    setActive((a) => (a + dir + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    setAccent(slide.accent);
  }, [active, slide.accent, setAccent]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => advance(1), SLIDE_DURATION);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [active, paused]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "#020617" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Cinematic background crossfade ── */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={`bg-${active}`}
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.bgImg})` }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        {/* Static dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(2,6,23,0.96) 0%, rgba(2,6,23,0.85) 50%, rgba(2,6,23,0.75) 100%)" }} />
      </div>

      {/* ── Accent glow — transitions via CSS ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 65% 45%, ${slide.accentDim} 0%, transparent 70%)`,
        }}
      />
      {/* Left glow edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 0% 50%, ${slide.accentDim.replace("0.12", "0.06")} 0%, transparent 100%)`,
        }}
      />

      <Particles count={32} accent={slide.accent} />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen pt-24 pb-20">

          {/* LEFT COLUMN — all text changes together */}
          <div className="relative" style={{ minHeight: 440 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${active}`}
                className="absolute inset-0 flex flex-col justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -24, transition: { duration: 0.28, ease: "easeIn" } }}
              >
                {/* Category label */}
                <motion.div
                  custom={0.0}
                  variants={textItem}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-7 self-start"
                  style={{
                    background: `${slide.accent}18`,
                    border: `1px solid ${slide.accent}35`,
                    color: slide.accent,
                    fontFamily: "'Inter', sans-serif",
                    transition: "background 0.8s, border-color 0.8s, color 0.8s",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full blink" style={{ background: slide.accent }} />
                  {slide.category}
                </motion.div>

                {/* Headline */}
                <motion.h1
                  custom={0.08}
                  variants={textItem}
                  initial="hidden"
                  animate="visible"
                  className="font-black leading-[1.07] tracking-tight mb-6 whitespace-pre-line"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(2.6rem, 5vw, 4.6rem)",
                    color: "#F8FAFC",
                  }}
                >
                  {slide.headline.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {i === 0 ? (
                        <span
                          style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            background: `linear-gradient(135deg, ${slide.accent} 0%, #F8FAFC 60%)`,
                            backgroundClip: "text",
                          }}
                        >
                          {line}
                        </span>
                      ) : (
                        line
                      )}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  custom={0.18}
                  variants={textItem}
                  initial="hidden"
                  animate="visible"
                  className="text-[#94A3B8] text-base lg:text-lg leading-relaxed mb-9 max-w-md"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {slide.sub}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  custom={0.28}
                  variants={textItem}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#020617] text-sm cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accent} 0%, ${slide.accent}bb 100%)`,
                      boxShadow: `0 0 32px ${slide.accentGlow}`,
                      fontFamily: "'Inter', sans-serif",
                      transition: "box-shadow 0.7s",
                    }}
                  >
                    {slide.cta1}
                    <ArrowRight size={15} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm cursor-pointer"
                    style={{
                      border: `1px solid ${slide.accent}40`,
                      background: "rgba(15,23,42,0.7)",
                      fontFamily: "'Inter', sans-serif",
                      transition: "border-color 0.7s",
                    }}
                  >
                    {slide.cta2}
                  </motion.button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  custom={0.37}
                  variants={textItem}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-7"
                >
                  {slide.stats.map((s) => (
                    <div key={s.label}>
                      <div
                        className="text-2xl font-black"
                        style={{ fontFamily: "'Poppins', sans-serif", color: slide.accent, transition: "color 0.7s" }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs text-[#64748B] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN — product card + floating widgets */}
          <div className="relative flex justify-center items-center" style={{ minHeight: 520 }}>
            {/* Main product card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${active}`}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: 300,
                  height: 420,
                  border: `1px solid ${slide.accent}30`,
                  boxShadow: `0 32px 80px rgba(0,0,0,0.55), 0 0 60px ${slide.accentDim}`,
                }}
                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.06, y: -16, transition: { duration: 0.32 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={slide.cardImg}
                  alt={slide.vendor}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,6,23,0.95) 30%, rgba(2,6,23,0.1) 70%)" }} />

                {/* Top badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: `${slide.accent}20`, border: `1px solid ${slide.accent}40`, color: slide.accent, fontFamily: "'Inter', sans-serif" }}
                  >
                    <Radio size={7} className="blink" />
                    {slide.category}
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-bold text-lg mb-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {slide.vendor}
                  </div>
                  <div className="text-xs text-[#94A3B8] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {slide.vendorSub}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <Timer size={11} style={{ color: slide.accent }} />
                      <span className="text-[#CBD5E1]">{slide.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <Star size={11} fill="#FDE047" color="#FDE047" />
                      <span className="text-[#CBD5E1]">{slide.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating widgets — change with slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`widgets-${active}`}
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                {/* Tracking card — left */}
                <motion.div
                  className="absolute float-y"
                  style={{ left: -8, top: "22%", minWidth: 190, animationDelay: "0s" }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
                >
                  <div
                    className="rounded-2xl p-3.5"
                    style={{
                      background: "rgba(15,23,42,0.88)",
                      backdropFilter: "blur(14px)",
                      border: "1px solid #1E293B",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-[#020617]"
                        style={{ background: slide.accent }}
                      >
                        {slide.trackingName.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{slide.trackingName}</div>
                        <div className="text-[10px]" style={{ color: slide.accent, fontFamily: "'Inter', sans-serif" }}>{slide.trackingStatus}</div>
                      </div>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#1E293B]">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${slide.trackingPct}%`, background: `linear-gradient(90deg, ${slide.accent}, ${slide.accent}88)` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[9px] text-[#475569]" style={{ fontFamily: "'Inter', sans-serif" }}>Pickup</span>
                      <span className="text-[9px] font-medium" style={{ color: slide.accent, fontFamily: "'Inter', sans-serif" }}>{slide.trackingPct}%</span>
                      <span className="text-[9px] text-[#475569]" style={{ fontFamily: "'Inter', sans-serif" }}>You</span>
                    </div>
                  </div>
                </motion.div>

                {/* Notification — top right */}
                <motion.div
                  className="absolute float-y-alt"
                  style={{ right: -4, top: "8%", animationDelay: "1.2s" }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                >
                  <div
                    className="rounded-2xl px-3.5 py-2.5"
                    style={{
                      background: `${slide.accent}18`,
                      border: `1px solid ${slide.accent}35`,
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Bell size={11} style={{ color: slide.accent }} />
                      <span className="text-xs font-medium" style={{ color: slide.accent, fontFamily: "'Inter', sans-serif" }}>{slide.notif}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Order badge — bottom right */}
                <motion.div
                  className="absolute float-y"
                  style={{ right: 12, bottom: "12%", animationDelay: "0.7s" }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.65, duration: 0.5 } }}
                >
                  <div
                    className="rounded-2xl p-3"
                    style={{
                      background: "rgba(15,23,42,0.88)",
                      backdropFilter: "blur(14px)",
                      border: "1px solid #1E293B",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={12} style={{ color: slide.accent }} />
                      <span className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Order Confirmed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {["Placed", "Ready", "En Route", "Delivered"].map((s, i) => (
                        <div key={s} className="flex items-center gap-0.5">
                          <div className="w-2 h-2 rounded-full" style={{ background: i <= 1 ? slide.accent : "#1E293B" }} />
                          {i < 3 && <div className="w-3 h-px" style={{ background: i < 1 ? slide.accent : "#1E293B" }} />}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail strip — mini slide preview cards */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
              {SLIDES.map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl overflow-hidden relative cursor-pointer"
                  style={{
                    width: i === active ? 52 : 40,
                    height: i === active ? 36 : 28,
                    border: `1.5px solid ${i === active ? s.accent : "#1E293B"}`,
                    boxShadow: i === active ? `0 0 12px ${s.accent}55` : "none",
                    transition: "all 0.35s ease",
                  }}
                >
                  <img src={s.cardImg.replace("480&h=640", "80&h=60")} alt={s.vendor} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: i === active ? `${s.accent}22` : "rgba(2,6,23,0.4)" }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom controls bar ── */}
      <div className="relative z-10 pb-6 pt-16 px-6 lg:px-8 max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Slide counter */}
        <div className="text-xs text-[#475569]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="text-white font-semibold">{String(active + 1).padStart(2, "0")}</span>
          <span className="mx-1">/</span>
          {String(SLIDES.length).padStart(2, "0")}
        </div>

        {/* Progress strip + prev/next */}
        <div className="flex items-center gap-4">
          {/* Auto-progress bar */}
          <div className="hidden sm:flex gap-1.5 items-center">
            {SLIDES.map((s, i) => (
              <button key={s.id} onClick={() => setActive(i)} className="relative h-0.5 rounded-full overflow-hidden cursor-pointer" style={{ width: i === active ? 48 : 20, background: "#1E293B", transition: "width 0.35s ease" }}>
                {i === active && (
                  <motion.div
                    key={active}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: slide.accent }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Arrow nav */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => advance(-1)}
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              style={{ border: "1px solid #1E293B", background: "rgba(15,23,42,0.7)" }}
            >
              <ChevronLeft size={14} color="#94A3B8" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => advance(1)}
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              style={{ border: `1px solid ${slide.accent}50`, background: `${slide.accent}15`, transition: "border-color 0.7s, background 0.7s" }}
            >
              <ChevronRight size={14} style={{ color: slide.accent }} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none" style={{ background: "linear-gradient(to top, #020617, transparent)" }} />
    </section>
  );
}

// ── Global keyframes ────────────────────────────────────────────────────────
export const GlobalStyles = () => (
  <style>{`
    @keyframes floatY {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes floatYAlt {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-7px); }
    }
    @keyframes particleRise {
      0%   { transform: translateY(0px) translateX(0px) scale(1); opacity: 0; }
      15%  { opacity: 0.8; }
      85%  { opacity: 0.3; }
      100% { transform: translateY(-100px) translateX(var(--dx, 20px)) scale(0.2); opacity: 0; }
    }
    @keyframes ticker {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes blink {
      0%,100% { opacity: 1; }
      50%     { opacity: 0.2; }
    }
    @keyframes gradMove {
      0%,100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }
    .float-y       { animation: floatY 4s ease-in-out infinite; }
    .float-y-alt   { animation: floatYAlt 5.5s ease-in-out infinite; }
    .blink         { animation: blink 2s ease-in-out infinite; }
    html { scroll-behavior: smooth; }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #020617; }
    ::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #334155; }
    * { -webkit-font-smoothing: antialiased; }
  `}</style>
);
