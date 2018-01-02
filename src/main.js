// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`./themes/app.${__THEME}.styl`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import anime from 'animejs'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAnimateNumber from 'vue-animate-number'

import 'quasar-extras/animate/zoomIn.css'
import 'quasar-extras/animate/bounceInRight.css'
import 'quasar-extras/animate/bounceOutLeft.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueAnimateNumber)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAck55kVM1DZNvQ9DFc5kdjBz0cAgjnbiY',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
}) // Vue google map

// animeJs
Vue.use(anime)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
