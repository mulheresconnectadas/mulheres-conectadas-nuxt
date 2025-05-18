<template>
  <div class="bg-white flex items-center">
    <div class="relative inline-block">
      <!-- Faixa rosa maior, deslocada e chanfrada -->
      <div
        class="absolute left-0 top-[40%] w-[calc(100%-2rem)] h-[80px] bg-gradient-to-r from-[#EC3494] to-[#F46CAC] z-0 clip-diagonal"
      ></div>

      <!-- Texto via prop -->
      <h2
        class="relative z-10 left-[15%] font-bold text-5xl sm:text-5xl md:text-8xl text-[#6C4BB2] drop-shadow-lg"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.clip-diagonal {
  clip-path: polygon(0 0, 100% 0, calc(100% - 8rem) 100%, 0 100%);
}
</style>
