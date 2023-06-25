// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import Inspect from 'vite-plugin-inspect'

import HelloPlugin from 'vite-plugin-hello'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vitest'],
      dts: 'src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    Inspect(),

    HelloPlugin(),
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
