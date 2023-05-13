import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import Tres from '@tresjs/core'
import { router } from './router/main'

const myApp = createApp(App)

myApp.use(Tres)

myApp.use(Quasar, {
  plugins: {},
})

myApp.use(router)
myApp.mount('#app')
