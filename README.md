# PRECISION Human Pain Network — Community Site

GitHub Pages site for the [PRECISION Human Pain Network](https://precision.scicrunch.org),
built with Jekyll + [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme.

## Structure

```
_config.yml              # Jekyll configuration + Minimal Mistakes remote theme
_data/
  papers.yml             # Paper metadata (single source of truth for all pages)
  navigation.yml         # Sidebar/header nav links
_pages/
  papers.md              # Full paper table with per-paper detail sections
  by-method.md           # Papers grouped by experimental method
  by-species.md          # Papers grouped by species
  tools.md               # Links to NervoSensus, InterLex, Dashboard, SPARC
index.md                 # Landing page: project overview, stats, paper summary
CNAME                    # Custom domain → precision.scicrunch.org
Gemfile                  # Ruby dependencies (for local development)
```

## How it works

All paper information lives in `_data/papers.yml`. Every page that shows
paper data (the landing page summary, the paper table, the method/species
cross-reference views) reads from that single file using Liquid templates.

**To add a paper:** add an entry to `_data/papers.yml` — every page updates
automatically.

**To add a method or species facet:** just include it in the paper's `methods`
or `species` list — the browse pages auto-generate sections for each unique
value.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deployment

Push to `main` — GitHub Pages builds and deploys automatically.
