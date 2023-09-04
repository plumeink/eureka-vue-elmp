<script setup lang="ts">
import {useLangStore} from "@/stores/lang";
import i18n from "@/lang";

const store = useLangStore()

const handleChangeLang = () => {
    store.modifyLang(store.langValue !== "zh" ? "zh" : "en")
    i18n.global.locale = store.langValue === "zh" ? "zh" : "en"
    console.log(i18n)
}
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
      <el-button @click="handleChangeLang">{{ $t("tip") }}</el-button>
    <h1 class="green">{{ $t("tip") }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
