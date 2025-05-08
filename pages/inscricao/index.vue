<template>
  <div
    class="bg-gradient-to-r from-[#2C144C] to-[#672FB2] flex flex-col space-y-10 py-10"
  >
    <img
      src="/inscricao/title-inscricao.png"
      alt="Inscrição"
      class="w-full mt-10"
    />
    <MultiStepCard />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
