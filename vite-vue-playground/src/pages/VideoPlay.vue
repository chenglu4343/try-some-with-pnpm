<!-- eslint-disable no-console -->
<!-- eslint-disable no-alert -->
<script setup lang="ts">
const fileInputRef = ref<HTMLInputElement>()

const videoUrl = ref<string>()

watchEffect(() => {
  console.log('videoUrl.value', videoUrl.value)
})

async function handleChange() {
  const file = fileInputRef.value?.files?.item(0)

  if (file) {
    if (file.type === 'video/mp4') {
      videoUrl.value && URL.revokeObjectURL(videoUrl.value)
      videoUrl.value = URL.createObjectURL(file)
      return
    }

    alert('file not support')
  }
}

function handleClear() {
  fileInputRef.value!.value = ''
}
</script>

<template>
  <main>
    <header>Hello World</header>
    <input ref="fileInputRef" type="file" accept="video/*" @change="handleChange">
    <button @click="handleClear">
      clear
    </button>

    <video controls width="1000" class="mt-4" autoplay :src="videoUrl" crossorigin="anonymous" />
  </main>
</template>
