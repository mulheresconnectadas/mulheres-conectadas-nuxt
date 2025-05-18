<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isAtTop = ref(true);
const hideOnScrollDown = ref(false);
const lastScrollY = ref(0);
const scrollProgress = ref(0);

function handleScroll() {
  const currentY = window.scrollY;
  // 1) Shrink (já existente)
  isAtTop.value = currentY === 0;

  // 2) Hide on scroll down / show on scroll up
  hideOnScrollDown.value = currentY > lastScrollY.value && currentY > 100;
  lastScrollY.value = currentY;

  // 3) Progress bar
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = docHeight > 0 ? (currentY / docHeight) * 100 : 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Progress Bar -->
  <div
    class="fixed top-0 left-0 h-1 bg-pink-500 z-[60] transition-width duration-150"
    :style="{ width: scrollProgress + '%' }"
  ></div>

  <header
    :class="[
      'sticky top-0 z-50 bg-gradient-to-r from-[#6C4BB2] to-[#EE3792] shadow-md transition-all duration-300 transform',
      !isAtTop ? 'py-2' : 'py-6',
      hideOnScrollDown ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <div
      :class="[
        'mx-auto px-4 flex justify-between items-center transition-all duration-300',
        !isAtTop ? 'max-w-5xl' : 'max-w-7xl',
      ]"
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
        <NuxtLink
          to="/login"
          class="text-white hover:text-gray-200 pb-1 nav-link"
          active-class="router-link-active"
        >
          Administração
        </NuxtLink>

        <NuxtLink
          to="/inscricao"
          class="bg-[#4B2E83] text-white px-6 py-2 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg nav-link"
          active-class="bg-[#4B2E83] text-white px-6 py-2 rounded-full"
        >
          Inscreva-se
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Ajuste do logo (caso queira animar escala também) */
.logo {
  transition: transform 0.3s ease;
}
</style>
