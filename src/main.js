// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Load external libs
import axios from 'axios'
import lodash from 'lodash'
import feather from 'feather-icons'
import VueHighlightJS from 'vue-highlightjs'
Vue.prototype.$http = axios.create()
Vue.prototype._ = lodash
Vue.prototype.feather = feather
Vue.use(VueHighlightJS)
Vue.prototype.beautify = require('js-beautify').html

// Components
import CodePreview from './components/CodePreview'
import TabsMenu from './components/TabsMenu'
import SideMenu from './components/SideMenu'
import SubMenu from './components/SubMenu'
Vue.component('code-preview', CodePreview)
Vue.component('TabsMenu', TabsMenu)
Vue.component('SideMenu', SideMenu)
Vue.component('SubMenu', SubMenu)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
