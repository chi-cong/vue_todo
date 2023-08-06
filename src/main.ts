import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import { createI18n } from 'vue-i18n/dist/vue-i18n.js'
import { createI18n } from '../node_modules/vue-i18n'
import { langSet } from './languageSet'

const app = createApp(App)
const i18n = createI18n({ locale: 'vi', fallbackLocale: 'en', langSet })

app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')
