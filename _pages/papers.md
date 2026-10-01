---
layout: single
title: "Papers"
permalink: /papers/
sidebar:
  nav: "main"
toc: true
toc_label: "Papers"
toc_sticky: true
---

Detailed information for each literature source integrated into the PRECISION
cell type framework. Each paper contributes cell type definitions that are
harmonized through the Neuron Phenotype Ontology (NPO) and visualized in
[NervoSensus](https://devservosensus.netlify.app/).

{% for paper in site.data.papers %}

---

## {{ paper.authors }}, {{ paper.year }}

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
**DRG regions sampled:**
{% for r in paper.drg_regions %}- {{ r }}
{% endfor %}
{% endif %}

**Explore this paper's data:**
{% if paper.links.nervosensus != "" %}- [View in NervoSensus]({{ paper.links.nervosensus }})
{% endif %}{% if paper.links.interlex != "" %}- [Browse in InterLex]({{ paper.links.interlex }})
{% endif %}{% if paper.links.precision_dashboard != "" %}- [PRECISION Dashboard]({{ paper.links.precision_dashboard }})
{% endif %}{% if paper.links.dataset != "" %}- [Dataset]({{ paper.links.dataset }})
{% endif %}

{% endfor %}
