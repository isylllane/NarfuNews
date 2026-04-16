// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { h } from 'vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import HouseIcon from '../src/components/icons/HouseIcon.vue'
import FireIcon from "@/src/components/icons/FireIcon.vue";

const customIcons = {
    customHome: {
        component: (props) => h(HouseIcon, {
            size: props.size,
            class: 'v-icon__svg'
        })
    },
    customFire: {
        component: (props) => h(FireIcon, {
            size: props.size,
            class: 'v-icon__svg'
        })
    }
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases: {
            'custom-home': HouseIcon,
            'fire-icon': FireIcon
        },
        sets: {
            custom: customIcons
        }
    },
    // Подключить русский язык
    locale: {
        current: 'ru',
        locale: 'ru',
    },
    // Установка темы
    theme: {
        defaultTheme: 'light',
    }
})

export default vuetify