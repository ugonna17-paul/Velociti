"use client";

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="lgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#86EFAC" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path d="M4 7 L16 25 L28 7" stroke="url(#lgGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="8" y1="13" x2="1" y2="13" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
        <line x1="9.5" y1="17.5" x2="1" y2="17.5" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      </svg>
      <span className="font-bold tracking-tight text-white" style={{ fontFamily: "'Poppins', sans-serif", fontSize: size * 0.75 }}>
        Veloci<span style={{ color: "#86EFAC" }}>ti</span>
      </span>
    </div>
  );
}
