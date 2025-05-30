import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faShieldHalved, faCodeBranch, faHeadset, 
  faArrowRight, faArrowDown, faCheck, faTimes,
  faPaperPlane, faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { 
  faDiscord, faYoutube, faTiktok, faFacebook 
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin
library.add(
  faShieldHalved, faCodeBranch, faHeadset, 
  faArrowRight, faArrowDown, faCheck, faTimes,
  faPaperPlane, faEnvelope,
  faDiscord, faYoutube, faTiktok, faFacebook
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
}) 