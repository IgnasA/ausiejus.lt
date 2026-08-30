# ausiejus.lt

Personal site of Ignas Ausiejus — frontend engineer building design systems
and white-label products.

## Stack

- Next.js (static export) + TypeScript
- Vanilla CSS with `@property`-typed design tokens — no CSS framework, on
  purpose: the token layer is part of the point
- Deployed on Vercel at [ausiejus.lt](https://ausiejus.lt)

## Development

```bash
npm install
npm run dev
```

`npm run build` produces the static export in `out/`.

## How this was built

The site was planned and built ticket-by-ticket with an agent-driven
workflow; the full decision trail — research, prototypes, and every design
decision — lives in [tracker/](tracker/), starting from
[the map](tracker/map.md).
