<template>
  <div class="space-y-6 text-[#2C144C] flex flex-col items-center px-4 sm:px-6">
    <div
      class="bg-white rounded-md p-4 sm:p-6 flex flex-col gap-4 w-full max-w-2xl"
    >
      <div class="flex items-start gap-2">
        <p class="text-gray-800 text-base sm:text-lg leading-relaxed">
          Quem pode participar? Mulheres que querem aprender novas habilidades,
          empreender ou buscar novas oportunidades no mundo digital.
        </p>
      </div>

      <div class="flex items-start gap-2">
        <Icon
          name="fluent:checkmark-circle-32-regular"
          class="text-3xl sm:text-4xl"
        />
        <p class="text-base sm:text-lg font-semibold">A formação é GRATUITA!</p>
      </div>

      <div>
        <p class="text-gray-800 text-base sm:text-lg mb-2 leading-relaxed">
          Além disso, o projeto está alinhado com os Objetivos de
          Desenvolvimento Sustentável (ODS) da ONU:
        </p>
        <ul
          class="list-disc list-inside text-base sm:text-lg text-gray-700 ml-4"
        >
          <li>ODS 5 - Igualdade de Gênero</li>
          <li>ODS 8 - Trabalho Decente e Crescimento Econômico</li>
          <li>ODS 10 - Redução das Desigualdades</li>
          <li>ODS 11 - Cidades e Comunidades Sustentáveis</li>
        </ul>
      </div>

      <div
        class="bg-purple-100 text-purple-900 rounded-md px-3 py-2 text-center text-sm sm:text-base font-medium"
      >
        Vamos juntas transformar o futuro com tecnologia e inovação!
      </div>
    </div>

    <UButton
      class="w-full sm:w-auto max-w-xs sm:max-w-none block shadow-md bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-full transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
      @click="emit('next')"
    >
      QUERO ME INSCREVER
    </UButton>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  next: [];
}>();
</script>
