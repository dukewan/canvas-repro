import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import CanvasPlugin from '@nativescript-community/ui-canvas/vue'

Vue.use(CanvasPlugin);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
