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
    label: 'micro-vue3-alive',
    key: '/micro-vue3-alive',
  },
  {
    label: 'micro-vue3-single',
    key: '/micro-vue3-single',
  },
  {
    label: 'micro-react-alive',
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
