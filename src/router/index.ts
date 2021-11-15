import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import Notfound from "@/components/Notfound.vue";
import EditLabel from "@/components/EditLabel.vue";
import addNewLabel from "@/components/addNewLabel.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/labels',
        name: 'Labels',
        component: Labels
    },
    {
        path: '/labels/edit/:id',
        component: EditLabel
    },
    {
        path: '/labels/addNew',
        component: addNewLabel
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },
    {
        path: '*',
        name: 'Notfound',
        component: Notfound
    }

]

const router = new VueRouter({
    routes
})

export default router
