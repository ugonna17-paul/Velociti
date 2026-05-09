"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import GreenValleyImg from "@/app/GreenValley.jpg";
import SuperBazaarImg from "@/app/SuperBazaar.jpg";

const CATEGORIES = ["All", "Food & Dining", "Groceries", "Pharmacy", "Courier", "Electronics"];

const VENDORS = [
  // Food & Dining
  {
    name: "Burger Republic",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Food & Dining",
    orders: "2,341 orders today",
    accent: "#FB923C",
    category: "Food & Dining",
  },
  {
    name: "Sakura Fine Dining",
    img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Premium Dining",
    orders: "892 orders today",
    accent: "#A78BFA",
    category: "Food & Dining",
  },
  {
    name: "Pizza Palace",
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Food & Dining",
    orders: "1,567 orders today",
    accent: "#FB923C",
    category: "Food & Dining",
  },
  // Groceries
  {
    name: "FreshMart",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Organic",
    orders: "5,892 orders today",
    accent: "#86EFAC",
    category: "Groceries",
  },
  {
    name: "Green Valley",
    img: GreenValleyImg.src,
    badge: "LIVE",
    cat: "Groceries",
    orders: "3,421 orders today",
    accent: "#86EFAC",
    category: "Groceries",
  },
  {
    name: "Super Bazaar",
    img: SuperBazaarImg.src,
    badge: "LIVE",
    cat: "Groceries",
    orders: "4,156 orders today",
    accent: "#86EFAC",
    category: "Groceries",
  },
  // Pharmacy
  {
    name: "MediRun Pharmacy",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Healthcare",
    orders: "1,234 orders today",
    accent: "#3B82F6",
    category: "Pharmacy",
  },
  {
    name: "HealthCare Plus",
    img: "https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
    badge: "LIVE",
    cat: "Pharmacy",
    orders: "892 orders today",
    accent: "#3B82F6",
    category: "Pharmacy",
  },
  {
    name: "Medicine Hub",
    img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
    badge: "LIVE",
    cat: "Healthcare",
    orders: "1,567 orders today",
    accent: "#3B82F6",
    category: "Pharmacy",
  },
  // Courier
  {
    name: "Express Courier",
    img: "https://images.unsplash.com/photo-1759153957865-93e31e0c4c26?w=320&h=200&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Logistics",
    orders: "3,421 orders today",
    accent: "#A78BFA",
    category: "Courier",
  },
  {
    name: "Swift Delivery",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Courier",
    orders: "2,156 orders today",
    accent: "#A78BFA",
    category: "Courier",
  },
  {
    name: "PackageNow",
    img: "https://images.unsplash.com/photo-1777014631594-4b861bafc3ee?w=320&h=200&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Logistics",
    orders: "2,789 orders today",
    accent: "#A78BFA",
    category: "Courier",
  },
  // Electronics
  {
    name: "TechHub Store",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Electronics",
    orders: "1,892 orders today",
    accent: "#FB923C",
    category: "Electronics",
  },
  {
    name: "GadgetWorld",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Electronics",
    orders: "1,456 orders today",
    accent: "#FB923C",
    category: "Electronics",
  },
  {
    name: "ElectroMart",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&auto=format",
    badge: "LIVE",
    cat: "Electronics",
    orders: "2,234 orders today",
    accent: "#FB923C",
    category: "Electronics",
  },
];

export function MarketplaceSection() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredVendors = activeCat === "All" ? VENDORS : VENDORS.filter((v) => v.category === activeCat);

  return (
    <section id="marketplace" className="py-28 px-6 lg:px-8" style={{ background: "#020617" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "rgba(134,239,172,0.1)", border: "1px solid rgba(134,239,172,0.25)", color: "#86EFAC", fontFamily: "'Inter', sans-serif" }}>
              Marketplace
            </div>
            <h2 className="font-black text-white leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}>
              Hundreds of vendors.<br /><span style={{ color: "#86EFAC" }}>One seamless cart.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: activeCat === c ? "#86EFAC" : "rgba(30,41,59,0.7)",
                  color: activeCat === c ? "#020617" : "#94A3B8",
                  border: activeCat === c ? "1px solid #86EFAC" : "1px solid #1E293B",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {filteredVendors.map((v, i) => (
            <motion.div
              key={`${v.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden group cursor-pointer"
              style={{ background: "#0F172A", border: "1px solid #1E293B" }}
            >
              <div className="relative h-44 overflow-hidden bg-[#1E293B]">
                <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)" }} />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: `${v.accent}20`, border: `1px solid ${v.accent}40`, color: v.accent, fontFamily: "'Inter', sans-serif" }}>
                  <Radio size={7} className="blink" />
                  {v.badge}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>{v.name}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${v.accent}15`, color: v.accent, fontFamily: "'Inter', sans-serif" }}>
                    {v.cat}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{v.orders}</p>
                <button
                  className="w-full py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 hover:opacity-80"
                  style={{
                    background: `${v.accent}18`,
                    color: v.accent,
                    border: `1px solid ${v.accent}30`,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
