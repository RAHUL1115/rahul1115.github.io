---
title: "100 autonomous iterations. What I learned running Karpathy's autoResearch in the wild."
date: "2026-04-21"
tags: ["ai", "agents", "research", "claude"]
excerpt: "I built a self-improving research loop using Claude Code as the engine. After 100 iterations and a 2x score improvement, the most useful lesson had nothing to do with the algorithm."
draft: false
---

Andrej Karpathy outlined an autoResearch pattern: an LLM iteratively proposes experiments, runs them, scores the results, and uses that score to guide the next proposal. The loop runs until something good emerges or you run out of patience.

I built one. Here's what actually happened.

## The setup

The system runs as an autonomous agent using Claude Code as the execution engine. Each iteration follows the same loop: read current state, propose a change, run the experiment, score it, commit, update state, repeat.

The score function is the core. It takes drawdown, return per trade, number of trades, and several other parameters and collapses them into a single number that rewards both stability and profit — not just one. Optimizing for profit alone produces fragile strategies. The score makes "good" mean something specific.

State lives in two files. A status file holds the current summary — where the run is, what's been tried, last score. A `history.json` holds the full record of every iteration. Between them, the agent always knows exactly what has happened and what to try next.

After each iteration: a git commit. The whole run is a git log you can walk backwards through.

## The numbers

First version: each iteration took over 25 minutes. That's too slow to explore meaningfully.

The bottleneck was running in-sample and out-of-sample evaluation sequentially. Parallelizing them dropped total time from ~1600 seconds to ~200 seconds per iteration. That's an 8x speedup that cost maybe a few hours of engineering.

At 7 minutes per iteration, 100 iterations is about 12 hours of unattended compute. The system ran. The score roughly doubled from iteration 1 to iteration 100. Not linear — there were plateaus, regressions, recoveries — but the trend was real.

## The failure that wasn't

The hardest thing to handle wasn't a bad proposal. It was a dropped network connection mid-iteration.

The LLM stops. The iteration is half-done. If you restart, the agent has no idea where it left off. Without a recovery mechanism, you either rerun the whole thing and potentially corrupt state, or you start over.

The fix lives in `program.md` — a structured context file that defines what a "session" is, what it means to resume, and how to reconcile partial work against the history. On restart, the agent reads `program.md`, checks the status file, checks `history.json`, and figures out what the half-baked iteration actually completed. Then it either finishes it or marks it as failed and moves on cleanly.

It's not elegant. But it works. And without it, the whole system is brittle at exactly the moment you've left it running overnight.

## What I actually learned

The LLM is not doing what a human researcher does. A human researcher builds intuition across iterations — they notice patterns, form hypotheses, change direction for reasons they can't fully articulate. The LLM doesn't do that. It's stateless between calls. It reads the history file and reasons from what's written there, not from anything accumulated.

That sounds like a limitation. It is. But it also means the LLM is extraordinarily fast at the thing it's actually good at: reading a well-defined state, proposing a small, concrete change, and executing it precisely. At scale. Without fatigue. Without distraction.

The advantage isn't that the LLM thinks like a researcher. The advantage is that it does small, well-scoped work reliably and quickly, and you can run 100 of those in the time a human researcher would finish 3.

Design around that and the system is powerful. Expect human-style reasoning from it and you'll be disappointed.

## What I'd change

- Build the score function first. Everything else depends on it. If the score is wrong, the loop optimizes for the wrong thing and 100 iterations of progress is actually 100 iterations in the wrong direction.
- Invest in state files early. The status file and history are not bookkeeping — they are the agent's memory. Their quality determines the quality of every subsequent proposal.
- Assume network failures. The resilience mechanism felt like overhead until the first time I needed it.

The loop works. It's not magic. It's a fast, tireless executor with good memory and a score to chase.
