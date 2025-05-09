<template>
  <section class="bg-white py-12 px-6 md:px-16">
    <div
      class="w-full mx-auto flex flex-col md:flex-row md:items-center items-center justify-center gap-8"
    >
      <!-- Mapa de Alagoas -->
      <div class="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="/index/alagoas.png"
          alt="Mapa de Alagoas"
          class="w-full drop-shadow-lg"
        />
      </div>

      <!-- Texto -->
      <div class="w-full md:w-1/2 space-y-4 h-full">
        <h2 class="text-3xl md:text-5xl font-bold text-[#EE3792]">
          Onde estamos?
        </h2>
        <p class="text-2xl text-[#6C4BB2] leading-relaxed font-medium">
          Estamos sediadas em Alagoas! Atuamos de forma digital e híbrida em
          diversas regiões do Brasil. Nossas soluções podem ser implementadas em
          qualquer território, em parceria com empresas, governos e
          instituições.
        </p>
        <p class="text-xl font-semibold text-[#EE3792]">
          Entre em contato e leve nossas soluções para sua região.
        </p>

        <a
          href="#"
          class="inline-flex space-x-2 items-center bg-[#EE3792] hover:bg-[#d02d7e] text-white font-medium px-5 py-3 rounded-full transition"
        >
          <Icon name="mdi:arrow-left" class="text-white" />
          <div>Acesse</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Se quiser tornar dinâmico, você pode trocar os textos e URL do botão por props:
// const props = defineProps<{
//   imageSrc?: string
//   title?: string
//   description?: string
//   highlight?: string
//   buttonText?: string
//   buttonUrl?: string
// }>()
</script>
