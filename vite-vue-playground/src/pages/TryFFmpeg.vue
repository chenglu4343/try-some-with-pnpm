<!-- eslint-disable no-console -->
<script setup lang="ts">
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

const videoUrl = ref()
// const rtspURL = 'rtsp://192.168.1.8:8554/vlc'
const inputUrl = ref('')
const message = ref('')

const ffmpegRef = shallowRef(new FFmpeg())
const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/esm'
const loaded = ref(false)

async function handlePlay() {
  console.log('handlePlay')

  // await ffmpegRef.value.writeFile('input.rtsp', await fetchFile(rtspURL))
  // await ffmpegRef.value.exec(['-i', 'input.rtsp', '-c', 'copy', 'out.mp4'])
  // const data = ffmpegRef.value.readFile('out.mp4')
}

async function handleLoadFFmpeg() {
  await ffmpegRef.value.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
  })
  loaded.value = true
}

onMounted(async () => {
  await handleLoadFFmpeg()
  handlePlay()
})
</script>

<template>
  <main>
    <section>
      <h5>ffmpeg is Load : {{ loaded }}</h5>
      <button v-if="!loaded" @click="handleLoadFFmpeg">
        load
      </button>
      <p>{{ message }}</p>
    </section>

    <section v-if="loaded">
      <input v-model="inputUrl" type="text">
      <button @click="handlePlay">
        play
      </button>
    </section>

    <video controls width="1000" class="mt-4" autoplay :src="videoUrl" crossorigin="anonymous" />
  </main>
</template>
