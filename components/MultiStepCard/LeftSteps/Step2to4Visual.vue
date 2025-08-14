<template>
  <div class="flex flex-col h-full items-end gap-5">
    <div class="flex flex-wrap justify-center md:justify-end gap-4 mb-6">
      <div class="flex flex-col items-center space-y-2">
        <div class="font-medium text-white opacity-50">Apoio financeiro:</div>
        <div class="flex flex-row gap-4">
          <img
            src="/inscricao/logo-inova.png"
            alt="Apoio financeiro"
            class="h-8"
          />
          <NuxtLink
            to="https://www.gov.br/sudene/pt-br"
            external
            target="_blank"
            class="group transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src="/inscricao/logo-sudene.png"
              alt="Apoio institucional"
              class="h-8"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <div class="font-medium text-white opacity-50">
          Apoio institucional:
        </div>
        <div class="flex flex-row gap-4">
          <img
            src="/inscricao/logo-ifal.png"
            alt="Apoio institucional"
            class="h-8"
          />
        </div>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <div class="font-medium text-white opacity-50">Realização:</div>
        <div class="flex flex-row gap-4">
          <img
            src="/inscricao/logo-mulheres.png"
            alt="Realização"
            class="h-8"
          />
        </div>
      </div>
    </div>
    <h2 class="text-3xl font-medium mb-auto max-w-md text-right">
      {{
        props.step === 2
          ? "Vamos começar sua inscrição!"
          : props.step === 3
          ? "Falta pouco para finalizar!"
          : "Último passo! Quase lá! Finalize sua inscrição. Revise e envie para concluir."
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
