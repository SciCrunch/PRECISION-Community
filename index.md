---
layout: splash
title: "PRECISION Human Pain Network"
header:
  overlay_color: "#262670"
  overlay_filter: "0.4"
  actions:
    - label: "Browse Cell Types"
      url: "https://interlex.dev.metacell.us/precision/ontology/precision"
    - label: "Explore Cell Type Relationships"
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

<div class="glance-table">
<table>
<tbody>
<tr><td><strong>Sources integrated</strong></td><td>{{ site.data.papers | size }}</td></tr>
<tr><td><strong>Cell type entries</strong></td><td>{{ total_cells }}</td></tr>
<tr><td><strong>Species</strong></td><td>{% assign sp = all_species | split: "," %}{% for s in sp %}{% if s != "" %}{{ s }}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}</td></tr>
<tr><td><strong>Methods</strong></td><td>{% assign mt = all_methods | split: "," %}{% for m in mt %}{% if m != "" %}{{ m }}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}</td></tr>
</tbody>
</table>
</div>

---

## Sources

Literature sources currently integrated into the PRECISION cell type framework.

| Title | Authors | Year | Species | Cell Types | Methods |
|---|---|---|---|---|---|
{% for paper in site.data.papers %} | [{{ paper.title }}]({{ paper.doi }}) | {{ paper.authors }} | {{ paper.year }} | {{ paper.species | join: ", " }} | {{ paper.cell_types_count }} | {{ paper.methods | join: ", " }} |
{% endfor %}

{% for paper in site.data.papers %}
<div class="source-card">
<h3>{{ paper.authors }}, {{ paper.year }}</h3>
<p><strong>{{ paper.title }}</strong></p>
<table>
<tbody>
<tr><td><strong>DOI</strong></td><td><a href="{{ paper.doi }}">{{ paper.doi | remove: "https://doi.org/" }}</a></td></tr>
<tr><td><strong>Species</strong></td><td>{{ paper.species | join: ", " }}</td></tr>
<tr><td><strong>Cell types</strong></td><td>{{ paper.cell_types_count }}</td></tr>
<tr><td><strong>Methods</strong></td><td>{{ paper.methods | join: ", " }}</td></tr>
{% if paper.sex.size > 0 %}<tr><td><strong>Sex</strong></td><td>{{ paper.sex | join: ", " }}</td></tr>{% endif %}
{% if paper.age_range != "" %}<tr><td><strong>Age range</strong></td><td>{{ paper.age_range }}</td></tr>{% endif %}
{% if paper.anatomical_focus != "" %}<tr><td><strong>Anatomical focus</strong></td><td>{{ paper.anatomical_focus }}</td></tr>{% endif %}
</tbody>
</table>
{% if paper.drg_regions.size > 0 %}
<p><strong>DRG regions sampled:</strong> {{ paper.drg_regions | join: ", " }}</p>
{% endif %}
<div class="source-card__links">
{% if paper.links.interlex != "" %}<a href="{{ paper.links.interlex }}" class="btn btn--primary btn--small">Browse Cell Types</a>{% endif %}
{% if paper.links.nervosensus != "" %}<a href="{{ paper.links.nervosensus }}" class="btn btn--primary btn--small">Explore Cell Type Relationships</a>{% endif %}
{% if paper.links.precision_dashboard != "" %}<a href="{{ paper.links.precision_dashboard }}" class="btn btn--primary btn--small">PRECISION Dashboard</a>{% endif %}
{% if paper.links.dataset != "" %}<a href="{{ paper.links.dataset }}" class="btn btn--primary btn--small">Dataset</a>{% endif %}
</div>
</div>
{% endfor %}

---

## Tools & Resources

<div class="tools-grid">
<div class="tool-card">
<h3>Cell Types Knowledge Base</h3>
<p>Browse the full PRECISION cell type ontology — nomenclature, markers, and anatomical annotations anchored by persistent identifiers.</p>
<a href="https://interlex.dev.metacell.us/precision/ontology/precision" class="btn btn--primary btn--small">Browse Cell Types</a>
</div>
<div class="tool-card">
<h3>NervoSensus</h3>
<p>Interactive cell type visualization tool. Explore cluster relationships, lineage views, and cross-source comparisons for peripheral sensory neurons.</p>
<a href="https://nervosensus.netlify.app/" class="btn btn--primary btn--small">Launch NervoSensus</a>
</div>
<div class="tool-card">
<h3>PRECISION Dashboard</h3>
<p>Explore gene expression across PRECISION cell types on the SPARC portal. Search by gene symbol to see expression patterns.</p>
<a href="https://sparc.science/apps/precision-dashboard" class="btn btn--primary btn--small">Open Dashboard</a>
</div>
<div class="tool-card">
<h3>PRECISION Datasets</h3>
<p>Access all publicly available PRECISION-related datasets deposited on the SPARC data portal.</p>
<a href="https://staging.sparc.science/about/consortia/precision" class="btn btn--primary btn--small">View Datasets</a>
</div>
</div>
