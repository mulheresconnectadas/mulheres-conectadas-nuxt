<template>
  <div class="flex flex-col min-h-screen">
    <AuthHeaderLogged />

    <main class="flex-1 flex items-center justify-center bg-white px-4">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// não precisa mudar nada aqui
</script>
