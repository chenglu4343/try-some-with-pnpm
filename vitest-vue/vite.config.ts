// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],

  resolve: {
    alias: {
      '@': './src',
    },
  },

  test: {
    environment: 'happy-dom',
    setupFiles: ['./vitestSetup/index.ts'],
  },
})
