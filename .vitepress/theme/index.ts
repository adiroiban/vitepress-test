// https://vitepress.dev/guide/custom-theme


// Font-awesome imports.
import {config, library} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {faMastodon, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faAdjust,
    faAngleUp,
    faBars,
    faBook,
    faCheck,
    faCheckDouble,
    faChevronRight,
    faDisplay,
    faEnvelope,
    faExclamationCircle,
    faEye,
    faEyeSlash,
    faFile,
    faFolder,
    faHandshake,
    faHeadset,
    faHome,
    faLifeRing,
    faMagnifyingGlass,
    faMedal,
    faMinus,
    faMoon,
    faPaperPlane,
    faPeopleArrows,
    faPeopleGroup,
    faPlus,
    faQuoteLeft,
    faQuoteRight,
    faScaleBalanced,
    faSun,
    faUser,
    faWarning,
    faXmark,
} from '@fortawesome/free-solid-svg-icons'

import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'

// Config font awesome
config.autoAddCss = false
library.add(
    faAdjust,
    faAngleUp,
    faBars,
    faBook,
    faCheck,
    faCheckDouble,
    faChevronRight,
    faDisplay,
    faEnvelope,
    faExclamationCircle,
    faEye,
    faEyeSlash,
    faFile,
    faFolder,
    faHome,
    faHandshake,
    faHeadset,
    faLifeRing,
    faMagnifyingGlass,
    faMastodon,
    faMedal,
    faMinus,
    faMoon,
    faPaperPlane,
    faPeopleArrows,
    faPeopleGroup,
    faPlus,
    faQuoteLeft,
    faQuoteRight,
    faScaleBalanced,
    faSquareGithub,
    faSun,
    faUser,
    faWarning,
    faXmark
)

export default {
  //extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
      // Make font-awesome available in templates.
      app.component('fa-icon', FontAwesomeIcon)
  }
} satisfies Theme

