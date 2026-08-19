# InterLex — PRECISION Human Pain Network (GitHub Pages)

This is a standalone GitHub Pages version of the InterLex Community page design
you uploaded (`interlex_org_view.html`), renamed to `index.html` so it serves
as the site's home page.

## What's here

- `index.html` — the Community page (org header, stats, asset tiles, sources
  table, term sets, discussion thread)
- `js/data.js` — **sample placeholder data** the page reads to populate the
  stats and sources table
- `interlex_grid_view.html`, `interlex_termset_view.html`,
  `interlex_cellcard_v7.html` — placeholder stub pages so the links on the
  Community page don't 404

## TODOs before this is a real, published site

Search this project for `TODO` — every spot that needs your attention is
marked inline:

1. **`js/data.js`** — replace `DEFAULT_CELL_TYPES`, `DEFAULT_GENES`, and
   `DEFAULT_SOURCES` with your real dataset (the original page loaded this
   from a private internal path that isn't available on GitHub Pages).
2. **`interlex_grid_view.html`** — build the real interactive cell-type grid.
3. **`interlex_termset_view.html`** — build the real term-set detail view
   (reads a `?set=` query param).
4. **`interlex_cellcard_v7.html`** — build the real individual cell-type
   detail card.
5. **`index.html`** — the Term Sets table and Discussion comments are still
   hardcoded sample content from the original design; the comment "Submit"
   button only stores new comments in memory (they vanish on refresh) since
   there's no backend wired up.

## Publishing to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Push these files to the repo, e.g.:
   ```bash
   git init
   git add .
   git commit -m "Add InterLex Community page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. GitHub will publish the site at:
   `https://<your-username>.github.io/<your-repo>/`
   (this can take a minute or two the first time)

If you'd rather this be a *user/org* page (`<your-username>.github.io`)
instead of a project page, name the repo exactly `<your-username>.github.io`
and push these files to its `main` branch — no extra Pages configuration
needed.
