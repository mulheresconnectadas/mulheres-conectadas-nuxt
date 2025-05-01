<template>
  <section class="container mx-auto px-20 py-16">
    <div class="grid grid-cols-3 gap-8">
      <!-- Card 1: Mulheres impactadas -->
      <div class="flex items-center gap-6">
        <div class="bg-[#EA6AAC] p-2 rounded-2xl">
          <img
            src="/icons/womans.png"
            alt="Ícone de grupo de mulheres"
            class="w-24 h-24 text-white"
          />
        </div>
        <div>
          <h3 class="text-4xl font-bold text-[#EA6AAC]">+3 mil</h3>
          <p class="text-[#6C4BB2] text-xl font-medium">
            Mulheres<br />impactadas
          </p>
        </div>
      </div>

      <!-- Card 2: Projetos Apoiados -->
      <div class="flex items-center gap-6">
        <div class="bg-[#EA6AAC] p-2 rounded-2xl">
          <img
            src="/icons/hands.png"
            alt="Ícone de aperto de mãos"
            class="w-24 h-24 text-white"
          />
        </div>
        <div>
          <h3 class="text-4xl font-bold text-[#EA6AAC]">+80</h3>
          <p class="text-[#6C4BB2] text-xl font-medium">
            Projetos<br />Apoiados
          </p>
        </div>
      </div>

      <!-- Card 3: Reconhecida pela ONU -->
      <div class="flex items-center gap-6">
        <div class="bg-[#EA6AAC] p-2 rounded-2xl">
          <img
            src="/icons/globo.png"
            alt="Ícone de globo"
            class="w-24 h-24 text-white"
          />
        </div>
        <div class="flex flex-col">
          <a href="#" class="text-[#EA6AAC] text-sm hover:underline">
            Acesse o e-book
          </a>
          <p class="text-[#6C4BB2] text-xl font-medium">
            Reconhecida<br />pela ONU
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
