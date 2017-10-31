import Vue from 'vue'
import Router from 'vue-router'
/*import Hello from '@/components/Hello'*/
import Index from '@/components/index'
import Read from '@/components/read_page'

import Sliber from '@/components/sliber.vue'
import Carousel from '@/components/carousel.vue'
import Shop from '@/components/shop.vue'
import Login from '@/components/login.vue'
import lifeStyle from '@/components/lifeStyle.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '/',
            component: Index
        },
        {
            path: '/index',
            name: '/index',
            component: Index
        },
        {
            path:'/index/read',
            name:'read',
            component: Read,
        },
        {
            path:'/index/sliber',
            name:'sliber',
            component: Sliber,
        },
        {
            path:'/index/carousel',
            name:'carousel',
            component: Carousel,
        },
        {
            path:'/index/shop',
            name:'shop',
            component: Shop,
        },
        {
            path:'/index/login',
            name:'login',
            component: Login,
        },
        {
            path:'/index/lifeStyle',
            name:'lifeStyle',
            component: lifeStyle,
        }
    ]
})
