import path from 'path'
import { defineConfig } from 'vite'
import vitePluginUni from '@dcloudio/vite-plugin-uni'
const uni = (vitePluginUni as any).default
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [uni()],
    server: {
        port: 6060,
        open: true,
        proxy: {},
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        chunkSizeWarningLimit: 1024,
        minify: 'esbuild',
    },
})
