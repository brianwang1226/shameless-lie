// The Most Shameless Lie — a one-liner for make.fun.
// The entry is a shameless lie told with a straight face: deny eating the
// last cookie while the crumbs on the shirt give the game away, then blame
// yesterday's cookie for today's crumbs. The lie is shameless because it is
// offered in the face of the evidence itself — the crumbs are right there,
// on the shirt, still warm from the cookie that was supposedly never eaten.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't eat the last cookie. The crumbs on my shirt are from yesterday's cookie.";

const MAX_CHARS = 88;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(
    `Entry must be 1-${MAX_CHARS} characters, got ${LINE.length}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
