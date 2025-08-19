<script setup lang="ts">
import {useData, withBase, useRouter} from 'vitepress'
import {images} from '@/images'
import { ref } from 'vue'

const {frontmatter, theme, page} = useData()

const router = useRouter()
const getSideMenuClass = (path: string) => {

  if (page.value.filePath == path.replace(/^\//, "") + '.md') {
    return  ['text-(--color-text-highlight)', 'bg-(--color-bg-highlight)']
  }
  return ['text-(--color-text-title)']
}

let sideMenu = ref(null)
// Set content on page load.
if (frontmatter.value.sideMenu) {
  sideMenu.value = theme.value.sideMenus[frontmatter.value.category]
}
// Set content on page change.
router.onAfterRouteChange = (to) => {
  sideMenu.value = null
  if (frontmatter.value.sideMenu) {
    sideMenu.value = theme.value.sideMenus[frontmatter.value.category]
  }
}

</script>

<template>

  <div class="mx-auto max-w-7xl lg:flex lg:px-8 gap-4">

    <aside v-if="sideMenu" class="px-4 sm:px-6 lg:px-0 py-4 lg:py-10 lg:block lg:w-64 lg:flex-none lg:border-0">
        <ul role="list" class="flex flex-wrap gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
          <li v-for="item in sideMenu">
            <a :href="withBase(item.link)" class="group flex gap-x-3 rounded-md py-2 pr-3 pl-2 text-sm/6 font-semibold hover:bg-(--color-bg-highlight) hover:text-(--color-text-highlight)"
            :class="getSideMenuClass(item.link)"
            >
              <fa-icon :icon="['fas', item.icon]" />
              {{ item.text }}
            </a>
          </li>

        </ul>
    </aside>

    <main class="px-4 sm:px-6 lg:flex-auto lg:px-0">
      <div class="mx-auto flex max-w-5xl flex-col text-center">
        <h1 class="my-6 font-display text-5xl font-medium tracking-tight text-balance text-(--color-text-title) sm:text-6xl">
          {{  frontmatter.title  }}
        </h1>
        <div v-if="frontmatter.summary" class="relative">
          <img :src="images[frontmatter.image] && images[frontmatter.image].main" class="aspect-3/2 sm:aspect-10/2 w-full rounded-2xl object-cover ring-1 ring-(--color-text-main)/50 relative -mt-8 top-8">
          <p class="absolute top-0 w-full rounded-2xl bg-(--color-bg-highlight)/70 px-4 py-4 text-base font-medium text-pretty text-left text-(--color-text-main)">
            <a v-if="!frontmatter.sideMenu" :href="withBase('/' + frontmatter.category)" aria-label="Go back" class="group inline-flex h-10 w-10 mx-4 items-center justify-center rounded-full bg-(--color-bg) shadow-md ring-1 shadow-(--color-text-main)/80 ring-(--color-text-main)/10 transition border border-(--color-text-main)/20 hover:border-(--color-text-main)/50 hover:ring-(--color-text-main)/50">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-(--color-text-main) transition group-hover:stroke-(--color-text-title) ">
                <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
            {{ frontmatter.summary }}
          </p>
        </div>
      </div>

      <div class="markdown mx-auto w-full py-10">
          <Content />
      </div>
    </main>
  </div>




</template>

<style >
@reference './style.css';


    /*
    Restrict the width of the main content without restricting the width of embedded components.
    The markdown root chidlren should never be DIV
    */
    .markdown > div > div > :not(div) {
        @apply mx-auto max-w-2xl;
    }
    /**
    * Typography
    * -------------------------------------------------------------------------- */

    .markdown {
        @apply text-(--color-text-main) text-base/8;
    }

    .markdown p {
        @apply mt-4;
    }

    .markdown strong {
        @apply font-bold text-(--color-text-title);
    }

    .markdown a {
        text-underline-offset: 3px;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        @apply font-semibold text-(--color-text-link);
        @variant hover {
            text-decoration-thickness: 2px;
        }
    }

    /**
    * Headings
    * -------------------------------------------------------------------------- */
    .markdown h1 {
        @apply font-bold text-6xl/8 mt-8;
    }

    .markdown h2 {
        @apply font-semibold text-4xl/10 mt-8;
    }

    .markdown h3 {
        @apply font-semibold text-2xl/8 mt-6;
    }

    .markdown h4 {
        @apply font-normal text-xl/8 mt-4;
    }


/**
 * Paragraph and inline elements
 * -------------------------------------------------------------------------- */

.markdown blockquote {
  margin: 16px 0;
  border-left: 2px solid var(--vp-c-divider);
  padding-left: 16px;
  transition: border-color 0.5s;
  color: var(--vp-c-text-2);
}

.markdown blockquote > p {
  margin: 0;
  font-size: 16px;
  transition: color 0.5s;
}

/**
 * Lists
 * -------------------------------------------------------------------------- */


.markdown ul {
  list-style: disc;
}

.markdown ol {
  list-style: decimal;
}

.markdown li + li {
  margin-top: 8px;
}

.markdown li > ol,
.markdown li > ul {
  margin: 8px 0 0;
}

/**
 * Table
 * -------------------------------------------------------------------------- */

.markdown table {
  display: block;
  border-collapse: collapse;
  margin: 20px 0;
  overflow-x: auto;
}

.markdown tr {
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
  transition: background-color 0.5s;
}

.markdown tr:nth-child(2n) {
  background-color: var(--vp-c-bg-soft);
}

.markdown th,
.markdown td {
  border: 1px solid var(--vp-c-divider);
  padding: 8px 16px;
}

.markdown th {
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
}

.markdown td {
  font-size: 14px;
}

/**
 * Decorational elements
 * -------------------------------------------------------------------------- */

.markdown hr {
  margin: 16px 0;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

/**
 * Custom Block
 * -------------------------------------------------------------------------- */

.markdown .custom-block {
  margin: 16px 0;
}

.markdown .custom-block p {
  margin: 8px 0;
  line-height: 24px;
}

.markdown .custom-block p:first-child {
  margin: 0;
}

.markdown .custom-block div[class*='language-'] {
  margin: 8px 0;
  border-radius: 8px;
}

.markdown .custom-block div[class*='language-'] code {
  font-weight: 400;
  background-color: transparent;
}

.markdown .custom-block .vp-code-group .tabs {
  margin: 0;
  border-radius: 8px 8px 0 0;
}

/**
 * Code
 * -------------------------------------------------------------------------- */

/* inline code */
.markdown :not(pre, h1, h2, h3, h4, h5, h6) > code {
  font-size: var(--vp-code-font-size);
  color: var(--vp-code-color);
}

.markdown :not(pre) > code {
  border-radius: 4px;
  padding: 3px 6px;
  background-color: var(--vp-code-bg);
  transition:
    color 0.25s,
    background-color 0.5s;
}

.markdown a > code {
  color: var(--vp-code-link-color);
}

.markdown a:hover > code {
  color: var(--vp-code-link-hover-color);
}



.markdown div[class*='language-'],
.vp-block {
  position: relative;
  margin: 16px -24px;
  background-color: var(--vp-code-block-bg);
  overflow-x: auto;
  transition: background-color 0.5s;
}

@media (min-width: 640px) {
  .markdown div[class*='language-'],
  .vp-block {
    border-radius: 8px;
    margin: 16px 0;
  }
}

@media (max-width: 639px) {
  .markdown li div[class*='language-'] {
    border-radius: 8px 0 0 8px;
  }
}

.markdown div[class*='language-'] + div[class*='language-'],
.markdown div[class$='-api'] + div[class*='language-'],
.markdown div[class*='language-'] + div[class$='-api'] > div[class*='language-'] {
  margin-top: -8px;
}

.markdown [class*='language-'] pre,
.markdown [class*='language-'] code {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

.markdown [class*='language-'] pre {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 20px 0;
  background: transparent;
  overflow-x: auto;
  /*rtl:ignore*/
  text-align: left;
}

.markdown [class*='language-'] code {
  display: block;
  padding: 0 24px;
  width: fit-content;
  min-width: 100%;
  line-height: var(--vp-code-line-height);
  font-size: var(--vp-code-font-size);
  color: var(--vp-code-block-color);
  transition: color 0.5s;
}

.markdown [class*='language-'] code .highlighted {
  background-color: var(--vp-code-line-highlight-color);
  transition: background-color 0.5s;
  margin: 0 -24px;
  padding: 0 24px;
  width: calc(100% + 2 * 24px);
  display: inline-block;
}

.markdown [class*='language-'] code .highlighted.error {
  background-color: var(--vp-code-line-error-color);
}

.markdown [class*='language-'] code .highlighted.warning {
  background-color: var(--vp-code-line-warning-color);
}

.markdown [class*='language-'] code .diff {
  transition: background-color 0.5s;
  margin: 0 -24px;
  padding: 0 24px;
  width: calc(100% + 2 * 24px);
  display: inline-block;
}

.markdown [class*='language-'] code .diff::before {
  position: absolute;
  left: 10px;
}

.markdown [class*='language-'] .has-focused-lines .line:not(.has-focus) {
  filter: blur(0.095rem);
  opacity: 0.4;
  transition:
    filter 0.35s,
    opacity 0.35s;
}

.markdown [class*='language-'] .has-focused-lines .line:not(.has-focus) {
  opacity: 0.7;
  transition:
    filter 0.35s,
    opacity 0.35s;
}

.markdown [class*='language-']:hover .has-focused-lines .line:not(.has-focus) {
  filter: blur(0);
  opacity: 1;
}

.markdown [class*='language-'] code .diff.remove {
  background-color: var(--vp-code-line-diff-remove-color);
  opacity: 0.7;
}

.markdown [class*='language-'] code .diff.remove::before {
  content: '-';
  color: var(--vp-code-line-diff-remove-symbol-color);
}

.markdown [class*='language-'] code .diff.add {
  background-color: var(--vp-code-line-diff-add-color);
}

.markdown [class*='language-'] code .diff.add::before {
  content: '+';
  color: var(--vp-code-line-diff-add-symbol-color);
}

.markdown div[class*='language-'].line-numbers-mode {
  /*rtl:ignore*/
  padding-left: 32px;
}

.markdown .line-numbers-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  /*rtl:ignore*/
  left: 0;
  z-index: 3;
  /*rtl:ignore*/
  border-right: 1px solid var(--vp-code-block-divider-color);
  padding-top: 20px;
  width: 32px;
  text-align: center;
  font-family: var(--vp-font-family-mono);
  line-height: var(--vp-code-line-height);
  font-size: var(--vp-code-font-size);
  color: var(--vp-code-line-number-color);
  transition:
    border-color 0.5s,
    color 0.5s;
}

.markdown [class*='language-'] > button.copy {
  /*rtl:ignore*/
  direction: ltr;
  position: absolute;
  top: 12px;
  /*rtl:ignore*/
  right: 12px;
  z-index: 3;
  border: 1px solid var(--vp-code-copy-code-border-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-copy-code-bg);
  opacity: 0;
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition:
    border-color 0.25s,
    background-color 0.25s,
    opacity 0.25s;
}

.markdown [class*='language-']:hover > button.copy,
.markdown [class*='language-'] > button.copy:focus {
  opacity: 1;
}

.markdown [class*='language-'] > button.copy:hover,
.markdown [class*='language-'] > button.copy.copied {
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-hover-bg);
}

.markdown [class*='language-'] > button.copy.copied,
.markdown [class*='language-'] > button.copy:hover.copied {
  /*rtl:ignore*/
  border-radius: 0 4px 4px 0;
  background-color: var(--vp-code-copy-code-hover-bg);
  background-image: var(--vp-icon-copied);
}

.markdown [class*='language-'] > button.copy.copied::before,
.markdown [class*='language-'] > button.copy:hover.copied::before {
  position: relative;
  top: -1px;
  /*rtl:ignore*/
  transform: translateX(calc(-100% - 1px));
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--vp-code-copy-code-hover-border-color);
  /*rtl:ignore*/
  border-right: 0;
  /*rtl:ignore*/
  border-radius: 4px 0 0 4px;
  padding: 0 10px;
  width: fit-content;
  height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-code-copy-code-active-text);
  background-color: var(--vp-code-copy-code-hover-bg);
  white-space: nowrap;
  content: var(--vp-code-copy-copied-text-content);
}

