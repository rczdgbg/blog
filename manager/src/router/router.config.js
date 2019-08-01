import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [ //配置路由，使用数组形式
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/login/login.vue'], resolve)
        },
        {
            path: '/page',
            name: 'page',
            component: resolve => require(['@/views/page/page.vue'], resolve),
            children: [{
                    path: 'index',
                    name: 'index',
                    meta: {
                        name: '首页',
                        icon: 'ios-home'
                    },
                    component: resolve => require(['@/views/page/index.vue'], resolve),
                },
                {
                    path: 'articleList',
                    name: 'articleList',
                    meta: {
                        name: '文章列表',
                        pname: '文章管理',
                        icon: 'ios-paper'
                    },
                    component: resolve => require(['@/views/page/articleManger/articleList.vue'], resolve),
                },
                {
                    path: 'commentList',
                    name: 'commentList',
                    meta: {
                        name: '评论管理',
                        pname: '文章管理',
                        icon: 'ios-paper'
                    },
                    component: resolve => require(['@/views/page/articleManger/commentList.vue'], resolve),
                },
                {
                    path: 'friendLinkList',
                    name: 'friendLinkList',
                    meta: {
                        name: '友链列表',
                        pname: '友链管理',
                        icon: 'ios-contacts'
                    },
                    component: resolve => require(['@/views/page/friendLinkManger/friendLinkList.vue'], resolve),
                },
                {
                    path: 'backMenu',
                    name: 'backMenu',
                    meta: {
                        name: '后台菜单',
                        pname: '菜单管理',
                        icon: 'ios-menu'
                    },
                    component: resolve => require(['@/views/page/menuManger/backMenu.vue'], resolve),
                },
                {
                    path: 'prosceniumMenu',
                    name: 'prosceniumMenu',
                    meta: {
                        name: '前台菜单',
                        pname: '菜单管理',
                        icon: 'ios-menu'
                    },
                    component: resolve => require(['@/views/page/menuManger/prosceniumMenu.vue'], resolve),
                },
                {
                    path: 'userList',
                    name: 'userList',
                    meta: {
                        name: '用户管理',
                        pname: '用户管理',
                        icon: 'ios-people'
                    },
                    component: resolve => require(['@/views/page/userManger/userList.vue'], resolve),
                },
            ]
        }
    ]
})