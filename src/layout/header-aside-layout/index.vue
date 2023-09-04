<script lang="ts">
export default {
    name: "HeaderAsideLayout",
}
</script>

<script setup lang="ts">
import HeaderContainer from '@/layout/header/index.vue'
import FooterContainer from '@/layout/footer/index.vue'
import AsideContainer from '@/layout/aside/index.vue'
import {RouterView} from "vue-router";
</script>

<template>
    <el-container class="piw-auto-wh">
        <el-header>
            <HeaderContainer/>
        </el-header>
        <el-container direction="horizontal" class="piw-auto-h">
            <el-aside class="piw-auto-h">
                <AsideContainer class="piw-auto-h"/>
            </el-aside>
            <el-container direction="vertical">
                <el-main>
                    <RouterView/>
                </el-main>
                <el-footer class="piw-footer">
                    <FooterContainer/>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<style scoped lang="scss">
.piw-header {
  height: 52px;
  --piw-header-padding: 0 0;
}

.piw-auto-wh {
    width: 100% !important;
    height: 100% !important;
}

.piw-auto-h {
    height: 100% !important;
}

.piw-footer {
    height: 52px;
}
</style>