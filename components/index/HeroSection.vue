<template>
  <section
    class="container mx-auto px-20 py-16 flex items-center justify-between"
  >
    <!-- Conteúdo à esquerda -->
    <div class="max-w-2xl">
      <h2 class="text-[#6C4BB2] text-2xl mb-4">
        Bem-vinda ao <span class="font-bold">Mulheres Connectadas</span>
      </h2>

      <h1 class="text-6xl font-bold text-[#6C4BB2] mb-6">
        Capacitando Mulheres<br />
        <span class="text-5xl">através da inovação</span>
      </h1>

      <p class="mb-6 text-lg">
        <span class="text-[#EC3494] font-bold">
          Mulheres Conectadas é uma startup de tecnologia social que capacita
          mulheres com foco em inclusão digital, liderança e empreendedorismo.
        </span>
        <span class="text-[#6C4BB2]">
          Já impactamos milhares de mulheres com soluções acessíveis, inovadoras
          e alinhadas à
        </span>
        <a
          href="https://brasil.un.org/pt-br/sdgs"
          target="_blank"
          rel="noopener"
          class="text-[#EC3494] hover:underline font-bold"
        >
          Agenda 2030 da ONU.
        </a>
      </p>

      <NuxtLink
        to="/inscreva-se"
        class="inline-block bg-[#6C4BB2] text-white px-8 py-3 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg"
      >
        Inscreva-se
      </NuxtLink>
    </div>

    <!-- Imagem à direita com ícones -->
    <div class="relative">
      <div
        class="absolute inset-0 bg-[#6C4BB2] rounded-blob -z-10 transform scale-110"
      ></div>
      <img
        src="/index/hero-image.png"
        alt="Mulher sorrindo"
        class="relative z-10 max-w-xl"
      />

      <!-- Ícones de redes sociais -->
      <div
        class="absolute -right-16 top-1/2 transform -translate-y-1/2 flex flex-col gap-4"
      >
        <a
          href="https://facebook.com/mulheresconnectadasoficial"
          target="_blank"
          rel="noopener"
          class="text-[#EC3494] hover:scale-110 transition-transform"
        >
          <Icon name="mdi:facebook" size="40" />
        </a>
        <a
          href="https://instagram.com/mulheresconnectadasoficial"
          target="_blank"
          rel="noopener"
          class="text-[#EC3494] hover:scale-110 transition-transform"
        >
          <Icon name="mdi:instagram" size="40" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
.rounded-blob {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
</style>
