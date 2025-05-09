<template>
  <div
    class="max-w-sm bg-white rounded-[40px] border border-[#6C4BB2] overflow-hidden flex flex-col shadow-lg"
  >
    <!-- Imagem no topo (vai ser “clipada” pelos cantos arredondados) -->
    <img :src="imageSrc" alt="Card image" class="w-full object-cover p-10" />

    <!-- Conteúdo: descrição à esquerda, botão à direita -->
    <div
      class="p-5 grid grid-cols-5 items-center border-t border-[#6C4BB2] h-full"
    >
      <!-- Descrição -->
      <p class="col-span-3 text-[#6C4BB2] font-medium">
        {{ description }}
      </p>

      <!-- Botão rosa -->
      <div
        class="col-span-2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full shadow-lg"
      >
        <a :href="linkUrl" class="flex items-center space-x-1">
          <span>Saiba mais</span>
          <Icon name="mdi:arrow-right" class="text-white" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string;
  description: string;
  linkUrl: string;
}>();
</script>
