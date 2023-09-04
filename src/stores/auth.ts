import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const permissions = ref({
        LOGIN: 'LOGIN',
        STATS: 'STATS',
        // 任务管理
        TASK: 'TASK',
        TASK_FILE_LIST: 'TASK_FILE_LIST',
        TASK_SEARCH: 'TASK_SEARCH',
        TASK_LIST: 'TASK_LIST',
        // 模板管理
        TEMPLATE: 'TEMPLATE',
        TEMPLATE_LIST: 'TEMPLATE_LIST',
        TEMPLATE_UPLOAD_HISTORY: 'TEMPLATE_UPLOAD_HISTORY',
        // 逻辑管理
        LOGIC: 'LOGIC',
        LOGIC_LIST: 'LOGIC_LIST',
        // 用户管理
        MANAGER: 'MANAGER',
        USER_MANAGER: 'USER_MANAGER',
    })

    return { permissions }
})
