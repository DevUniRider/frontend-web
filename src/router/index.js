import {createRouter, createWebHistory} from "vue-router";
import SuscriptionPagoComponent from "../unirider/subscription/pages/suscription-pago.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/payment',    component: SuscriptionPagoComponent},
        { path: '/',        redirect: '/home'}
    ]
});

export default router;