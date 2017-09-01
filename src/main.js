// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Load external libs
import feather from 'feather-icons'
import anchors from 'anchor-js'
import VueHighlightJS from 'vue-highlightjs'
Vue.prototype.feather = feather
Vue.prototype.anchors = anchors
Vue.prototype.beautify = require('js-beautify').html
Vue.use(VueHighlightJS)

// Components
import CodePreview from './components/CodePreview'
Vue.component('code-preview', CodePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
