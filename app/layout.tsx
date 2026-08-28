import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hedera x AI | Enterprise Token Optimization",
  description: "Reduce LLM costs 30-70% with intelligent routing, semantic cache, hard budgets and immutable audit on Hedera",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}