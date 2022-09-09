import Vue from 'vue'
import App from './App.vue'
import Vue2ol from "@gis-js/vue2ol"
import Vue2olExtend from "@gis-js/vue2ol-extend"
import "ol/ol.css"

Vue.use(Vue2ol);
Vue.use(Vue2olExtend);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
