<script setup lang="ts">
const { navigation, page, surround, globals } = useContent()
const { title, date, duration, cover } = unref(page)
</script>

<template>
  <header class="m-auto text-left mt-12 mb-3">
    <h1 class="title text-4xl font-extrabold !mb-2 !mt-4">
      {{ title }}
    </h1>
    <p class="text-base mt-2 text-gray-500">
      <span>{{ $dayjs(date).fromNow() }}</span>
      <span class="ml-2 text-gray-400 ml-4">{{ duration }} read</span>
    </p>
    <img :src="cover" alt="" class="mt-4 border border-dark dark:border-white rounded-md w-full h-auto">
  </header>
</template>
