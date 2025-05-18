<template>
  <div
    class="w-full bg-[url('/index/background-frame.png')] bg-cover bg-top bg-no-repeat py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 flex flex-col lg:flex-row items-center justify-center gap-12"
  >
    <!-- Coluna 1: Vídeo -->
    <div class="w-full lg:w-1/2">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/QoMSOJRE-tw?start=20"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Coluna 2: Conteúdo -->
    <div class="w-full lg:w-1/2 flex justify-center items-center">
      <div
        class="flex flex-col items-center gap-8 text-white text-left max-w-xl"
      >
        <img
          src="/logo.png"
          alt="Logo Mulheres Conectadas"
          class="w-40 sm:w-52 h-auto"
        />
        <div>
          <p class="text-base sm:text-lg mb-6 leading-relaxed">
            Fomos destaque no vídeo do Programa Startup Nordeste iniciativa do
            SEBRAE. Entre as 9 regiões do Nordeste fomos uma das três Startups
            selecionadas para representar o Ecossistema de Alagoas. Foram, 1620
            projetos pré-acelerados, 900 projetos acelerados, 300
            empreendimentos, 512 proprietários.
          </p>
          <p class="text-sm sm:text-base leading-normal">
            O Startup Nordeste tem como objetivo de fomentar o Ecossistema de
            Inovação e incrementar a matriz produtiva com "produtos e serviços
            de alto valor agregado", o programa posiciona o Nordeste como rede
            territorial fértil de negócios inovadores globais.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Lógica do componente, se necessário
</script>
