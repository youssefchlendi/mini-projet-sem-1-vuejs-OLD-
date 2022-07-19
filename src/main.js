import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'popper.js';
import jQuery from 'jquery';
window.$= window.jQuery=jQuery;
import './assets/all.scss';

createApp(App).use(router).mount("#app");
