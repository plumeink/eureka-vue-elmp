import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { encode, decode } from 'msgpack-lite'

export const useAuthStore = defineStore('auth', () => {
    const permissions = useLocalStorage('permissions', {
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
    },{
        mergeDefaults:true,
        serializer: {
            //TODO 2进制转16进制 + 转换位数调整 + 数组拆分与拼接
            read: (v: any) => v ? decode(Buffer.from(v, 'base64')) : null,
            write: (v: any) => encode(v).toString('base64'),
        },
    })

    return { permissions }
})