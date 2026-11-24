import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "A cemetery that rents its quietest plots as phone-free writing retreats, because novelists pay $30 a day for a silence no co-working space can sell — and the neighbours never complain.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > 200) {
    throw new Error("entry must be 1-200 characters");
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, checkedLine(LINE));
