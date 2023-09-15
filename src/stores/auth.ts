import {ref} from 'vue'
import {defineStore} from 'pinia'
import {useLocalStorage, throttleFilter} from '@vueuse/core'
import {read, write} from '@/tools/obfuscate'

export const useAuthStore = defineStore('auth', () => {
    const localStorageName = write('permissions')
    const permissions = useLocalStorage(localStorageName, ref({
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
    }), {
        mergeDefaults: true,
        serializer: {
            read,
            write,
        },
        // VueUse节流
        eventFilter: throttleFilter(1000),
    })

    return {permissions}
})