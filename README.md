# Hedera x AI

**Enterprise AI Token Optimization Middleware powered by Hedera**

Reduce LLM (OpenAI, Anthropic, Gemini, Grok...) token spend by **30-70%** while adding immutable audit, hard budgets and agentic settlement.

## The Problem
Companies are burning money on AI tokens because of:
- No intelligent model routing
- Repeated similar prompts (no semantic cache)
- Uncontrolled agent loops
- No hard budget enforcement
- Zero auditability of real consumption

## The Solution
A production-grade middleware that sits between your apps and any LLM provider and applies:

| Layer | Technique | Estimated Savings |
|-------|-----------|-------------------|
| 1 | Semantic Cache (vector similarity ≥ 0.95) | 25-45% |
| 2 | Model Routing (cheap models for simple tasks) | 20-40% |
| 3 | Prompt Compression + Prefix Caching | 15-30% |
| 4 | Loop Detection & Kill | 10-25% (agents) |
| 5 | Hard Budget Guards (Hedera Smart Accounts) | Prevents overspend |
| 6 | Immutable Logging + x402 Settlement | Audit + automatic payment |

**Total realistic savings for most enterprise workloads: 40-65%**

## Architecture (Production)

```
Client App / Agent
       ↓
[Hedera x AI Gateway]
  ├── Auth + Tenant isolation
  ├── Budget check (Hedera Smart Account / Account Abstraction)
  ├── Semantic Cache lookup (Pinecone / Weaviate / pgvector)
  ├── Complexity Classifier → Model Router
  ├── Prompt Compression
  ├── Loop Detector
  ├── Provider call (OpenAI / Anthropic / Gemini / Grok / local)
  ├── HCS immutable log (who, what, cost, tokens)
  └── x402 + CLPR settlement (optional automatic payment)
       ↓
Response + cost metadata + savings report
```

## Key Differentiators vs classic AI Gateways (Portkey, Helicone, LiteLLM)
- **Hard on-chain budgets** via Hedera Account Abstraction / Smart Accounts
- **Immutable audit trail** on Hedera Consensus Service (HCS)
- **Bridgeless validation** with CLPR
- **Native x402** support for agentic micropayments
- Built for regulated enterprises (banks, insurance, government)

## Live Demo
This repository contains a fully functional demo dashboard + simulated middleware.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind + shadcn/ui
- Hedera SDK (ready for real integration)
- Mock semantic cache + model router for demo

## Quick Start
```bash
npm install
npm run dev
```

## Roadmap
- [x] Core architecture & demo
- [ ] Real Hedera Smart Account integration
- [ ] Production semantic cache (pgvector / Pinecone)
- [ ] Real multi-provider SDK
- [ ] x402 facilitator
- [ ] CLPR validation layer
- [ ] Enterprise SSO + multi-tenant

---
Built for selling to enterprises that want to cut AI spend while gaining full auditability and control.
