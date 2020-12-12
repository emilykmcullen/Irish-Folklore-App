import Vue from 'vue'
import App from './App.vue'
import HighCharts from 'highcharts';
import Maps from 'highcharts/modules/map';
import HighchartsVue from 'highcharts-vue'
// import "leaflet/dist/leaflet.css";

Maps(HighCharts);
Vue.use(HighchartsVue);

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
