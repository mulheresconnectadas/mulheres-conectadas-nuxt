<template>
  <div class="bg-white flex flex-col space-y-10 items-center justify-center">
    <IndexHeroSection />
    <IndexStats />
    <IndexFrameVideo />
    <IndexSolutions />
    <!-- <IndexNews /> -->
    <IndexLocation />
    <IndexInfo />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
