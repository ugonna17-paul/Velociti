"use client";

const TICKER_ITEMS = [
  "342 Active Riders",
  "12,847 Deliveries Today",
  "4.9★ Average Rating",
  "Sub-60s Dispatch",
  "1,800+ Vendor Partners",
  "Real-Time GPS Tracking",
  "40+ Cities",
  "99.4% On-Time Rate",
  "Instant Multi-Vendor Checkout",
];

export function TickerBar() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden py-3.5 border-y border-[#1E293B]" style={{ background: "#0F172A" }}>
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "ticker 28s linear infinite", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
            <span className="text-[#94A3B8]">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
