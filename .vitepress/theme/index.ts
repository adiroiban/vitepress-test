// https://vitepress.dev/guide/custom-theme


// Font-awesome imports.
import {config, library} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {faMastodon, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'

// Config font awesome
config.autoAddCss = false
library.add(
    faSquareGithub,
)

export default {
  //extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
      // Make font-awesome available in templates.
      app.component('fa-icon', FontAwesomeIcon)
  }
} satisfies Theme

