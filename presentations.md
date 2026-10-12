---
title: Presentations
permalink: /presentations/
body_class: presentations
---

Selected public talks, conferences, and symposia.

{% for t in site.data.presentations.talks %}
<section class="talk">
  <h2>{{ t.title }}</h2>
  {%- if t.subtitle and t.subtitle != "" %}<p class="talk-sub">{{ t.subtitle }}</p>{% endif %}
  {% include video.html youtube=t.youtube vimeo=t.vimeo title=t.title %}
  {%- if t.video_file and t.video_file != "" %}
  <div class="video"><video controls preload="metadata" src="{{ t.video_file | relative_url }}"></video></div>
  {%- endif %}
  <p>{{ t.description }}</p>
</section>
{% endfor %}
