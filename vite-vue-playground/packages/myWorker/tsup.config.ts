import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./**.worker.ts'],

  splitting: false,

  sourcemap: false,

  clean: true,

  dts: false,

  format: ['iife'],

  target: 'es2020',
})
