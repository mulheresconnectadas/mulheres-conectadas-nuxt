<template>
  <footer class="bg-[#6C4BB2] text-white py-10">
    <!-- Área principal -->
    <div class="border-t border-white px-6 sm:px-10 md:px-16 lg:px-20 py-8">
      <div class="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:items-center">
        <!-- Logo -->
        <div class="flex justify-center lg:justify-start lg:col-span-3">
          <NuxtLink to="/" class="block" active-class="border-none">
            <img
              src="/logo.png"
              alt="Mulheres Conectadas"
              class="w-48 sm:w-64"
            />
          </NuxtLink>
        </div>

        <!-- Navegação -->
        <div class="flex justify-center lg:justify-center lg:col-span-6">
          <nav class="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <NuxtLink to="/institucional" class="hover:underline"
              >Institucional</NuxtLink
            >
            <NuxtLink to="/onde-nos-encontrar" class="hover:underline"
              >Onde nos encontrar</NuxtLink
            >
            <NuxtLink to="/contato" class="hover:underline">Contato</NuxtLink>
            <NuxtLink to="/termos-de-uso" class="hover:underline"
              >Termos de Uso</NuxtLink
            >
          </nav>
        </div>

        <!-- Redes sociais -->
        <div class="flex justify-center lg:justify-end lg:col-span-3">
          <div class="grid grid-cols-4 gap-4">
            <a
              href="https://instagram.com/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:instagram" size="32" />
            </a>
            <a
              href="https://facebook.com/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:facebook" size="32" />
            </a>
            <a
              href="https://youtube.com/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:youtube" size="32" />
            </a>
            <a
              href="https://linkedin.com/in/mulheresconnectadasoficial"
              target="_blank"
              rel="noopener"
            >
              <Icon name="mdi:linkedin" size="32" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Rodapé inferior -->
    <div class="border-t border-white">
      <div
        class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 text-sm text-center"
      >
        <span>Mulheres Conectadas - Todos os direitos reservados ©</span>
        <NuxtLink to="/politica-de-privacidade" class="hover:underline">
          Política de Privacidade
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
