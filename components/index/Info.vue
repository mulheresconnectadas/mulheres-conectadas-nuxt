<template>
  <section class="info-section bg-white py-20 lg:py-28 relative w-full">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <!-- Conteúdo Principal -->
          <div class="lg:col-span-7 space-y-8">
            <div class="space-y-6">
              <h2
                class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              >
                Fazemos parte do projeto
                <span
                  class="block mt-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent"
                >
                  Inova Mulher
                </span>
              </h2>

              <div
                class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              ></div>

              <p
                class="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Uma iniciativa que valoriza o protagonismo feminino em inovação
                nas áreas de economia criativa, bioeconomia e educação,
                fomentando projetos inovadores liderados por mulheres no
                Nordeste.
              </p>
            </div>

            <div class="pt-4">
              <NuxtLink
                to="https://www.gov.br/sudene/pt-br/assuntos/inovamulher"
                external
                target="_blank"
                class="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
              >
                Saiba mais
                <svg
                  class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Logos das Organizações -->
          <div
            class="lg:col-span-5 flex flex-col items-center justify-center space-y-8"
          >
            <div class="text-center space-y-4">
              <p
                class="text-sm font-medium text-gray-500 uppercase tracking-wider"
              >
                Patrocinador do projeto
              </p>
            </div>

            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12"
            >
              <NuxtLink
                to="https://www.gov.br/sudene/pt-br"
                external
                target="_blank"
                class="group transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="/index/logo_index_sudene.png"
                  alt="Logo Sudene"
                  class="h-20 object-contain transition-all duration-300 group-hover:scale-105"
                />
              </NuxtLink>

              <div
                class="group transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="/index/inova_mulher.png"
                  alt="Logo Inova Mulher"
                  class="h-30 object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Elementos decorativos sutis -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"
      ></div>
    </div>
  </section>
</template>

<script setup>
// Componente limpo sem dependências desnecessárias
</script>

<style scoped>
.info-section {
  position: relative;
  z-index: 1;
}

/* Garantir que os gradientes funcionem corretamente */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
