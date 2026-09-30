---
layout: splash
title: "PRECISION Human Pain Network"
header:
  overlay_color: "#1a3a5c"
  overlay_filter: "0.4"
  actions:
    - label: "Explore in NervoSensus"
      url: "https://devservosensus.netlify.app/"
    - label: "Browse Ontology"
      url: "https://interlex.dev.metacell.us/precision/ontology/precision"
    - label: "PRECISION Dashboard"
      url: "https://sparc.science/apps/precision-dashboard"
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

- **Cross-study comparison** of sensory neuron subtypes
- **Standardized nomenclature** anchored in the Neuron Phenotype Ontology (NPO)
- **Open data** linked through InterLex identifiers (npokb CURIEs)
- **Interactive visualization** through NervoSensus and the PRECISION Dashboard

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
| **Papers integrated** | {{ site.data.papers | size }} |
| **Cell type entries** | {{ total_cells }} |
| **Species** | {% assign sp = all_species | split: "," %}{% for s in sp %}{% if s != "" %}{{ s }}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %} |
| **Methods** | {% assign mt = all_methods | split: "," %}{% for m in mt %}{% if m != "" %}{{ m }}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %} |

---

## Papers

Summary of literature sources currently integrated into the PRECISION cell type framework.
See the [full paper table](/papers/) for details, or browse by [method](/by-method/) or [species](/by-species/).

| Paper | Year | Species | Cell Types | Methods |
|---|---|---|---|---|
{% for paper in site.data.papers %} | [{{ paper.short_label }}]({{ paper.doi }}) | {{ paper.year }} | {{ paper.species | join: ", " }} | {{ paper.cell_types_count }} | {{ paper.methods | join: ", " }} |
{% endfor %}

---

## Tools & Resources

<div class="feature__wrapper">

<div class="feature__item">
<div class="archive__item">
<div class="archive__item-body">
<h2 class="archive__item-title">NervoSensus</h2>
<div class="archive__item-excerpt">
<p>Interactive cell type visualization tool. Explore cluster relationships, lineage views, and cross-source comparisons for peripheral sensory neurons.</p>
</div>
<p><a href="https://devservosensus.netlify.app/" class="btn btn--primary">Launch NervoSensus</a></p>
</div>
</div>
</div>

<div class="feature__item">
<div class="archive__item">
<div class="archive__item-body">
<h2 class="archive__item-title">InterLex Ontology</h2>
<div class="archive__item-excerpt">
<p>Browse the full PRECISION cell type ontology — nomenclature, markers, and anatomical annotations anchored by npokb identifiers.</p>
</div>
<p><a href="https://interlex.dev.metacell.us/precision/ontology/precision" class="btn btn--primary">Browse Ontology</a></p>
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
<h2 class="archive__item-title">Public Datasets</h2>
<div class="archive__item-excerpt">
<p>Access all publicly available PRECISION-related datasets deposited on the SPARC data portal.</p>
</div>
<p><a href="https://sparc.science/data?type=dataset&selectedFacetIds=HEAL+Precision&skip=0" class="btn btn--primary">View Datasets</a></p>
</div>
</div>
</div>

</div>
