<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { NLayout, NLayoutContent, NLayoutSider, NMenu } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const options: MenuOption[] = [
  {
    label: 'micro-vue3',
    key: '/micro-vue3',
  },
  {
    label: 'micro-react',
    key: '/micro-react',
  },
]

function handleUpdateValue(value: string) {
  router.push(value)
}
</script>

<template>
  <NLayout :has-sider="true">
    <NLayoutSider>
      <NMenu :value="route.path" mode="vertical" :options="options" :on-update-value="handleUpdateValue" />
    </NLayoutSider>
    <NLayoutContent>
      <RouterView />
    </NLayoutContent>
  </NLayout>
</template>
