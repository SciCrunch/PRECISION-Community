# InterLex — PRECISION Human Pain Network (GitHub Pages)

This is a standalone GitHub Pages version of the InterLex Community page
design, published at [SciCrunch/PRECISION-Community](https://github.com/SciCrunch/PRECISION-Community)
→ `https://scicrunch.github.io/PRECISION-Community/`.

## What's here

- `index.html` — the Community page: org header/description, the "Explore"
  tile grid (linking out to the real ontology tool, NervoSensus, and SPARC
  public datasets), and the discussion thread.

That's it for now. The page was deliberately simplified — see below.

This page serves to direct people quickly to the cell ontology files on InterLex at this location:

**https://interlex.dev.metacell.us/precision/ontology/precision**

That's the "Precision Cell Data" tile at the top of the Explore section.

The comment "Submit" button is disabled with a "coming soon" note, since
there's no backend to actually save submissions yet — voting on existing
comments still works, but resets when the page reloads (no backend for that
either).

## Remaining TODOs

Search this project for `TODO` for inline notes. The main ones:

1. **Verify the discussion comments.** The three comments in `index.html`
   were carried over from the original design file, not written by anyone on
   this project — confirm whether they're real curator/community
   correspondence or placeholder mockup content before treating this as live.
2. **Decide how "Explore" should evolve.** Right now it just links out to the
   ontology tool. If/when there's a real way to pull structured data from
   that ontology (an API, an export, etc.), the Stats dashboard and Sources
   table from the original design could come back, populated with real
   numbers instead of invented ones.
3. **Wire up real commenting** (or drop the comment form entirely) once
   there's a backend or a service like Giscus/Utterances to actually persist
   submissions.
