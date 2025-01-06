import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: '../public/dist',
        emptyOutDir: true,
        manifest: true
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://saas.test',
                changeOrigin: true
            }
        }
    }
})