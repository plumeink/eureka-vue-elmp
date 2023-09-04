<script lang="ts">
export default {
    name: "HeaderContainer"
}
</script>

<script setup lang="ts">
import {ref} from "vue";

const activeIndex = ref("")
</script>

<template>
    <el-menu
        class="piw-header-menu"
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false">
        <div style="flex-grow: 1"/>
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>

<style scoped>
.piw-header-menu {
    height: 52px;
}
</style>