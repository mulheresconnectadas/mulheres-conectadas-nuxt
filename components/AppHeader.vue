<template>
  <header class="bg-gradient-to-r from-[#6C4BB2] to-[#EE3792] shadow-md">
    <div class="mx-auto px-20 py-6 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="flex items-center space-x-4"
        active-class="border-none"
      >
        <img src="/logo.png" alt="Mulheres Conectadas" class="w-52" />
      </NuxtLink>
      <nav class="flex items-center space-x-8">
        <NuxtLink
          to="/"
          class="text-white hover:text-gray-200 pb-1"
          active-class="router-link-active"
          exact
        >
          Início
        </NuxtLink>
        <!-- <NuxtLink
          to="/institucional"
          class="text-white hover:text-gray-200 pb-1"
          active-class="router-link-active"
        >
          Institucional
        </NuxtLink>
        <NuxtLink
          to="/solucoes"
          class="text-white hover:text-gray-200 pb-1"
          active-class="router-link-active"
        >
          Soluções
        </NuxtLink>
        <NuxtLink
          to="/noticias"
          class="text-white hover:text-gray-200 pb-1"
          active-class="router-link-active"
        >
          Notícias
        </NuxtLink>
        <NuxtLink
          to="/mapa"
          class="text-white hover:text-gray-200 pb-1"
          active-class="router-link-active"
        >
          Mapa
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="text-white hover:text-gray-200 pb-1"
          active-class="router-link-active"
        >
          Blog
        </NuxtLink> -->
        <NuxtLink
          to="/inscricao"
          class="bg-[#4B2E83] text-white px-6 py-2 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          Inscreva-se
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup></script>
