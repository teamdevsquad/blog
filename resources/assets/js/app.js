/* global window, document */

import Vue    from 'vue';
import axios  from 'axios';
import lodash from 'lodash';
import jQuery from 'jquery';
import './pages';

window.Vue = Vue;
window.axios = axios;
window._ = lodash;
window.$ = jQuery;
window.jQuery = jQuery;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

window.app = new Vue({
    el: '#app',
});
