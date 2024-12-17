import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

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
