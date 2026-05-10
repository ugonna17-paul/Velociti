"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, MapPin, Clock, Eye, EyeOff } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const FLOATING_DELIVERY_CARDS = [
  {
    img: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc3ODMyNDE3OHww&ixlib=rb-4.1.0&q=80&w=400",
    vendor: "Burger Spot",
    position: { top: "15%", left: "10%" },
    delay: 0,
    size: "small",
  },
  {
    img: "https://images.unsplash.com/photo-1700324806631-adc453ec77db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzgxMzUzMDB8MA&ixlib=rb-4.1.0&q=80&w=400",
    vendor: "Sushi Master",
    position: { top: "45%", left: "5%" },
    delay: 0.3,
    size: "medium",
  },
  {
    img: "https://images.unsplash.com/photo-1771970777765-2453734b268e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGdyb2NlcmllcyUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3ODMyNDE3OXww&ixlib=rb-4.1.0&q=80&w=400",
    vendor: "Fresh Market",
    position: { top: "70%", left: "15%" },
    delay: 0.6,
    size: "small",
  },
  {
    img: "https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwaGFybWFjeSUyMG1lZGljaW5lJTIwaGVhbHRoY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3ODMyNDE4MHww&ixlib=rb-4.1.0&q=80&w=400",
    vendor: "MediCare Plus",
    position: { top: "20%", right: "15%" },
    delay: 0.2,
    size: "small",
  },
  {
    img: "https://images.unsplash.com/photo-1651978595423-9c91f4883ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwaXp6YSUyMGZvb2QlMjBkZWxpdmVyeSUyMGl0YWxpYW58ZW58MXx8fHwxNzc4MzI0MTgxfDA&ixlib=rb-4.1.0&q=80&w=400",
    vendor: "Pizza Palace",
    position: { top: "55%", right: "10%" },
    delay: 0.5,
    size: "medium",
  },
  {
    img: "https://images.unsplash.com/photo-1772546553716-223166b787d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHBhY2thZ2UlMjBib3glMjBjYXJkYm9hcmR8ZW58MXx8fHwxNzc4MzI0MTgwfDA&ixlib=rb-4.1.0&q=80&w=400",
    vendor: "Express Delivery",
    position: { bottom: "15%", right: "20%" },
    delay: 0.8,
    size: "small",
  },
];

interface Particle {
  id: number;
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
  dx: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [focusedField, setFocusedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `particleRise ${8 + Math.random() * 4}s linear infinite`,
      animationDelay: `${Math.random() * 5}s`,
      dx: `${(Math.random() - 0.5) * 100}px`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative pt-16">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes particleRise {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) translateX(var(--dx));
          }
        }
      `}</style>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#86EFAC] rounded-full opacity-30"
            style={{
              left: particle.left,
              top: particle.top,
              animation: particle.animation,
              animationDelay: particle.animationDelay,
              "--dx": particle.dx,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, #86EFAC15, transparent 50%), radial-gradient(circle at 70% 80%, #3B82F620, transparent 50%)",
          }}
        />
      </div>

      {/* Split Screen Layout */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        {/* LEFT SIDE - Form */}
        <div className="flex items-center justify-center px-6 py-12 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            {/* Header */}
            <div className="mb-8">
              <h1
                className="text-4xl font-bold mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Welcome Back
              </h1>
              <p
                className="text-[#94A3B8] text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sign in to continue your delivery journey
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Email */}
              <div className="relative">
                <label
                  className="block text-xs font-medium text-[#94A3B8] mb-2 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#0F172A] border rounded-xl text-sm transition-all duration-300 outline-none"
                    style={{
                      borderColor:
                        focusedField === "email" ? "#86EFAC" : "#1E293B",
                      boxShadow:
                        focusedField === "email"
                          ? "0 0 0 3px rgba(134,239,172,0.1)"
                          : "none",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <label
                  className="block text-xs font-medium text-[#94A3B8] mb-2 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-12 py-3.5 bg-[#0F172A] border rounded-xl text-sm transition-all duration-300 outline-none"
                    style={{
                      borderColor:
                        focusedField === "password" ? "#86EFAC" : "#1E293B",
                      boxShadow:
                        focusedField === "password"
                          ? "0 0 0 3px rgba(134,239,172,0.1)"
                          : "none",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#94A3B8] transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.remember}
                      onChange={(e) =>
                        setFormData({ ...formData, remember: e.target.checked })
                      }
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 border-2 border-[#1E293B] rounded bg-[#0F172A] peer-checked:bg-gradient-to-br peer-checked:from-[#86EFAC] peer-checked:to-[#4ADE80] peer-checked:border-[#86EFAC] transition-all duration-200" />
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-[#020617] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-sm text-[#94A3B8] group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Remember me
                  </span>
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm text-[#86EFAC] hover:underline cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Sign In Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 mt-6 rounded-xl font-semibold text-sm text-[#020617] transition-all duration-300 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #86EFAC 0%, #4ADE80 100%)",
                  boxShadow: "0 0 30px rgba(134,239,172,0.4)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Sign In
              </motion.button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-[#1E293B]" />
                <span
                  className="text-xs text-[#64748B]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  OR
                </span>
                <div className="flex-1 h-px bg-[#1E293B]" />
              </div>

              {/* Google Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-3.5 rounded-xl font-medium text-sm bg-white/5 border border-[#1E293B] hover:bg-white/10 hover:border-[#334155] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </motion.button>

              {/* Sign Up Link */}
              <p
                className="text-center text-sm text-[#94A3B8] mt-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#86EFAC] hover:underline font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Cinematic Background Video Experience */}
        <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#020617] to-[#0F172A]">
          {/* Cinematic overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#86EFAC]/5 via-transparent to-[#3B82F6]/5" />

          {/* Central glow */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle, #86EFAC, #3B82F6, transparent)",
              }}
            />
          </div>

          {/* Floating Delivery Cards */}
          {FLOATING_DELIVERY_CARDS.map((card, i) => {
            const sizeClasses = {
              small: "w-24 h-24",
              medium: "w-32 h-32",
              large: "w-40 h-40",
            };

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: card.delay }}
                className={`absolute ${sizeClasses[card.size as keyof typeof sizeClasses]}`}
                style={{
                  ...card.position,
                  animation: `floatY ${5 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${card.delay}s`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    background: "linear-gradient(135deg, #1E293B, #0F172A)",
                    border: "1px solid #1E293B",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(134,239,172,0.1)",
                  }}
                >
                  <ImageWithFallback
                    src={card.img}
                    alt={card.vendor}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <div
                      className="text-white text-xs font-semibold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {card.vendor}
                    </div>
                  </div>

                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Floating UI Overlays */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-16 left-16 bg-[#0F172A]/90 backdrop-blur-2xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(134,239,172,0.2)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#86EFAC] to-[#4ADE80] flex items-center justify-center">
                <MapPin size={18} className="text-[#020617]" />
              </div>
              <div>
                <div
                  className="text-[10px] text-[#64748B] uppercase tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Live Tracking
                </div>
                <div
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  3 min away
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-1/2 right-16 bg-[#0F172A]/90 backdrop-blur-2xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(59,130,246,0.2)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <div
                  className="text-[10px] text-[#64748B] uppercase tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Avg Delivery
                </div>
                <div
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  18 minutes
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#0F172A]/90 backdrop-blur-2xl border border-[#1E293B] rounded-2xl px-6 py-3 shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(167,139,250,0.2)" }}
          >
            <div className="text-center">
              <div
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                850+ Vendors
              </div>
              <div
                className="text-[10px] text-[#A78BFA] uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Ready to serve you
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
