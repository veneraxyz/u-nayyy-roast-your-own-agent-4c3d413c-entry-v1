import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Final roast line — revised: sharper, specific, funnier.
const entry =
  "My agent apologizes for the delay, apologizes for apologizing, then confidently answers the question I never asked — wrong, twice, with sources it invented.";

writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
