# /
- try using esno
- try configuring eslint
- try using simple-git-hooks to detect code at commit time

# packages

## publicUtils
- try using unbuild packaging
- try to fully configure package.json
- try to publish package to https://registry.npmjs.org
- try using bump to update the version automatically
- try to export the cli module

## vite-plugin-hello
- try using tsup for packaging
- try simple virtual-module

## utils
- nothing

# .github\workflows
- try using the github workflow to publish publicUtils

# patches
- try patching lodash-es using PNPM patch

# simple-playground
- try to import the cjs module in mjs
- try to import the mjs module in cjs
- try to run publicUtils cli

# vite-vue-playground
- config vitest
- config alias
- config some plugins
  - @vitejs/plugin-vue-jsx
  - unocss
  - unplugin-auto-import
  - rollup-plugin-visualizer
  - vite-plugin-inspect
- try using vite-plugin-hello

## using vitest
- vitest setup vue-router-mock
  - vite-vue-playground/vitestSetup/setupVueRouterMock.ts
- try vitest test isTodayFriday
  - vite-vue-playground/src/utils/isTodayFriday.test.ts
- try vitest test sleepTime
  - vite-vue-playground/src/utils/sleepTime.test.ts

# wujie-playground
- try to apply micro front-end through wujie
- use concurrently to execute commands in parallel
