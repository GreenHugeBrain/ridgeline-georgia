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

## Pages

Five real pages, not anchors on one:

| Path | What is on it |
|---|---|
| `/` | Hero, the four principles, three trips, gallery strip |
| `/tours/` | All six trips with the filters, itineraries and price calculator |
| `/gallery/` | The photographs, full size on click |
| `/about/` | How the trips are run, and when each region is open |
| `/enquire/` | The enquiry form and the office details |

Vite builds each from its own HTML entry and React root, so the URLs are real and
there is no client-side router. Rollup splits React and the shared chrome into one
chunk the browser keeps between pages, leaving 1-5 kB per page.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` outputs to `dist/`, which the GitHub Actions workflow publishes
to Pages on every push to `master`.
