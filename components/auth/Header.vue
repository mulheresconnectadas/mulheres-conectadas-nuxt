<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>

<template>
  <header class="bg-gradient-to-r from-[#6C4BB2] to-[#EE3792] shadow-md py-2">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center space-x-4"
        active-class="border-none"
      >
        <img
          src="/logo.png"
          alt="Mulheres Conectadas"
          class="w-40 sm:w-52 logo"
        />
      </NuxtLink>

      <!-- Navegação desktop -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink
          to="/"
          class="text-white hover:text-gray-200 pb-1 nav-link"
          active-class="router-link-active"
          exact
        >
          Início
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="text-white hover:text-gray-200 pb-1 nav-link"
          active-class="router-link-active"
        >
          Administração
        </NuxtLink>
        <NuxtLink
          to="/inscricao"
          class="bg-[#4B2E83] text-white px-6 py-2 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          Inscreva-se
        </NuxtLink>
      </nav>

      <!-- Botão mobile -->
      <button
        class="md:hidden text-white"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Icon :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" size="32" />
      </button>
    </div>

    <!-- Navegação mobile -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden flex flex-col items-center gap-4 px-6 pb-6 pt-4"
      >
        <NuxtLink
          to="/"
          class="text-white text-lg font-medium"
          @click="isMobileMenuOpen = false"
        >
          Início
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="text-white text-lg font-medium"
          @click="isMobileMenuOpen = false"
        >
          Administração
        </NuxtLink>
        <NuxtLink
          to="/inscricao"
          class="bg-[#4B2E83] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
          @click="isMobileMenuOpen = false"
        >
          Inscreva-se
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.logo {
  transition: transform 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
