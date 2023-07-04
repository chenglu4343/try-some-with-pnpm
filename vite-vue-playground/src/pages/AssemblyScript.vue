<script setup lang="ts">
import { add } from 'myAssemblyScript'

const a = ref(0)
const b = ref(0)
const answer = ref(0)

function handleClick() {
  answer.value = add(a.value, b.value)
}
</script>

<template>
  <div>add</div>
  <div class="flex gap-2 items-center">
    <input v-model="a">
    <span>+</span>
    <input v-model="b">
  </div>
  <button class="mt-2" @click="handleClick">
    calc
  </button>

  <div class="mt-2">
    <span>answer:</span>
    <span>{{ answer }}</span>
  </div>
</template>
