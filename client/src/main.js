import Vue from 'vue';
import App from './App.vue';
import HighCharts from 'highcharts';
import Maps from 'highcharts/modules/map';
import HighchartsVue from 'highcharts-vue';
import patternFill from 'highcharts/modules/pattern-fill.js'
import VModal from 'vue-js-modal';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo)


Maps(HighCharts);
Vue.use(HighchartsVue);
patternFill(HighCharts);

Vue.use(VModal);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
