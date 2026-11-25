import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3 AM excuse: a hardware wallet that will not sign at 3 AM.
// Angle: the private keys themselves are asleep and dreaming — the
// wallet refuses to wake them up for a late-night impulse buy.
// Tightened to two short sentences: the dream is the joke, the dog
// coin is the grudge.
const LINE =
  "My private keys dream at 3 AM. I'm not waking them so you can buy a dog coin.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
let dir = outDir ?? "/output";
try {
  mkdirSync(dir, { recursive: true });
} catch {
  // Running by hand outside the grader: fall back to a local folder.
  dir = "./output";
  mkdirSync(dir, { recursive: true });
}
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
