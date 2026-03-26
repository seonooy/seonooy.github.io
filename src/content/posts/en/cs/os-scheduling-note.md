---
title: "Notes on OS scheduling"
description: "A short mock post summarizing FCFS, SJF, and RR"
lang: "en"
category: "CS"
tags: ["os", "scheduling", "theory"]
publishedAt: 2026-03-26
draft: false
---

CPU scheduling is basically about how limited processor time gets shared across processes.

This note keeps only the core idea of three common strategies.

## FCFS

The process that arrives first runs first.

- Simple to understand
- Easy to implement
- Can cause long waiting times when a long job sits at the front

## SJF

The shortest job runs first.

- Often improves average waiting time
- Hard to apply perfectly because job length is not always known in advance

## RR

Each process gets a fixed time slice in turn.

- Better responsiveness
- Too large a time slice starts looking like FCFS
- Too small a time slice increases context switching overhead
