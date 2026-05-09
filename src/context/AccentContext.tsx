"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AccentContextType {
  accent: string;
  setAccent: (color: string) => void;
}

const AccentContext = createContext<AccentContextType | undefined>(undefined);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState("#3B82F6");

  return (
    <AccentContext.Provider value={{ accent, setAccent }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  const context = useContext(AccentContext);
  if (!context) {
    throw new Error("useAccent must be used within AccentProvider");
  }
  return context;
}
