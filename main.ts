import { writeFileSync, mkdirSync } from "node:fs";

// v2 entry: naming-rights market moved onto a baby's first name.
// Brands pay for a lifetime of introductions; the parents keep the middle name.
const LINE = "We auction your baby's first name to the highest bidder — brands pay $50,000 for a lifetime of introductions, and you keep the middle name.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const MAX_CHARS = 200;

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error("entry must be 1-200 characters");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, checkedLine(LINE));
