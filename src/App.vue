<script setup lang="ts">
import {RouterView} from 'vue-router'
import {ElConfigProvider} from 'element-plus'
import elementEnLocale from 'element-plus/dist/locale/en.mjs' // element-ui lang
import elementZhLocale from 'element-plus/dist/locale/zh-cn.mjs'// element-ui lang
import 'dayjs/locale/zh-cn'
import elConfig from '@/config/element'
import {useLangStore} from '@/stores/lang'

const store = useLangStore()

</script>

<template>
    <el-config-provider
            :size="elConfig.size"
            :z-index="elConfig.zIndex"
            :locale="store.langValue === 'zh' ? elementZhLocale : elementEnLocale"
            namespace="piw">
        <RouterView/>
    </el-config-provider>
</template>

<style scoped lang="scss">

</style>
