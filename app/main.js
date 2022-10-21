import App from './App'
import './static/siimple.css';
import './static/siimple-icons.css' 
import axios from 'axios'
Vue.prototype.$http= axios
Vue.prototype.$url= 'https://free-tasks.herokuapp.com'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif