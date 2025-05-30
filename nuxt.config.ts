export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  // módulos instalados
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
  ],

  // seu CSS global
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: ["primary", "secondary", "tertiary", "error"],
    },
    colorMode: false,
  },
});
