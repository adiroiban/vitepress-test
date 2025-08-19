import path from "path"

import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { setupPlugins } from '@responsive-image/vite-plugin';

const BASE = '/vitepress-test/'


const pageNotFound = {
    title: 'This page does not exist',
    message: "We couldn't find the page you're looking for.",
    links: [
        {
            name: 'Blog',
            href: '/blog',
            description: 'Check our blog.',
            icon: ['fas', 'bars'],
        },
        {
            name: 'API',
            href: '/api-examples',
            description: 'Check our API',
            icon: ['fas', 'bars'],
        },

    ],
}



// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: BASE,
  title: "Test VitePress",
  description: "Test Vitepress functionalities",
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/png',
      // We can't use withBase here as base is not yet initialized/
      href: BASE + 'vitepress-logo-mini.png',
    }]],
  vite: {
      plugins: [
        tailwindcss(),
        setupPlugins({
                // Any import that contains `response` in the name
                // is handled by the plugin.
                include: /\?.*responsive.*$/,
                w: [900, 400],
                format: ['avif'],
            }),
      ],
      resolve: {
          alias: {
              '@': path.resolve(__dirname, "../docs/static"),
              '@theme': path.resolve(__dirname, "./theme"),
          },
      },
    },
  themeConfig: {
    pageNotFound: pageNotFound,
  },
})
