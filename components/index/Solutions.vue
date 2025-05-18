<template>
  <div class="flex flex-col py-10">
    <TitleComponent title="Soluções" class="mb-24" />

    <div
      class="px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24"
    >
      <!-- Bloco 1 -->
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div
          class="bg-[#6C4BB2] rounded-[55px] w-full lg:w-[80%] aspect-[4/3] overflow-hidden flex items-center justify-center"
        >
          <img
            src="/index/solucao1.png"
            alt="Mulher feliz no notebook"
            class="rounded-[40px] object-cover w-full h-full"
          />
        </div>
        <div
          class="flex flex-col space-y-4 h-full justify-between text-center lg:text-left"
        >
          <div class="flex flex-col space-y-4">
            <h2
              class="text-[#6C4BB2] text-2xl sm:text-3xl font-bold leading-snug"
            >
              Inovação que<br />Conecta Mulheres<br />ao Futuro
            </h2>
            <p
              class="text-[#6C4BB2] text-base font-medium max-w-md mx-auto lg:mx-0"
            >
              Promovemos inclusão digital, autonomia econômica e liderança
              feminina, com foco nos princípios do ESG e nos Objetivos de
              Desenvolvimento Sustentável da ONU.
            </p>
          </div>
          <NuxtLink
            to="/inscricao"
            class="bg-[#6C4BB2] text-white rounded-full px-6 py-2 w-fit flex items-center gap-2 mx-auto lg:mx-0 hover:bg-[#5a3e94] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Descubra
            <Icon name="mdi:arrow-right" class="text-white" />
          </NuxtLink>
        </div>
      </div>

      <!-- Bloco 2 -->
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div
          class="bg-[#EC3494] rounded-[55px] w-full lg:w-[80%] aspect-[4/3] overflow-hidden flex items-center justify-center"
        >
          <img
            src="/index/solucao2.png"
            alt="Mulher feliz no notebook"
            class="rounded-[40px] object-cover w-full h-full"
          />
        </div>
        <div
          class="flex flex-col space-y-4 h-full justify-between text-center lg:text-left"
        >
          <div class="flex flex-col space-y-4">
            <h2
              class="text-[#EC3494] text-2xl sm:text-3xl font-bold leading-snug"
            >
              Selo Mulheres<br />Conectadas
            </h2>
            <p
              class="text-[#EC3494] text-base font-medium max-w-md mx-auto lg:mx-0"
            >
              Valorize a reputação da sua marca com uma creditação alinhada ao
              ESG e à Agenda 2030. Mais do que um símbolo, o selo reforça o
              compromisso da sua marca.
            </p>
          </div>
          <NuxtLink
            to="/inscricao"
            class="bg-[#EC3494] text-white rounded-full px-6 py-2 w-fit flex items-center gap-2 mx-auto lg:mx-0 hover:bg-[#d02d7e] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Descubra
            <Icon name="mdi:arrow-right" class="text-white" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
