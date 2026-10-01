---
layout: single
title: "Papers by Species"
permalink: /by-species/
sidebar:
  nav: "main"
toc: true
toc_label: "Species"
toc_sticky: true
---

Papers grouped by species studied. Multi-species studies (e.g., the CSA
cross-species atlas) appear under each species they cover.

{% assign all_species = "" %}
{% for paper in site.data.papers %}
  {% for s in paper.species %}
    {% unless all_species contains s %}
      {% assign all_species = all_species | append: s | append: "|" %}
    {% endunless %}
  {% endfor %}
{% endfor %}
{% assign species_list = all_species | split: "|" %}

{% for sp in species_list %}
{% if sp != "" %}

---

## {{ sp | capitalize }}

| Paper | Year | Methods | Cell Types |
|---|---|---|---|
{% for paper in site.data.papers %}{% if paper.species contains sp %}| [{{ paper.authors }}]({{ paper.doi }}) | {{ paper.year }} | {{ paper.methods | join: ", " }} | {{ paper.cell_types_count }} |
{% endif %}{% endfor %}

{% endif %}
{% endfor %}
