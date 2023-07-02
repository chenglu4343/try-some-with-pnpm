<script setup lang="ts">
const num = ref(0)
const answer = ref(0)
const isDisable = ref(false)

const fibonacciWorker = new Worker(new URL('../../node_modules/myWorker/dist/fibonacci.worker.global.js', import.meta.url))

function handleClick() {
  fibonacciWorker.postMessage(num.value)
}

fibonacciWorker.onmessage = (e) => {
  answer.value = e.data
  isDisable.value = false
}
</script>

<template>
  <div>Fibonacci</div>
  <div class="flex gap-2 items-center">
    <input v-model="num" type="number" :disabled="isDisable">
    <button :disabled="isDisable" @click="handleClick">
      calc
    </button>
    <span>answer:</span>
    <span>{{ answer }}</span>
  </div>
</template>
