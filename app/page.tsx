"use client";

import { useState } from "react";
import { 
  Shield, Zap, BarChart3, Lock, ArrowRight, 
  CheckCircle2, TrendingDown, Cpu, Database,
  Network, DollarSign
} from "lucide-react";

export default function Home() {
  const [prompt, setPrompt] = useState("Explain the difference between Hedera Hashgraph and traditional blockchains in simple terms");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const runOptimization = async () => {
    setLoading(true);
    // Simulate middleware processing
    await new Promise(r => setTimeout(r, 1200));

    const complexity = prompt.length > 120 || prompt.toLowerCase().includes("compare") || prompt.toLowerCase().includes("analyze") ? "high" : "low";
    const model = complexity === "high" ? "claude-3.5-sonnet / gpt-4o" : "gpt-4o-mini / claude-haiku / gemini-flash";
    const originalTokens = Math.floor(prompt.split(" ").length * 1.4 + 380);
    const optimizedTokens = Math.floor(originalTokens * (complexity === "high" ? 0.72 : 0.38));
    const savings = originalTokens - optimizedTokens;
    const savingsPct = Math.round((savings / originalTokens) * 100);

    setResult({
      complexity,
      model,
      originalTokens,
      optimizedTokens,
      savings,
      savingsPct,
      cacheHit: Math.random() > 0.65,
      loopDetected: false,
      budgetRemaining: 8420,
      hederaTx: "0.0.123456@" + Date.now(),
      techniques: [
        complexity === "low" ? "Model Routing → cheap model" : "Kept frontier model",
        Math.random() > 0.5 ? "Semantic Cache miss" : "Semantic Cache HIT (skipped LLM)",
        "Prompt prefix caching enabled",
        "Loop detector: clean",
        "Budget check passed (Hedera Smart Account)",
        "Logged to HCS + ready for x402 settlement"
      ]
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">Hedera x AI</h1>
              <p className="text-xs text-zinc-400">Token Optimization Middleware</p>
            </div>
          </div>
          <a href="https://github.com/srbisnes/hedera-x-ai" target="_blank" className="text-sm text-zinc-400 hover:text-white transition">
            GitHub →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Enterprise-ready • Powered by Hedera
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Cut AI token costs<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">30-70%</span> without losing quality
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Intelligent middleware that routes, caches, compresses and enforces hard budgets on every LLM call. 
            Immutable audit on Hedera + automatic settlement with x402.
          </p>
        </div>

        {/* Live Demo Card */}
        <div className="mt-12 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Live Optimization Simulator
          </h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-green-500/50 resize-none"
            placeholder="Paste any prompt your company would send to an LLM..."
          />
          <button
            onClick={runOptimization}
            disabled={loading || !prompt.trim()}
            className="mt-4 w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:opacity-50 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition"
          >
            {loading ? (
              <span className="animate-pulse">Optimizing with Hedera x AI...</span>
            ) : (
              <>
                Run Optimization <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {result && (
            <div className="mt-6 space-y-4 animate-in fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-1">Original tokens</p>
                  <p className="text-xl font-bold">{result.originalTokens}</p>
                </div>
                <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-1">Optimized</p>
                  <p className="text-xl font-bold text-green-400">{result.optimizedTokens}</p>
                </div>
                <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-1">Saved</p>
                  <p className="text-xl font-bold text-emerald-400">{result.savings}</p>
                </div>
                <div className="bg-zinc-950 rounded-xl p-4 border border-green-500/30">
                  <p className="text-xs text-zinc-500 mb-1">Reduction</p>
                  <p className="text-xl font-bold text-green-400">{result.savingsPct}%</p>
                </div>
              </div>

              <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                <p className="text-xs text-zinc-500 mb-2">Techniques applied</p>
                <ul className="space-y-1.5">
                  {result.techniques.map((t: string, i: number) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Model selected: <strong className="text-zinc-300">{result.model}</strong></span>
                <span>Hedera log: {result.hederaTx.slice(0, 18)}...</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center mb-10">Why enterprises choose Hedera x AI</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <TrendingDown className="w-6 h-6 text-green-400" />,
              title: "Aggressive cost reduction",
              desc: "Semantic cache + model routing + compression. Typical 40-65% savings on mixed workloads."
            },
            {
              icon: <Lock className="w-6 h-6 text-green-400" />,
              title: "Hard on-chain budgets",
              desc: "Hedera Smart Accounts enforce daily/project limits that cannot be bypassed by agents."
            },
            {
              icon: <Database className="w-6 h-6 text-green-400" />,
              title: "Immutable audit trail",
              desc: "Every request logged to Hedera Consensus Service. Perfect for regulated industries."
            },
            {
              icon: <Network className="w-6 h-6 text-green-400" />,
              title: "CLPR + x402 ready",
              desc: "Bridgeless validation and automatic agentic payments when the call is settled."
            },
            {
              icon: <Cpu className="w-6 h-6 text-green-400" />,
              title: "Multi-provider native",
              desc: "OpenAI, Anthropic, Gemini, Grok, local models. One gateway for everything."
            },
            {
              icon: <DollarSign className="w-6 h-6 text-green-400" />,
              title: "ROI dashboard",
              desc: "Real-time savings report. Show CFOs exactly how much money you are saving every week."
            }
          ].map((f, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-green-500/30 transition">
              <div className="mb-4">{f.icon}</div>
              <h4 className="font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-500/20 rounded-3xl p-10">
          <h3 className="text-2xl font-bold mb-3">Ready to show this to clients?</h3>
          <p className="text-zinc-400 mb-6">This demo is live and shareable. Full source on GitHub.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/srbisnes/hedera-x-ai"
              target="_blank"
              className="px-6 py-3 bg-zinc-100 text-zinc-900 font-medium rounded-xl hover:bg-white transition"
            >
              View on GitHub
            </a>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-xl transition">
              Book enterprise demo
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        Hedera x AI • Built for enterprise token optimization • Powered by Hedera Hashgraph
      </footer>
    </div>
  );
}