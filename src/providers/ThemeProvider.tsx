"use client";

import React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // We're now using a light-only theme, so we just pass children through
  return <>{children}</>;
}