.markdown [class*='language-'] > span.lang {
  position: absolute;
  top: 2px;
  /*rtl:ignore*/
  right: 8px;
  z-index: 2;
  font-size: 12px;
  font-weight: 500;
  user-select: none;
  color: var(--vp-code-lang-color);
  transition:
    color 0.4s,
    opacity 0.4s;
}

.markdown [class*='language-']:hover > button.copy + span.lang,
.markdown [class*='language-'] > button.copy:focus + span.lang {
  opacity: 0;
}


/**
 * External links
 * -------------------------------------------------------------------------- */

/* prettier-ignore */
:is(.vp-external-link-icon, .markdown a[href*='://'], .markdown a[target='_blank']):not(:is(.no-icon, svg a, :has(img, svg)))::after {
  display: inline-block;
  margin-top: -1px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  background: currentColor;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  --icon: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath d='M0 0h24v24H0V0z' fill='none' /%3E%3Cpath d='M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' /%3E%3C/svg%3E");
  -webkit-mask-image: var(--icon);
  mask-image: var(--icon);
  /*rtl:raw:transform: scaleX(-1);*/
}

.vp-external-link-icon::after {
  content: '';
}

/* prettier-ignore */
.external-link-icon-enabled :is(.markdown a[href*='://'], .markdown a[target='_blank']):not(:is(.no-icon, svg a, :has(img, svg)))::after {
  content: '';
  color: currentColor;
}
</style>
