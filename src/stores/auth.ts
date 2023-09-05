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
            read: (v: any) => v ? () => {
                console.log(123321)
                function deobfuscate(uint8Array) {
                    const decodedData = decode(uint8Array);

                    const lastByte = new Uint8Array(1);
                    lastByte[0] = 0;

                    for (let i = 0; i < decodedData.length; i++) {
                        const curByte = decodedData[i];
                        decodedData[i] ^= lastByte[0];
                        lastByte[0] = curByte;
                    }

                    return decodedData;
                }
                console.log(123321)

                return decode(deobfuscate(new Uint8Array(decode(Buffer.from(v.split('/').map(item => parseInt(item, 16).toString()).join(','), 'utf-8')))))
            } : null,
            write: (v: any) => {
                function obfuscate(uint8Array) {
                    const lastByte = new Uint8Array(1);
                    lastByte[0] = 0;

                    for (let i = 0; i < uint8Array.length; i++) {
                        const curByte = uint8Array[i];
                        uint8Array[i] ^= lastByte[0];
                        lastByte[0] = curByte;
                    }

                    return uint8Array;
                }
                function deobfuscate(uint8Array) {
                    const decodedData = uint8Array;

                    const lastByte = new Uint8Array(1);
                    lastByte[0] = 0;

                    for (let i = 0; i < decodedData.length; i++) {
                        const curByte = decodedData[i];
                        decodedData[i] ^= lastByte[0];
                        lastByte[0] = curByte;
                    }

                    return decodedData;
                }
                console.log(123333321)
                console.log('ob',new Uint8Array(encode(v)))
                const decoder = new TextDecoder('utf-8');
                const o = obfuscate(new Uint8Array(encode(v))).map(item => parseInt(item).toString(16)).join('/')
                console.log('000', new Uint8Array(encode(v)))
                console.log('111', obfuscate(new Uint8Array(encode(v))))
                console.log('222' , deobfuscate(obfuscate(new Uint8Array(encode(v)))))
                console.log('obb', o)
                const encoder = new TextEncoder('utf-8');
                console.log('deob',deobfuscate(o.split('/').map(item => parseInt(item, 16))))
                console.log('deobb',decode(deobfuscate(o.split('/').map(item => parseInt(item, 16)))))

                return obfuscate(new Uint8Array(encode(v))).split(',').map(item => parseInt(item).toString(16)).join('/')
            },
        },
    })

    return { permissions }
})