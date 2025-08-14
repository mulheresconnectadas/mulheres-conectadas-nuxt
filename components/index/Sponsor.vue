<template>
  <section class="sponsor-section bg-gray-50 py-16 lg:py-20 relative">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Título da Seção -->
        <div class="space-y-4 mb-12">
          <p
            class="text-sm font-semibold text-purple-600 uppercase tracking-wider"
          >
            Apoio Institucional
          </p>
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
            Patrocinador do projeto
          </h3>
          <div
            class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
          ></div>
        </div>

        <!-- Container dos Logos -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16"
        >
          <!-- Logo Sudene -->
          <NuxtLink
            to="https://www.gov.br/sudene/pt-br"
            external
            target="_blank"
            class="group transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-300 group-hover:shadow-purple-500/10"
            >
              <img
                src="/index/logo_index_sudene.png"
                alt="Logo Sudene"
                class="h-16 lg:h-20 w-auto object-contain mx-auto transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </NuxtLink>

          <!-- Logo Inova Mulher -->
          <div class="group transition-all duration-300 hover:-translate-y-2">
            <div
              class="bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-300 group-hover:shadow-pink-500/10"
            >
              <img
                src="/index/inova_mulher.png"
                alt="Logo Inova Mulher"
                class="h-16 lg:h-20 w-auto object-contain mx-auto transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <!-- Texto de apoio -->
        <div class="mt-8">
          <p
            class="text-gray-600 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Em parceria com a Sudene, promovemos o desenvolvimento de projetos
            inovadores que fortalecem o protagonismo feminino no Nordeste.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Componente de patrocinador clean e focado
</script>

<style scoped>
.sponsor-section {
  position: relative;
  z-index: 1;
}
</style>
