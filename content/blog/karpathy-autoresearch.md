---
title: "Something I'm working on: wiring Karpathy's autoResearch into Claude Code"
date: "2026-04-18"
tags: ["wip", "ai", "agents", "claude", "experimental"]
excerpt: "Still figuring this out. Notes-in-progress on getting Karpathy's autoResearch loop to actually run on top of Claude Code as the execution engine."
draft: false
---

> Status: **experimental / work-in-progress.** This is a live notebook, not a writeup. Things in here will be wrong tomorrow.

Karpathy described an autoResearch pattern: an LLM proposes an experiment, runs it, scores the result, and uses the score to decide what to try next. Loop until something good emerges.

The question I'm actually poking at: **can Claude Code be the execution engine for that loop?** Not "ask Claude for an idea" — actually let it be the runner. Read state, propose change, run experiment, score, commit, repeat. Unattended. Overnight.

Some of it is working. Most of it isn't. Below is what I currently believe, what's still broken, and what I'm trying next.

## What seems to work

- **Claude Code as the runner.** Each iteration is one Claude Code session. It reads a status file + `history.json`, proposes a small change, executes it, writes a new entry. The git log becomes the run log — every iteration is a commit. That part feels right.
- **Score function as the contract.** Right now I'm collapsing drawdown, return-per-trade, and trade count into one number. Optimizing for raw profit gave me fragile, unrepeatable strategies. The composite score at least makes "good" mean something stable. Not confident this is the *right* score yet — see open questions.
- **Parallelizing in-sample and out-of-sample evaluation.** First version was ~25 min/iteration, almost all of it sequential evals. Running them in parallel dropped it to ~7 min. That's the difference between "this is a toy" and "I can leave it running overnight."

## What's still broken

- **Mid-run failures.** Network drops, rate limits, anything that kills the session mid-iteration leaves state half-written. Restarting blind corrupts the history. I have a stub `program.md` that's supposed to define what "resume" means, but it doesn't reconcile partial work cleanly yet — the agent sometimes re-runs an iteration that already completed and overwrites the score. Open.
- **The LLM doesn't accumulate intuition.** A human researcher builds a feel for what's working across iterations. Claude doesn't — it's stateless between calls and only knows what's in the history file. So the *quality of the history file is the ceiling on the loop's intelligence.* Right now my history is too lossy. Iteration 80 doesn't really know what iteration 12 learned unless I write it down well.
- **It plateaus and I don't know why.** Score roughly doubled from iter 1 → 100, but not smoothly — long flat stretches, occasional regressions. I don't have a good way yet to tell "this is an exploration phase" vs "the loop is stuck and burning compute."

## Things I'm trying next

- A richer state file. Less raw history dump, more structured summary: what's been tried, what worked, what didn't, current hypothesis. Treat it as the agent's *memory*, not its *log*.
- Crash-resume that actually works. Compute an iteration ID before any side effects, write a marker, only commit on full completion. If marker exists with no commit on restart → the iteration died mid-flight, recover or discard.
- Letting Claude Code call sub-agents for the experiment step. The proposing brain and the executing brain don't have to be the same session. Unclear if this helps or just adds latency.

## Half-formed thoughts

The thing I keep bumping into: this isn't really an "AI researcher." It's a fast, tireless executor with a score to chase and a memory file. Whether that's enough depends almost entirely on how good the score and the memory file are. The LLM is the cheap part. **The hard parts are the score function and the state representation.**

I think there's a real version of this. I don't have it yet.

## Open questions (notes to self)

- Is the composite score even the right framing, or should the loop optimize a multi-objective frontier and let me pick from it?
- What's the right granularity for an "iteration"? Right now it's one parameter change. Maybe it should be a small theme (e.g. "try volatility-based sizing") with several sub-iterations under it.
- Can the agent itself rewrite the score function when it notices it's optimizing for the wrong thing? Or does that just collapse the whole loop?
- Is git-as-history overkill, or is it actually load-bearing for debugging?

More when I know more.
