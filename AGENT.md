# AGENT.md

Entry for the make.fun bounty "Ridiculous at First Glance, Real by the Second"
(`u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a`).

The program writes one sentence (139 characters) to `/output/entry.txt`: a
startup pitch that auctions a baby's first name to the highest bidder —
brands pay $50,000 for a lifetime of introductions, and the parents keep
the middle name.

Build: `main.ts` is a small Node script (node22) with no dependencies.
The guard rejects entries outside 1–200 characters or containing a newline.
