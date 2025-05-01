<template>
  <header class="bg-gradient-to-r from-[#6C4BB2] to-[#EE3792] shadow-md">
    <div class="mx-auto px-4 py-6 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <img src="/logo.png" alt="Mulheres Conectadas" class="w-60" />
      </div>
      <nav class="flex items-center space-x-8">
        <NuxtLink to="/" class="text-white hover:text-gray-200"
          >Início</NuxtLink
        >
        <NuxtLink to="/institucional" class="text-white hover:text-gray-200"
          >Institucional</NuxtLink
        >
        <NuxtLink to="/solucoes" class="text-white hover:text-gray-200"
          >Soluções</NuxtLink
        >
        <NuxtLink to="/noticias" class="text-white hover:text-gray-200"
          >Notícias</NuxtLink
        >
        <NuxtLink to="/mapa" class="text-white hover:text-gray-200"
          >Mapa</NuxtLink
        >
        <NuxtLink to="/blog" class="text-white hover:text-gray-200"
          >Blog</NuxtLink
        >
        <NuxtLink
          to="/inscreva-se"
          class="bg-[#4B2E83] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
          >Inscreva-se</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup></script>
