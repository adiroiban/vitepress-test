<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import BlogArticle from './BlogArticle.vue'
import BlogIndex from './BlogIndex.vue'
import PageNotFound from './PageNotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="overflow-hidden antialiased">
    <PageNotFound v-if="page.isNotFound" />
    <Home v-else-if="frontmatter.layout == 'home'"/>
    <BlogIndex v-else-if="frontmatter.layout == 'blog-index'" />
    <BlogArticle v-else-if="frontmatter.layout == 'blog-article'" />
    <Content v-else/>
  </div>
</template>
