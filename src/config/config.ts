/*
 * 项目基础配置
*/
const __DEV__ = true; // 调试环境
const __PERSIST__ = true; // 开启pinia持久化
const __SHOW_PACKAGE_SIZE__ = false; // 开启显示依赖包大小分析
const X_CLIENT_TOKEN = 'WEB:FRONT';
const PROJECT_NAME = 'Web Common'; // 项目名称
const PROJECT_GROUP = ''; // 项目组
const PROJECT_CODE = 'Web Common'; // 项目代号
const PROJECT_AUTHOR = 'PlumeInk'; // 项目作者
const PROJECT_COPYRIGHT = '2023 PlumeInk'; // 项目版权所有
const PROJECT_API_PATH = 'https://mockapi.eolinker.com/8Kntn59e69774e1b2dac1d4a4193e0e0488de47672af3f3'; // API请求地址

/*
 * 菜单配置
 * true为显示，false为隐藏
 * AUTO_SIDER开启后Sider将随着宽度变化而变化(自动适配)
 * AUTO_SIDER开启时HAS_SIDER,HAS_HIDER,HAS_WIDTH_SWITCH将默认开启且不受配置文件控制！
 * 若显示菜单需配置./menuConfig.js
 */
const SIDER_BUILDER = {
    AUTO_SIDER: true,
    HAS_SIDER: true,
    HAS_HIDER: false,
    HAS_WIDTH_SWITCH: false,
    OPEN_ALL_KEYS: true,
    BACKGROUND_COLOR: '#f8f8f8', // 侧边栏背景颜色 001629
    ARROW_COLOR: '#f6f6f6', // 侧边栏箭头按钮颜色
};
/*
 * 色调
 * 设置这些颜色后都需要重新npm start启动项目
 */
const PRIMARY_COLOR = '#ff4400'; // 主色调 1890ff
const PRIMARY_1_COLOR = '#f8f8f8'; // 第一副色调 e6f7ff
const HEADER_BACKGROUND_COLOR = '#ffffff'; // 头部背景颜色

export {
    __DEV__,
    __PERSIST__,
    __SHOW_PACKAGE_SIZE__,
    X_CLIENT_TOKEN,
    PROJECT_NAME,
    PROJECT_GROUP,
    PROJECT_CODE,
    PROJECT_AUTHOR,
    PROJECT_COPYRIGHT,
    PROJECT_API_PATH,
    PRIMARY_COLOR,
    PRIMARY_1_COLOR,
    HEADER_BACKGROUND_COLOR,
    SIDER_BUILDER,
};
