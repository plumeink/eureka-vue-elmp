<script lang="tsx">
export default {
  name: "AsideContainer"
}
</script>

<script setup lang="tsx">
import {useRouter, useRoute} from 'vue-router';
import menuConfig from "@/config/menuConfig";
import pinia from 'pinia'
import {useAuthStore} from '@/stores/auth'

const store = useAuthStore();
const router = useRouter();
const route = useRoute();

const menuItemRender = (props: object) => props.menu.map(item => {
  interface Item {
    permission: boolean;
    title: string;
    icon: string;
    path: string;
    subItem: {
      title: string;
      icon: string;
      path: string;
      permission: string;
    }[];
  }

  const myItem: Item = {
    ...item
  }

  const {uri} = props;
  const pathname = route.path;
  const {permissions} = store;
  const path = uri ? uri + myItem.path : myItem.path;
  if (myItem.subItem !== undefined && myItem.subItem.length > 0 && (myItem.permission === true || permissions[myItem.permission])) {
    return (
        <el-sub-menu index={path}>
          {{
            title: () => myItem.title,
            default: () => menuItemRender({menu: myItem.subItem, uri: path})
          }}
        </el-sub-menu>
    );
  } else {
    if (myItem.permission === true || permissions[myItem.permission]) {
      return (
          <el-menu-item index={path} onClick={() => handleRouterPush(pathname, path)}>
            {myItem.title}
          </el-menu-item>
      );
    } else {
      return null;
    }
  }
});

const handleRouterPush = (pathname, path) => {
  if (pathname !== path) {
    router.push(path);
  }
}
</script>

<template>
  <div>
    <el-menu style="height: 100%">
      <menuItemRender :menu="menuConfig.main" uri=""/>
    </el-menu>
  </div>
</template>

<style scoped>

</style>