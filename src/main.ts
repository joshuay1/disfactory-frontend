import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import CoolLightBox from 'vue-cool-lightbox'
import i18next from 'i18next'
import VueParams from 'vue-params'
import VueI18Next from 'vue-i18next'

import './registerServiceWorker'
import VueGtag from 'vue-gtag'
import vuetify from './plugins/vuetify'

import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

import { Languages } from './locales/constants'
import zh_tw from './locales/main-zh_tw'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(CoolLightBox)
Vue.use(VueParams)
Vue.use(VueI18Next)

Vue.params.i18nextLanguage = Languages.ZH_TW

// See https://github.com/rse/vue-i18next
i18next.init({
  lng: 'zh_tw', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    zh_tw: {
      translation: zh_tw
    }
  }
})

Vue.use(VueGtag, {
  config: { id: 'UA-154739393-1' },
  enabled: process.env.NODE_ENV === 'production'
})

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
