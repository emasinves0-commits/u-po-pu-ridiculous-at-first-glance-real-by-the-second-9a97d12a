// Entry: "Ridiculous at First Glance, Real by the Second" — retired-grandmother homework scolding service, 165 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const ENTRY_TEXT = "We hire retired grandmothers to scold your teenager into doing homework over video call, because desperate parents pay $30 an hour for authority they no longer have.";
const ENTRY_FILENAME = "entry.txt";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, ENTRY_FILENAME), ENTRY_TEXT, "utf8");
