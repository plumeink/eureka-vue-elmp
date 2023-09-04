import { createI18n } from 'vue-i18n'
import enLocale from '@/lang/en'
import zhLocale from '@/lang/zh'
import store from '@/stores'
import { useLangStore } from '@/stores/lang'

const useStore = useLangStore(store)

const messages = {
    en: {
        ...enLocale,
    },
    zh: {
        ...zhLocale,
    }
}

const i18n = createI18n({
    locale: useStore.langValue || 'zh',
    messages
})

export default i18n