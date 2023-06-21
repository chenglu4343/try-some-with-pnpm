<script setup lang="ts">
import WujieVue from 'wujie-vue3'
</script>

<template>
  <WujieVue
    width="100%"
    height="100%"
    name="micro-vue3-single"
    :props="{ single: true }"
    url="http://localhost:5180/"
  />
</template>
