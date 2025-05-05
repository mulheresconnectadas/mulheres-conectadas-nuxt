<template>
  <div class="flex-col flex py-10 w-full">
    <TitleComponent title="Notícias" class="mb-24" />
    <div class="grid grid-cols-3 gap-8 px-20">
      <InfoCard
        image-src="/index/news1.png"
        description="“Não é um universo fácil de trabalhar, mas é encantador”, diz cofundadora de startup de tecnologia para mulheres."
        link-url="https://www.google.com"
        link-text="Saiba mais"
      />
      <InfoCard
        image-src="/index/news1.png"
        description="Neste segundo volume do Livro, buscamos apresentar uma discussão ampliada a respeito da Gestão da Qualidade e contemplamos de maneira mais eficaz a exogenia que nos é exigida em publicações acadêmicas."
        link-url="https://www.google.com"
        link-text="Saiba mais"
      />
      <InfoCard
        image-src="/index/news1.png"
        description="Startup Mulheres Connectadas lança Conselho Consultivo de Mulheres na Tecnologia."
        link-url="https://www.google.com"
        link-text="Saiba mais"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
