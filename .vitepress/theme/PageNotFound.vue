<script setup lang="ts">
import {useData, withBase} from 'vitepress'
const {theme} = useData()
</script>

<template>
  <main class="mx-auto w-full max-w-7xl px-6 pb-16 sm:pb-24 lg:px-8">
    <div class="mx-auto mt-14 max-w-2xl text-center">
      <h1
        class="mt-8 text-5xl font-semibold tracking-tight text-balance text-(--color-text-main) sm:text-6xl"
      >
        {{ theme.pageNotFound.title }}
      </h1>
      <p
        class="mt-6 text-lg font-medium text-pretty text-(--color-text-main) sm:text-xl/8"
      >
        {{ theme.pageNotFound.message }}
      </p>
    </div>
    <div class="mx-auto mt-10 flow-root max-w-lg">
      <h2 class="sr-only">Suggested pages</h2>
      <ul
        role="list"
        class="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
      >
        <li
          v-for="(link, linkIdx) in theme.pageNotFound.links"
          :key="linkIdx"
          class="relative flex gap-x-6 py-6"
        >
          <div
            class="flex size-10 flex-none items-center justify-center rounded-lg shadow-xs ring-1 ring-gray-900/10"
          >
            <fa-icon
              :icon="link.icon"
              class="text-4xl text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
            />
          </div>
          <div class="flex-auto">
            <h3 class="text-sm/6 font-semibold text-(--color-text-main)">
              <a :href="withBase(link.href)">
                <span class="absolute inset-0" aria-hidden="true" />
                {{ link.name }}
              </a>
            </h3>
            <p class="mt-2 text-sm/6 text-(--color-text-main)/70">
              {{ link.description }}
            </p>
          </div>
          <div class="flex-none self-center">
            <ChevronRightIcon class="size-5 text-gray-400" aria-hidden="true" />
          </div>
        </li>
      </ul>
      <div class="mt-10 flex justify-center">
        <a :href="withBase('/')" class="text-sm/6 font-semibold text-sky-600">
          <span aria-hidden="true">&larr;</span> Back to home</a
        >
      </div>
    </div>
  </main>
</template>
