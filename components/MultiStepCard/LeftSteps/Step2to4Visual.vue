<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
      <img src="/inscricao/logo-inova.png" alt="Apoio financeiro" class="h-8" />
      <img
        src="/inscricao/logo-sudene.png"
        alt="Apoio institucional"
        class="h-8"
      />
      <img
        src="/inscricao/logo-ifal.png"
        alt="Apoio institucional"
        class="h-8"
      />
      <img src="/inscricao/logo-mulheres.png" alt="Realização" class="h-8" />
    </div>
    <h2 class="text-3xl font-semibold mb-auto">
      {{
        props.step === 2
          ? "Vamos começar sua inscrição!"
          : props.step === 3
          ? "Falta pouco para finalizar!"
          : "Último passo! Quase lá!"
      }}
    </h2>
    <div class="grid grid-cols-3">
      <img
        src="/inscricao/illustration.png"
        alt="Ilustração"
        class="mt-auto"
        :class="{
          'col-start-2': props.step === 3,
          'col-start-3': props.step === 4,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ step: number }>();
</script>
