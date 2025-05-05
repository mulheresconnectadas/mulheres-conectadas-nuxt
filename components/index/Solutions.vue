<template>
  <div class="flex-col flex py-10">
    <TitleComponent title="Soluções" class="mb-24" />
    <div class="px-20 grid grid-cols-2 gap-24">
      <div class="flex items-center flex-row space-x-5">
        <div
          class="bg-[#6C4BB2] rounded-[55px] p-0 flex items-center justify-center w-[80%] h-auto"
        >
          <img
            src="/index/solucao1.png"
            alt="Mulher feliz no notebook"
            class="rounded-[40px] object-cover w-full h-full"
          />
        </div>
        <div class="flex flex-col space-y-4 h-full justify-between">
          <div class="flex flex-col space-y-4">
            <h2 class="text-[#6C4BB2] text-3xl font-bold">
              Inovação que<br />Conecta Mulheres<br />ao Futuro
            </h2>
            <p class="text-[#6C4BB2] text-base font-medium max-w-md">
              Promovemos inclusão digital, autonomia econômica e liderança
              feminina, com foco nos princípios do ESG e nos Objetivos de
              Desenvolvimento Sustentável da ONU.
            </p>
          </div>
          <NuxtLink
            to="#"
            class="bg-[#6C4BB2] text-white rounded-full px-6 py-2 w-fit flex items-center gap-2 hover:bg-[#5a3e94] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Descubra
            <Icon name="mdi:arrow-right" class="text-white" />
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center flex-row space-x-5">
        <div
          class="bg-[#EC3494] rounded-[55px] p-0 flex items-center justify-center w-[80%] h-auto"
        >
          <img
            src="/index/solucao2.png"
            alt="Mulher feliz no notebook"
            class="rounded-[40px] object-cover w-full h-full"
          />
        </div>
        <div class="flex flex-col space-y-4 h-full justify-between">
          <div class="flex flex-col space-y-4">
            <h2 class="text-[#EC3494] text-3xl font-bold">
              Selo Mulheres<br />Conectadas
            </h2>
            <p class="text-[#EC3494] text-base font-medium max-w-md">
              Valorize a reputação da sua marca com uma creditação alinhada ao
              ESG e à Agenda 2030. Mais do que um símbolo, o selo reforça o
              compromisso da sua marca.
            </p>
          </div>
          <NuxtLink
            to="#"
            class="bg-[#EC3494] text-white rounded-full px-6 py-2 w-fit flex items-center gap-2 hover:bg-[#d02d7e] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg justify-self-end"
          >
            Descubra
            <Icon name="mdi:arrow-right" class="text-white" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
