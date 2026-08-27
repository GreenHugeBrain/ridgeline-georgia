# Ridgeline

A concept site for a small-group mountain tour operator in Georgia — Kazbegi,
Svaneti, Tusheti — where the hard part is letting someone find the one trip that
fits the week they have.

**Live:** https://greenhugebrain.github.io/ridgeline-georgia/

React and Vite. No dependencies beyond React, no backend.

## What it does

- **Filtering that composes.** Region, grade and maximum days narrow together,
  with a live count. An impossible combination gets a written explanation rather
  than an empty grid — the harder trips are all two days or more, and the page
  says so.
- **Itineraries in place.** Opening a trip expands it across the full grid row
  instead of pushing you to another page, so the comparison you were making
  survives the click.
- **A group-size calculator.** Per-head price falls as the group grows, because
  the vehicle and the guide are shared. Stated as indicative, with a note that
  ones and twos are quoted individually.

## Photographs

All landscape photography is from Wikimedia Commons and reused under the
licences listed in `CREDITS.md` — real Georgian places rather than generic stock
mountains.

## Design

Barlow Condensed against Inter, deep green and stone. The grade badge is the only
place colour carries meaning: cream for easy, ochre for moderate, clay for hard.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` outputs to `dist/`, which the GitHub Actions workflow publishes
to Pages on every push to `master`.
