import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', () => {
    const lang = ref('zh')
    function modifyLang(value: string) {
        lang.value = value
    }

    const langValue = computed(() => (lang.value))

    return { lang, langValue, modifyLang }
})
