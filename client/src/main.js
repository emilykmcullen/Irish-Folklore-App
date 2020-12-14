import Vue from 'vue';
import App from './App.vue';
import HighCharts from 'highcharts';
import Maps from 'highcharts/modules/map';
import HighchartsVue from 'highcharts-vue';
import VModal from 'vue-js-modal';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Maps(HighCharts);
Vue.use(HighchartsVue);

Vue.use(VModal)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
