<template>
  <footer class="bg-[#6C4BB2] text-white py-10">
    <!-- Linha superior + área principal -->
    <div class="border-t border-white px-20 py-5">
      <div class="grid grid-cols-12 items-center">
        <!-- Logo -->
        <div class="col-span-2">
          <NuxtLink to="/" class="block" active-class="border-none">
            <img src="/logo.png" alt="Mulheres Conectadas" class="w-64" />
          </NuxtLink>
        </div>

        <!-- Navegação central -->
        <div class="col-span-8">
          <nav
            class="flex flex-wrap w-full justify-center space-x-6 mb-6 md:mb-0"
          >
            <NuxtLink to="/institucional" class="hover:underline">
              Institucional
            </NuxtLink>
            <NuxtLink to="/onde-nos-encontrar" class="hover:underline">
              Onde nos encontrar
            </NuxtLink>
            <NuxtLink to="/contato" class="hover:underline">Contato</NuxtLink>
            <NuxtLink to="/termos-de-uso" class="hover:underline">
              Termos de Uso
            </NuxtLink>
          </nav>
        </div>

        <!-- Ícones sociais -->
        <div class="col-span-2">
          <div class="grid grid-cols-2 gap-4 justify-self-end">
            <a
              href="https://instagram.com/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:instagram" size="40" />
            </a>
            <a
              href="https://facebook.com/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:facebook" size="40" />
            </a>
            <a
              href="https://youtube.com/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:youtube" size="40" />
            </a>
            <a
              href="https://linkedin.com/in/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:linkedin" size="40" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Linha divisória + rodapé inferior -->
    <div class="border-t border-white">
      <div
        class="mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center space-x-10 text-sm"
      >
        <span>Mulheres conectadas - Todos os direitos reservados ©</span>
        <NuxtLink
          to="/politica-de-privacidade"
          class="hover:underline mt-2 md:mt-0"
        >
          Política de Privacidade
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Nenhuma lógica necessária aqui, mas você pode parametrizar links ou ícones se quiser.
</script>
