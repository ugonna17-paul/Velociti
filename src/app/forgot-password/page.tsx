"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

interface Particle {
  id: number;
  left: string;
  top: string;
  animation: string;
  animationDelay: string;
  dx: string;
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `particleRise ${10 + Math.random() * 5}s linear infinite`,
      animationDelay: `${Math.random() * 8}s`,
      dx: `${(Math.random() - 0.5) * 80}px`,
    }));
    setParticles(generatedParticles);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative pt-16">
      <style>{`
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

      {/* Soft background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 40% 30%, #86EFAC12, transparent 50%), radial-gradient(circle at 60% 70%, #3B82F618, transparent 50%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#3B82F6] rounded-full opacity-20"
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
            {/* Back Button */}
            <Link href="/login">
              <motion.div
                whileHover={{ x: -4 }}
                className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white transition-colors mb-8 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ArrowLeft size={16} />
                Back to Sign In
              </motion.div>
            </Link>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="mb-8">
                  <h1
                    className="text-4xl font-bold mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Reset Password
                  </h1>
                  <p
                    className="text-[#94A3B8] text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Enter your email address and we'll send you a secure link to reset your password.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        required
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

                  {/* Send Reset Link Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl font-semibold text-sm text-[#020617] transition-all duration-300 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, #86EFAC 0%, #4ADE80 100%)",
                      boxShadow: "0 0 30px rgba(134,239,172,0.4)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Send Reset Link
                  </motion.button>

                  {/* Info message */}
                  <div className="mt-6 p-4 bg-[#0F172A] border border-[#1E293B] rounded-xl">
                    <div className="flex gap-3">
                      <Shield
                        size={18}
                        className="text-[#3B82F6] flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p
                          className="text-xs text-[#94A3B8] leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          For your security, the reset link will expire in 1 hour. If you don't receive an email within a few minutes, check your spam folder.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <>
                {/* Success State */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#86EFAC] to-[#4ADE80] mb-6"
                  >
                    <CheckCircle2 size={40} className="text-[#020617]" />
                  </motion.div>

                  <h1
                    className="text-3xl font-bold mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Check Your Email
                  </h1>
                  <p
                    className="text-[#94A3B8] text-sm leading-relaxed mb-8"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    We've sent a password reset link to{" "}
                    <span className="text-white font-medium">{email}</span>
                  </p>

                  <div className="space-y-10">
                    <Link href="/login">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block w-full py-3.5 rounded-xl font-semibold text-sm text-[#020617] transition-all duration-300 text-center cursor-pointer"
                        style={{
                          background:
                            "linear-gradient(135deg, #86EFAC 0%, #4ADE80 100%)",
                          boxShadow: "0 0 30px rgba(134,239,172,0.4)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Return to Sign In
                      </motion.div>
                    </Link>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full py-3.5 rounded-xl font-medium text-sm bg-white/5 border border-[#1E293B] hover:bg-white/10 hover:border-[#334155] transition-all duration-300 cursor-pointer"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Resend Email
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* RIGHT SIDE - Soft Cinematic Visual */}
        <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#020617] to-[#1E293B]">
          {/* Nighttime city gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#86EFAC]/5" />

          {/* Central glow effect */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #3B82F6, #86EFAC, transparent)",
              }}
            />
          </div>

          {/* Floating UI Cards */}
          <div className="relative z-10 space-y-6 max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#0F172A]/70 backdrop-blur-2xl border border-[#1E293B] rounded-2xl p-6 shadow-2xl"
              style={{ boxShadow: "0 20px 60px rgba(59,130,246,0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Secure Reset Process
                  </h3>
                  <p
                    className="text-xs text-[#94A3B8] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    We use industry-standard encryption to protect your account. Your reset link is unique and expires after one use.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#0F172A]/70 backdrop-blur-2xl border border-[#1E293B] rounded-2xl p-6 shadow-2xl"
              style={{ boxShadow: "0 20px 60px rgba(134,239,172,0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#86EFAC] to-[#4ADE80] flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#020617]" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Check Your Inbox
                  </h3>
                  <p
                    className="text-xs text-[#94A3B8] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Look for an email from Velociti with instructions to reset your password. It should arrive within minutes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-[#0F172A]/70 backdrop-blur-2xl border border-[#1E293B] rounded-2xl p-6 shadow-2xl"
              style={{ boxShadow: "0 20px 60px rgba(167,139,250,0.2)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Quick Access Restored
                  </h3>
                  <p
                    className="text-xs text-[#94A3B8] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Once you reset your password, you'll regain instant access to all your orders and delivery tracking.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8"
          >
            {/* <div className="text-center">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                99.9%
              </div>
              <div
                className="text-[10px] text-[#64748B] uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Uptime
              </div>
            </div>
            <div className="w-px h-8 bg-[#1E293B]" />
            <div className="text-center">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                256-bit
              </div>
              <div
                className="text-[10px] text-[#64748B] uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Encryption
              </div>
            </div>
            <div className="w-px h-8 bg-[#1E293B]" />
            <div className="text-center">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                24/7
              </div>
              <div
                className="text-[10px] text-[#64748B] uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Support
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
