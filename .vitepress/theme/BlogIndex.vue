<script setup lang="ts">
import {useData, withBase} from 'vitepress'

import {images} from '@/images'

const { params, frontmatter } = useData()
</script>

<template>

<div class="relative  px-6 pt-16 pb-20 lg:px-8 lg:pb-28">
  <div class="relative mx-auto max-w-7xl">
    <div class="text-center">
      <h2 class="text-3xl font-bold tracking-tight text-(--color-text-title) sm:text-4xl">
        {{ frontmatter.title }}
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-xl text-(--color-text-main) sm:mt-4">
        {{ frontmatter.subtitle }}
      </p>
    </div>

    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      <article v-for="page in params.content" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="shrink-0">
          <a :href="withBase(page.url)">
            <img :src="images[page.frontmatter.image].thumb" :alt="images[page.frontmatter.image]" class="h-48 w-full object-cover" />
          </a>
        </div>
        <div class="flex flex-1 flex-col justify-between text-(--color-text-main) bg-(--color-bg-highlight)/80 p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-(--color-text-highlight)">
              <a href="#" v-for="tag in page.frontmatter.tags" class="hover:underline mr-2">{{  tag }}</a>
            </p>
            <a :href="withBase(page.url)" class="mt-2 flex flex-col h-full basis-full">
              <p class="text-xl font-semibold text-(--color-text-title) hover:text-(--color-text-highlight)">
                {{  page.frontmatter.title }}
              </p>
              <p class="mt-3 text-base grow">{{ page.frontmatter.summary }}</p>
              <p class="mb-3">
                <span class="text-sm/6 font-semibold hover:text-(--color-text-highlight)">
                  Continue reading ...
                </span>

              </p>
            </a>
          </div>

        </div>
      </article>

    </div>

<div class="mt-12 flex">

<div v-show="params.prevURL" class="mt-1">
  <a class="flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 flex-row-reverse" :href="params.prevURL">Previous page<svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 flex-none fill-current -scale-x-100"><path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path></svg>
  </a>
</div>

<div v-show="params.nextURL" class="ml-auto text-right">
  <div class="mt-1"><a class="flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" :href="params.nextURL">Next page<svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 flex-none fill-current"><path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path></svg></a></div>
</div>

</div>

  </div>
</div>


</template>