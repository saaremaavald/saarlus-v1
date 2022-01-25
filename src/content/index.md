---
title: Saarlus
tags: [this, that]
---

<svg>
  <circle
    v-for="point in polarpoints(8, 50)"
    :cx="point.x + 75"
    :cy="point.y + 75"
    r="10"
    fill="skyblue"
  />
</svg>