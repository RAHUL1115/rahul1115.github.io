---
title: "RAG is plumbing. Stop treating it like magic."
date: "2025-12-10"
tags: ["ai", "rag", "production"]
excerpt: "Every team I've talked to that struggled with RAG was over-engineering the retrieval and under-engineering the evaluation."
draft: false
---

RAG is retrieval-augmented generation. It is a pipe. Data goes in, context comes out, model answers. That's it.

Every team I've talked to that struggled with RAG was over-engineering the retrieval and under-engineering the evaluation. They'd spend three weeks on a fancy hybrid search setup, then ship it with zero evals and wonder why the demo worked but prod didn't.

## The actual hard parts

**1. Chunking is a product decision.** The right chunk size depends on your documents and your queries. There is no universal answer. You have to look at your data.

**2. Embeddings are not interchangeable.** If you switch embedding models, re-embed everything. The vector space shifts. Old chunks become noise.

**3. Retrieval ≠ relevance.** Top-k by cosine similarity is not the same as "these chunks answer the question." Build a small eval set. Measure recall on it. Do this before you touch the LLM.

**4. The prompt matters more than the retrieval.** Once you have decent retrieval, 80% of quality improvements come from the prompt — how you present context, how you instruct the model to cite sources, what you do when context is insufficient.

## What I'd do

- Start with the dumbest retrieval that could possibly work (BM25 or a single embedding model, flat index)
- Build 50 question-answer pairs from your actual users
- Measure retrieval recall on those 50 pairs before touching the LLM
- Only add complexity (reranking, hybrid search, HyDE) when you can measure the improvement

RAG is plumbing. Boring, reliable plumbing. Treat it like that.
