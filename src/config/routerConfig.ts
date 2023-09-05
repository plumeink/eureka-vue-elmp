
import C from './constants';

const Login = () => import('../views/HomeView.vue');

const routerConfig = [
    {
        path: '/login',
        component: Login,
        exact: true,
        name: '登录',
        permission: true,
    },
    // {
    //     name: '首页',
    //     path: '/',
    //     isAuthenticated: true,
    //     permission: true
    // },
    {
        path: '/',
        name: '仪表盘',
        exact: true,
        component: Login,
        permission: C.ROUTER_PERMISSIONS.LOGIN,
        isAuthenticated: true,
    },
    {
        path: '/user/info',
        name: '我的资料',
        exact: true,
        component: Login,
        permission: C.ROUTER_PERMISSIONS.LOGIN,
        isAuthenticated: true,
    },
    {
        path: '/user/password',
        name: '修改密码',
        exact: true,
        component: Login,
        permission: C.ROUTER_PERMISSIONS.LOGIN,
        isAuthenticated: true,
    },
    {
        path: '/partisan/organization/manager',
        name: '逻辑管理',
        exact: true,
        component: Login,
        permission: C.ROUTER_PERMISSIONS.LOGIN,
        isAuthenticated: true,
    },
    {
        path: '/partisan/organization/cost',
        name: '逻辑管理',
        exact: true,
        component: Login,
        permission: C.ROUTER_PERMISSIONS.LOGIN,
        isAuthenticated: true,
    },
    {
        path: '/activity/new',
        name: '新建活动',
        exact: true,
        component: Login,
        permission: C.ROUTER_PERMISSIONS.LOGIN,
        isAuthenticated: true,
    },
];

export default routerConfig;