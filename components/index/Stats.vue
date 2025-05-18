<template>
  <section class="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-16">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card base -->
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="flex flex-col items-center text-center space-y-4"
      >
        <div class="bg-[#EA6AAC] p-4 rounded-2xl">
          <img
            :src="card.icon"
            :alt="card.alt"
            class="w-20 sm:w-24 h-20 sm:h-24"
          />
        </div>
        <div>
          <h3 v-if="card.isLink" class="text-3xl sm:text-4xl font-bold">
            <a
              :href="card.link"
              class="text-sm hover:underline text-[#EA6AAC]"
              >{{ card.title }}</a
            >
          </h3>
          <h3 v-else class="text-3xl sm:text-4xl font-bold text-[#EA6AAC]">
            {{ card.title }}
          </h3>
          <p
            class="text-[#6C4BB2] text-lg sm:text-xl font-medium whitespace-pre-line"
          >
            {{ card.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    icon: "/icons/womans.png",
    alt: "Ícone de grupo de mulheres",
    title: "+3 mil",
    subtitle: "Mulheres\nimpactadas",
    isLink: false,
  },
  {
    icon: "/icons/hands.png",
    alt: "Ícone de aperto de mãos",
    title: "+80",
    subtitle: "Projetos\nApoiados",
    isLink: false,
  },
  {
    icon: "/icons/globo.png",
    alt: "Ícone de globo",
    title: "Acesse o e-book",
    subtitle: "Reconhecida\npela ONU",
    isLink: true,
    link: "#",
  },
];
</script>
