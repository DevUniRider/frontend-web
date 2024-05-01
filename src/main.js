import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import {i18n} from "./i18n.js";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';

import InputText from "primevue/inputtext";
import Panel from "primevue/panel";
import Button from "primevue/button";

createApp(App)
    .use(router)
    .use(PrimeVue)
    .use(i18n)
    .component('pv-input-text', InputText)
    .component('pv-panel', Panel)
    .component('pv-button', Button)
    .mount('#app')
