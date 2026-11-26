// hello — the printer dictates its own apology; no human hand is allowed to draft it.
// batch — one run lays down exactly one note, no matter how many orders were queued.
import { fileURLToPath } from "node:url";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// slot — MAKEFUN_OUTPUT_DIR names the paper tray; absent that, the default tray is /output.
const here = fileURLToPath(new URL(".", import.meta.url));
const outputDir = resolve(here, process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const note = "Sorry. I jammed on the cheap paper you bought to save money. We both made choices.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), note, "utf8");
console.log(Buffer.byteLength(note, "utf8"));
