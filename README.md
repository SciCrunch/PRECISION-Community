# InterLex — PRECISION Human Pain Network (GitHub Pages)

This is a standalone GitHub Pages version of the InterLex Community page
design, published at [SciCrunch/PRECISION-Community](https://github.com/SciCrunch/PRECISION-Community)
→ `https://scicrunch.github.io/PRECISION-Community/`.

## What's here

- `index.html` — the Community page: org header/description, the "Explore"
  tile grid (linking out to the real ontology tool, NervoSensus, and SPARC
  public datasets), and the discussion thread.

That's it for now. The page was deliberately simplified — see below.

## What was removed, and why

The original design mocked up a Stats dashboard, a Sources table, a Term
Sets table, an in-page search bar, and three linked detail pages
(`interlex_grid_view.html`, `interlex_termset_view.html`,
`interlex_cellcard_v7.html`). All of that was backed by fabricated
placeholder numbers and citations — nothing real. Rather than ship fake data,
those sections were removed and replaced with a single clear link out to the
real data source:

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

## Publishing to GitHub Pages

1. Push `index.html` and `README.md` to the `main` branch of
   `SciCrunch/PRECISION-Community`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
5. GitHub will publish the site at `https://scicrunch.github.io/PRECISION-Community/`
   (can take a minute or two the first time).
