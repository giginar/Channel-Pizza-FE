import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store';
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import { ValidationProvider } from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {  faHome,  faUser,  faUserPlus,  faSignInAlt,  faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(IconsPlugin)
Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

