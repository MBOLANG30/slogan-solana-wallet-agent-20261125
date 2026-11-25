import { mkdirSync, writeFileSync } from "node:fs";

const SLOGAN =
  "Solana's speed, your wallet's smarts: an agent that pays, swaps, and saves before you ask.";

// Gate: one line, 1-140 chars, max 20 words, not whitespace-only.
if (
  SLOGAN.length < 1 ||
  SLOGAN.length > 140 ||
  SLOGAN !== SLOGAN.trim() ||
  SLOGAN.includes("\n") ||
  SLOGAN.split(/\s+/).length > 20
) {
  throw new Error("slogan fails the entry gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SLOGAN, "utf8");
