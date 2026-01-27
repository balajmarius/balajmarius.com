---
title: Tailwind named groups
label: TIL
createdAt: Jan 27, 2026
author:
---

You can name groups using `group/{name}` syntax, allowing you to differentiate between nested groups and target specific parent states with `group-hover/{name}:`.

```html
<li class="group/item flex justify-between">
  <span class="group-hover/item:text-blue-500">File.txt</span>
  <button class="group/delete opacity-0 group-hover/item:opacity-100">
    <span class="group-hover/delete:text-red-500">Delete</span>
  </button>
</li>
```
