<script setup></script>

<template>
  <header
    class="bg-gradient-to-r from-[#6C4BB2] to-[#EE3792] shadow-md transform py-2"
  >
    <div
      class="mx-auto px-4 flex justify-between items-center transition-all duration-300 max-w-7xl"
    >
      <NuxtLink
        to="/"
        class="flex items-center space-x-4"
        active-class="border-none"
      >
        <img src="/logo.png" alt="Mulheres Conectadas" class="w-52 logo" />
      </NuxtLink>
      <nav class="flex items-center space-x-8">
        <NuxtLink
          to="/"
          class="text-white hover:text-gray-200 pb-1 nav-link"
          active-class="router-link-active"
          exact
        >
          Início
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
