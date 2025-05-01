<template>
  <div class="flex flex-col h-screen relative">
    <AppHeader class="sticky top-0 z-50" />
    <slot />
    <AppFooter class="mt-auto" />
  </div>
</template>

<script setup></script>
