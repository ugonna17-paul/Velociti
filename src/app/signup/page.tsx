"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, Check, ChevronDown, Eye, EyeOff } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const FLOATING_PRODUCTS = [
  {
    img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc3ODMyNDE3OHww&ixlib=rb-4.1.0&q=80&w=400",
    name: "Gourmet Burger",
    category: "Fast Food",
    time: "15 min",
    delay: 0,
  },
  {
    img: "https://images.unsplash.com/photo-1700324828870-43027cba6d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzgxMzUzMDB8MA&ixlib=rb-4.1.0&q=80&w=400",
    name: "Premium Sushi",
    category: "Japanese",
    time: "25 min",
    delay: 0.2,
  },
  {
    img: "https://images.unsplash.com/photo-1751200365135-9e9eb01a2919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMGdyb2NlcmllcyUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3ODMyNDE3OXww&ixlib=rb-4.1.0&q=80&w=400",
    name: "Fresh Groceries",
    category: "Organic",
    time: "20 min",
    delay: 0.4,
  },
  {
    img: "https://images.unsplash.com/photo-1696861308115-54a5e5a134b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwaGFybWFjeSUyMG1lZGljaW5lJTIwaGVhbHRoY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3ODMyNDE4MHww&ixlib=rb-4.1.0&q=80&w=400",
    name: "Healthcare",
    category: "Pharmacy",
    time: "30 min",
    delay: 0.6,
  },
  {
    img: "https://images.unsplash.com/photo-1585501954837-9d99d09aa2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMHBhY2thZ2UlMjBib3glMjBjYXJkYm9hcmR8ZW58MXx8fHwxNzc4MzI0MTgwfDA&ixlib=rb-4.1.0&q=80&w=400",
    name: "Package Delivery",
    category: "Logistics",
    time: "45 min",
    delay: 0.8,
  },
  {
    img: "https://images.unsplash.com/photo-1651978595416-f665fd4014ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBkZWxpdmVyeSUyMGl0YWxpYW58ZW58MXx8fHwxNzc4MzI0MTgxfDA&ixlib=rb-4.1.0&q=80&w=400",
    name: "Fresh Pizza",
    category: "Italian",
    time: "22 min",
    delay: 1,
  },
];

const ROLES = [
  { id: "customer", label: "Customer", desc: "Order from vendors" },
  { id: "vendor", label: "Vendor", desc: "Sell your products" },
  { id: "rider", label: "Rider", desc: "Deliver orders" },
];

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const selectedRole = ROLES.find((r) => r.id === formData.role);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative pt-16">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 20% 30%, #86EFAC22, transparent 40%), radial-gradient(circle at 80% 70%, #3B82F622, transparent 40%)",
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
                Join Velociti
              </h1>
              <p
                className="text-[#94A3B8] text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The future of smart delivery and logistics
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div className="relative">
                <label
                  className="block text-xs font-medium text-[#94A3B8] mb-2 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  FULL NAME
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                  />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#0F172A] border rounded-xl text-sm transition-all duration-300 outline-none"
                    style={{
                      borderColor: focusedField === "fullName" ? "#86EFAC" : "#1E293B",
                      boxShadow: focusedField === "fullName" ? "0 0 0 3px rgba(134,239,172,0.1)" : "none",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#0F172A] border rounded-xl text-sm transition-all duration-300 outline-none"
                    style={{
                      borderColor: focusedField === "email" ? "#86EFAC" : "#1E293B",
                      boxShadow: focusedField === "email" ? "0 0 0 3px rgba(134,239,172,0.1)" : "none",
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
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-12 py-3.5 bg-[#0F172A] border rounded-xl text-sm transition-all duration-300 outline-none"
                    style={{
                      borderColor: focusedField === "password" ? "#86EFAC" : "#1E293B",
                      boxShadow: focusedField === "password" ? "0 0 0 3px rgba(134,239,172,0.1)" : "none",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="Create a strong password"
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

              {/* Confirm Password */}
              <div className="relative">
                <label
                  className="block text-xs font-medium text-[#94A3B8] mb-2 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    onFocus={() => setFocusedField("confirmPassword")}
                    onBlur={() => setFocusedField("")}
                    className="w-full pl-12 pr-12 py-3.5 bg-[#0F172A] border rounded-xl text-sm transition-all duration-300 outline-none"
                    style={{
                      borderColor: focusedField === "confirmPassword" ? "#86EFAC" : "#1E293B",
                      boxShadow: focusedField === "confirmPassword" ? "0 0 0 3px rgba(134,239,172,0.1)" : "none",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#94A3B8] transition-colors cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Role Selector */}
              <div className="relative">
                <label
                  className="block text-xs font-medium text-[#94A3B8] mb-2 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  I AM A
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                    className="w-full px-4 py-3.5 bg-[#0F172A] border border-[#1E293B] rounded-xl text-sm text-left transition-all duration-300 hover:border-[#86EFAC] outline-none flex items-center justify-between cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <div>
                      <div className="text-white font-medium">{selectedRole?.label}</div>
                      <div className="text-xs text-[#64748B] mt-0.5">{selectedRole?.desc}</div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-[#64748B] transition-transform duration-200 ${
                        showRoleDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {showRoleDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 w-full mt-2 bg-[#0F172A] border border-[#1E293B] rounded-xl overflow-hidden shadow-2xl"
                        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
                      >
                        {ROLES.map((role) => (
                          <button
                            key={role.id}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, role: role.id });
                              setShowRoleDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-[#1E293B] transition-colors flex items-center justify-between group cursor-pointer"
                          >
                            <div>
                              <div
                                className="text-white text-sm font-medium group-hover:text-[#86EFAC] transition-colors"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                              >
                                {role.label}
                              </div>
                              <div
                                className="text-xs text-[#64748B] mt-0.5"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                              >
                                {role.desc}
                              </div>
                            </div>
                            {formData.role === role.id && (
                              <Check size={16} className="text-[#86EFAC]" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Create Account Button */}
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
                Create Account
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

              {/* Sign In Link */}
              <p
                className="text-center text-sm text-[#94A3B8] mt-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#86EFAC] hover:underline font-medium"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Cinematic Visual */}
        <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#020617] p-12">
          {/* Background glow */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{ background: "#86EFAC" }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{ background: "#3B82F6" }}
            />
          </div>

          {/* Floating Product Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              {FLOATING_PRODUCTS.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: product.delay }}
                  className="relative group"
                  style={{
                    animation: `floatY ${4 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${product.delay}s`,
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #1E293B, #0F172A)",
                      border: "1px solid #1E293B",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Card Info */}
                    <div className="p-4">
                      <h3
                        className="text-white text-sm font-semibold mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="text-xs text-[#86EFAC]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {product.category}
                        </span>
                        <span
                          className="text-xs text-[#64748B]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {product.time}
                        </span>
                      </div>
                    </div>

                    {/* Glassmorphism overlay on hover */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-12 left-12 bg-[#0F172A]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(134,239,172,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#86EFAC] to-[#4ADE80] flex items-center justify-center">
                <Check size={18} className="text-[#020617]" />
              </div>
              <div>
                <div
                  className="text-xs text-[#64748B]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Active Orders Today
                </div>
                <div
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  12,483
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-12 right-12 bg-[#0F172A]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-4 shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(59,130,246,0.15)" }}
          >
            <div
              className="text-xs text-[#64748B] mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Real-time Deliveries
            </div>
            <div className="flex items-center gap-4">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                420+
              </div>
              <div className="text-xs text-[#3B82F6] font-medium">
                ↑ 24% today
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
