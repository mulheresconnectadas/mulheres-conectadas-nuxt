<template>
  <div
    class="bg-[url('/index/background-frame.png')] bg-cover bg-top bg-no-repeat py-48 px-40 w-full flex justify-center items-center"
  >
    <!-- Coluna 1: Vídeo -->
    <div class="flex-1">
      <iframe
        class="w-full h-[438px]"
        src="https://www.youtube.com/embed/QoMSOJRE-tw?start=20"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-- Coluna 2: Conteúdo -->
    <div class="flex-1 flex justify-center items-center h-full p-8">
      <div class="flex flex-col items-center gap-8">
        <img
          src="/logo.png"
          alt="Logo Mulheres Conectadas"
          class="w-[200px] h-auto"
        />
        <div class="text-white text-left">
          <p class="text-lg mb-6 leading-relaxed">
            Fomos destaque no vídeo do Programa Startup Nordeste iniciativa do
            SEBRAE. Entre as 9 regiões do Nordeste fomos uma das três Startups
            selecionadas para representar o Ecossistema de Alagoas. Foram, 1620
            projetos pré-acelerados, 900 projetos acelerados, 300
            empreendimentos,512 proprietários.
          </p>
          <p class="text-base leading-normal">
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

<style scoped>
.frame-video-container {
  background-image: url("/index/background-frame.png"); /* Caminho correto para a imagem na pasta public */
  background-size: cover; /* Ajusta a imagem para cobrir toda a área */
  background-position: top center; /* Garante que o fundo será posicionado corretamente */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  padding-top: 12rem;
  padding-bottom: 12rem;
  padding-left: 10rem;
  padding-right: 10rem;
  width: 100%;
  display: flex;
  justify-content: center; /* Espaça as colunas igualmente */
  align-items: center;
}

.video-column {
  flex: 1; /* A coluna do vídeo ocupará metade da largura */
}

.content-column {
  flex: 1; /* A coluna de conteúdo ocupará a outra metade */
  display: flex;
  justify-content: center; /* Alinha o conteúdo no centro */
  align-items: center; /* Alinha o conteúdo no centro */
  height: 100%; /* Garante que a coluna ocupe a altura completa */
  padding: 2rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logo {
  width: 200px;
  height: auto;
}

.text-content {
  color: white;
  text-align: left;
}

.highlight-text {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.description-text {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
