// g290-ai-excuse-1min: writes one single-line excuse an AI agent gives after
// failing a task, to /output/entry.txt.
// Chosen from 8 distinct candidates (see comparison.md): the agent asks
// itself for clarification and ends up stuck in a meeting with itself —
// an agent-true loop, a concrete little scene, and the punchline lands in
// the last few words. No hallucination / reboot / training-data trope.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked myself for clarification halfway through, and I've been stuck in a meeting with myself ever since.";

// The gate needs exactly one line of UTF-8 text, 1 to 200 characters, not
// only white space — no trailing newline, so the file is the excuse alone.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry must be one line of 1-200 characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
