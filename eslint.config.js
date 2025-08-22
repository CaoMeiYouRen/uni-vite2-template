// eslint.config.js
import { defineConfig } from 'eslint/config'
import cmyr from 'eslint-config-cmyr/vue'

export default defineConfig([
    cmyr,
    {
        // 处理全局变量
        languageOptions: {
            globals: {
                App: 'readonly',
                Page: 'readonly',
                Component: 'readonly',
                Behavior: 'readonly',
                getApp: 'readonly',
                getCurrentPages: 'readonly',
                plus: 'readonly',
                uni: 'readonly',
                Vue: 'readonly',
                wx: 'readonly',
                my: 'readonly',
                swan: 'readonly',
                tt: 'readonly',
                qh: 'readonly',
                qa: 'readonly',
                HWH5: 'readonly',
                weex: 'readonly',
                __id__: 'readonly',
                __uniConfig: 'readonly',
                __uniRoutes: 'readonly',
                __registerPage: 'readonly',
                UniViewJSBridge: 'readonly',
                UniServiceJSBridge: 'readonly',
                __PLATFORM__: 'readonly',
                __VERSION__: 'readonly',
                __GLOBAL__: 'readonly',
                __PLATFORM_TITLE__: 'readonly',
                __PLATFORM_PREFIX__: 'readonly',
            },
        },
        rules: {
            '@typescript-eslint/no-empty-function': 'off',
            'vue/match-component-file-name': 'off',
        },
    },
])
