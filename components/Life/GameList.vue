<script setup lang="ts">
import Games from '@/assets/data/Games.json'

const gameList = Games
</script>

<template>
  <section>
    <h3 id="Game" class="my-4 text-lg c-text-muted font-semibold">
      游戏
    </h3>
    <div class="grid w-full gap-8 sm:grid-cols-2">
      <div
        v-for="game in gameList"
        :key="game.id"
        class="overflow-hidden border c-border-base rounded-lg bg-base shadow-sm"
      >
        <img
          :alt="game.name"
          :src="game.cover"
          class="h-46 w-full object-cover dark:opacity-90"
        >

        <div class="p-4 sm:px-6 sm:py-4">
          <h3 class="line-clamp-2 min-h-12 c-text-base font-semibold">
            {{ game.name }}
          </h3>

          <p class="line-clamp-3 mt-2 text-sm/relaxed c-text-muted">
            {{ game.comment }}
          </p>
        </div>
        <div class="flex px-3 pb-3 space-x-4 sm:px-6 sm:pb-4">
          <GameBadge :platform="game.platform" />
          <div v-if="game.duration" class="inline-flex items-center justify-center rounded-sm c-bg-primary px-1 py-0.5 text-xs c-text-primary font-semibold">
            {{ game.duration }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
