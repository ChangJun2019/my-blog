<script setup lang="ts">
import Videos from '@/assets/data/Videos.json'

const videos = Videos
</script>

<template>
  <section>
    <h3 id="Video" class="my-4 text-lg c-text-muted font-semibold">
      观影
    </h3>
    <div class="w-full flex overflow-x-auto py-2 space-x-2" scrollbar="~ rounded track-color-transparent thumb-color-bg-muted">
      <div v-for="(video, index) in videos" :key="index" class="relative flex flex-shrink-0 basis-22 flex-col text-center align-middle">
        <NuxtLink to="#" class="mt-auto w-full">
          <img class="h-auto min-h-24 w-full border-2 border-transparent border-solid c-bg-muted align-middle dark:opacity-90" :src="video.cover" alt="" loading="lazy">
          <div class="line-clamp-2 min-h-8 scale-80 px-1 text-xs c-text-base">
            {{ video.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
