import Vue from 'vue'
import Router from 'vue-router'
//登陆login
import Login from '../components/account/login/Login.vue'
//商城相关页面
import Shop from '../components/shop/Shop.vue'
import Detail from '../components/shop/goods/Detail.vue'
import List from '../components/shop/goods/List.vue'
import Complate from '../components/shop/order/Complate.vue'
import Pay from '../components/shop/order/Pay.vue'
import Site from '../components/shop/order/Site.vue'
import Shopcar from '../components/shop/shopcar/Shopcar.vue'
import Header from '../components/shop/subcom/Header.vue'

Vue.use(Router)

let goods = [
    { name: 'detail', path: 'goods/detail/:id', component: Detail },
    { name: 'list', path: 'goods/list', component: List }
];
let order = [
    { name: 'complate', path: 'order/complate', component: Complate },
    { name: 'pay', path: 'order/pay', component: Pay },
    { name: 'site', path: 'order/site', component: Site }
];
let shopcar = [
    { name: 'shopcar', path: 'shopcar', component: Shopcar }
]

export default new Router({
    routes: [
        { name: 'login', path: '/login', component: Login },
        { name: 'shop', path: '/', component: Shop, children: [...goods, ...order, ...shopcar] }
    ]
})