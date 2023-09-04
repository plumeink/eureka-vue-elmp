import C from '@/config/constants';


export default {
    main: [
        {
            title: '仪表盘',
            icon: 'DashboardOutlined',
            path: '/',
            permission: C.ROUTER_PERMISSIONS.TASK,
        },
        {
            title: '用户中心',
            icon: 'UserOutlined',
            path: '/user',
            permission: C.ROUTER_PERMISSIONS.TASK,
            subItem: [
                {
                    title: '我的资料',
                    icon: '',
                    path: '/info',
                    permission: C.ROUTER_PERMISSIONS.TASK_SEARCH,
                },
                {
                    title: '修改密码',
                    icon: '',
                    path: '/password',
                    permission: C.ROUTER_PERMISSIONS.TASK_FILE_LIST,
                },
            ],
        },
        {
            title: '组织管理',
            icon: 'DatabaseOutlined',
            path: '/partisan/organization',
            permission: C.ROUTER_PERMISSIONS.LOGIC,
            subItem: [
                {
                    title: '组织维护',
                    icon: '',
                    path: '/manager',
                    permission: C.ROUTER_PERMISSIONS.LOGIC,
                },
            ],
        },
        {
            title: '集体活动',
            icon: 'BankOutlined',
            path: '/activity',
            permission: C.ROUTER_PERMISSIONS.LOGIC,
            subItem: [
                {
                    title: '活动列表',
                    icon: '',
                    path: '/list',
                    permission: C.ROUTER_PERMISSIONS.LOGIC_LIST,
                },
                {
                    title: '新建活动',
                    icon: '',
                    path: '/new',
                    permission: C.ROUTER_PERMISSIONS.LOGIC_LIST,
                },
                {
                    title: '活动回收站',
                    icon: '',
                    path: '/recycle',
                    permission: C.ROUTER_PERMISSIONS.LOGIC_LIST,
                },
            ],
        },
    ],
};