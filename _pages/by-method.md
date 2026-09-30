---
layout: single
title: "Papers by Method"
permalink: /by-method/
sidebar:
  nav: "main"
toc: true
toc_label: "Methods"
toc_sticky: true
---

Papers grouped by experimental method. A paper appears under every method it
uses, so cross-modal studies show up in multiple sections.

{% comment %}
  Build a unique list of methods across all papers.
{% endcomment %}
{% assign all_methods = "" %}
{% for paper in site.data.papers %}
  {% for m in paper.methods %}
    {% unless all_methods contains m %}
      {% assign all_methods = all_methods | append: m | append: "|" %}
    {% endunless %}
  {% endfor %}
{% endfor %}
{% assign method_list = all_methods | split: "|" %}

{% for method in method_list %}
{% if method != "" %}

---

## {{ method }}

| Paper | Year | Species | Cell Types |
|---|---|---|---|
{% for paper in site.data.papers %}{% if paper.methods contains method %}| [{{ paper.short_label }}]({{ paper.doi }}) | {{ paper.year }} | {{ paper.species | join: ", " }} | {{ paper.cell_types_count }} |
{% endif %}{% endfor %}

{% endif %}
{% endfor %}
