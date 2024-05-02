import { createRouter, createWebHistory } from 'vue-router'
import QualifyCard from '../unirider/shared/components/qualify-card/qualify-card.component.vue';
import MapsPage from "../unirider/shared/pages/maps-page.component.vue";
import LoginUser from '../unirider/shared/pages/login-user.component.vue';
import ToolbarComponent from "../unirider/public/toolbar.component.vue";
import Home from "../unirider/shared/pages/home.component.vue";
import RegisterUser from "../unirider/shared/pages/register-user.component.vue";
import ChooseUser from "../unirider/shared/pages/choose-user.vue";
const routes = [
    { path: '/', component: LoginUser },
    { path: '/create', component: RegisterUser },
    { path: '/verify', component: ChooseUser },
    { path: '/home', name: 'Home', component: Home },
    { path: '/main', name:'main', component: ToolbarComponent },
    { path: '/maps', component: MapsPage },
    { path: '/qualify', component: QualifyCard },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router