<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { site, frontmatter } = useData()
</script>

<template>
  <h1 class="text-red-600">{{ site.title }}</h1>
  <p>{{ site.description }}</p>
  <ul>
      <li><a :href="withBase('/blog')">Blog Example</a></li>
      <li><a :href="withBase('/markdown-examples.html')">Markdown Examples</a></li>
      <li><a :href="withBase('/api-examples.html')">API Examples</a></li>
  </ul>
  <Content />
</template>
