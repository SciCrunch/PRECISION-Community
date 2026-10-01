---
layout: splash
title: "PRECISION Human Pain Network"
header:
  overlay_color: "#262670"
  overlay_filter: "0.4"
  actions:
    - label: "Browse Cell Types"
      url: "https://interlex.dev.metacell.us/precision/ontology/precision"
    - label: "Explore Cell Type Relationships in NervoSensus"
      url: "https://nervosensus.netlify.app/"
    - label: "PRECISION Dashboard"
      url: "https://sparc.science/apps/precision-dashboard"
    - label: "PRECISION Datasets"
      url: "https://staging.sparc.science/about/consortia/precision"
excerpt: >
  A community of researchers building standardized cell type models for peripheral
  sensory neurons — integrating nomenclature from multiple published sources and species
  to enable reproducible, cross-study alignment in pain neuroscience.
---

## About the Project

The PRECISION Human Pain Network is an NIH HEAL Initiative effort to create a
unified framework for classifying, comparing, and annotating pain-related neuron
types across species and experimental methods. By harmonizing cell type
definitions from multiple research groups, the network enables:

- **Cross-study comparison** of sensory neuron subtypes as reported in each source publication
- **Persistent Identifiers** for putative types enable a stable manner to track harmonization 
- **Standardized nomenclature** links PRECISION data to other consortia efforts
- **Interactive visualization** through NervoSensus for Cell Type Relationships and the PRECISION Dashboard to show transcriptomic profiles within clusters
- **Comprehensive Open data** of the molecular signatures, genes, cell types, and tissues that underlie human pain types, conditions, and disease for use by the scientific community

---

## Data at a Glance

{% assign total_cells = 0 %}
{% assign all_methods = "" %}
{% assign all_species = "" %}
{% for paper in site.data.papers %}
  {% assign total_cells = total_cells | plus: paper.cell_types_count %}
  {% for m in paper.methods %}
    {% unless all_methods contains m %}
      {% assign all_methods = all_methods | append: m | append: "," %}
    {% endunless %}
  {% endfor %}
  {% for s in paper.species %}
    {% unless all_species contains s %}
      {% assign all_species = all_species | append: s | append: "," %}
    {% endunless %}
  {% endfor %}
{% endfor %}

| | |
|---|---|
| **Sources integrated** | {{ site.data.papers | size }} |
| **Cell type entries** | {{ total_cells }} |
| **Species** | {% assign sp = all_species | split: "," %}{% for s in sp %}{% if s != "" %}{{ s }}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %} |
| **Methods** | {% assign mt = all_methods | split: "," %}{% for m in mt %}{% if m != "" %}{{ m }}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %} |

---

## Sources

Literature sources currently integrated into the PRECISION cell type framework.

| Title | Authors | Year | Species | Cell Types | Methods |
|---|---|---|---|---|---|
{% for paper in site.data.papers %} | [{{ paper.title }}]({{ paper.doi }}) | {{ paper.authors }} | {{ paper.year }} | {{ paper.species | join: ", " }} | {{ paper.cell_types_count }} | {{ paper.methods | join: ", " }} |
{% endfor %}

{% for paper in site.data.papers %}

### {{ paper.authors }}, {{ paper.year }}

**{{ paper.title }}**

| | |
|---|---|
| **DOI** | [{{ paper.doi | remove: "https://doi.org/" }}]({{ paper.doi }}) |
| **Species** | {{ paper.species | join: ", " }} |
| **Cell types** | {{ paper.cell_types_count }} |
| **Methods** | {{ paper.methods | join: ", " }} |
{% if paper.sex.size > 0 %}| **Sex** | {{ paper.sex | join: ", " }} |
{% endif %}{% if paper.age_range != "" %}| **Age range** | {{ paper.age_range }} |
{% endif %}{% if paper.anatomical_focus != "" %}| **Anatomical focus** | {{ paper.anatomical_focus }} |
{% endif %}

{% if paper.drg_regions.size > 0 %}
**DRG regions sampled:** {{ paper.drg_regions | join: ", " }}
{% endif %}

**Explore this source's data:**
{% if paper.links.nervosensus != "" %}- [View in NervoSensus]({{ paper.links.nervosensus }})
{% endif %}{% if paper.links.interlex != "" %}- [Browse in InterLex]({{ paper.links.interlex }})
{% endif %}{% if paper.links.precision_dashboard != "" %}- [PRECISION Dashboard]({{ paper.links.precision_dashboard }})
{% endif %}{% if paper.links.dataset != "" %}- [Dataset]({{ paper.links.dataset }})
{% endif %}

{% endfor %}

---

## Tools & Resources

<div class="feature__wrapper">

<div class="feature__item">
<div class="archive__item">
<div class="archive__item-body">
<h2 class="archive__item-title">Cell Types Knowledge Base</h2>
<div class="archive__item-excerpt">
<p>Browse the full PRECISION cell type ontology — nomenclature, markers, and anatomical annotations anchored by persistent identifiers.</p>
</div>
<p><a href="https://interlex.dev.metacell.us/precision/ontology/precision" class="btn btn--primary">Browse Cell Types</a></p>
</div>
</div>
</div>

<div class="feature__item">
<div class="archive__item">
<div class="archive__item-body">
<h2 class="archive__item-title">NervoSensus</h2>
<div class="archive__item-excerpt">
<p>Interactive cell type visualization tool. Explore cluster relationships, lineage views, and cross-source comparisons for peripheral sensory neurons.</p>
</div>
<p><a href="https://nervosensus.netlify.app/" class="btn btn--primary">Launch NervoSensus</a></p>
</div>
</div>
</div>

<div class="feature__item">
<div class="archive__item">
<div class="archive__item-body">
<h2 class="archive__item-title">PRECISION Dashboard</h2>
<div class="archive__item-excerpt">
<p>Explore gene expression across PRECISION cell types on the SPARC portal. Search by gene symbol to see expression patterns.</p>
</div>
<p><a href="https://sparc.science/apps/precision-dashboard" class="btn btn--primary">Open Dashboard</a></p>
</div>
</div>
</div>

<div class="feature__item">
<div class="archive__item">
<div class="archive__item-body">
<h2 class="archive__item-title">PRECISION Datasets</h2>
<div class="archive__item-excerpt">
<p>Access all publicly available PRECISION-related datasets deposited on the SPARC data portal.</p>
</div>
<p><a href="https://staging.sparc.science/about/consortia/precision" class="btn btn--primary">View Datasets</a></p>
</div>
</div>
</div>

</div>
