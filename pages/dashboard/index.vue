<template>
  <div class="flex flex-col md:flex-row gap-6 p-6 w-full">
    <!-- Gráficos -->
    <section class="w-full md:w-3/4 space-y-6">
      <!-- Gráfico 3 -->
      <div class="bg-purple-100 p-4 rounded-xl shadow-md">
        <h3 class="text-lg font-semibold text-purple-900 mb-2">
          Inscritos por Cidade
        </h3>
        <ClientOnly>
          <ChartsChartBar
            v-if="por_cidade.labels.length"
            :labels="por_cidade.labels"
            :data="por_cidade.data"
          />
        </ClientOnly>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="bg-purple-100 p-4 rounded-xl shadow-md">
          <h3 class="text-lg font-semibold text-purple-900 mb-2">
            Inscritos por Escolaridade
          </h3>
          <ClientOnly>
            <ChartsChartDonut
              v-if="por_escolaridade.labels.length"
              :labels="por_escolaridade.labels"
              :data="por_escolaridade.data"
            />
          </ClientOnly>
        </div>

        <div class="bg-purple-100 p-4 rounded-xl shadow-md">
          <h3 class="text-lg font-semibold text-purple-900 mb-4">
            Inscritos por Situação de Trabalho
          </h3>
          <ClientOnly>
            <ChartsChartPolarArea
              v-if="por_situacao_trabalho.labels.length"
              :labels="por_situacao_trabalho.labels"
              :data="por_situacao_trabalho.data"
            />
          </ClientOnly>
        </div>
        <div class="bg-purple-100 p-4 rounded-xl shadow-md">
          <h3 class="text-lg font-semibold text-purple-900 mb-2">
            Inscritos por Escolaridade e Etnia
          </h3>
          <ClientOnly>
            <ChartsChartGroupedBar
              v-if="escolaridade_por_etnia.labels.length"
              :labels="escolaridade_por_etnia.labels"
              :datasets="escolaridade_por_etnia.datasets"
            />
          </ClientOnly>
        </div>
        <div class="bg-purple-100 p-4 rounded-xl shadow-md">
          <h3 class="text-lg font-semibold text-purple-900 mb-2">
            Top Cidades Presenciais
          </h3>
          <ClientOnly>
            <ChartsChartStackedBar
              v-if="top_cidades.labels.length"
              :labels="top_cidades.labels"
              :datasets="top_cidades.datasets"
            />
          </ClientOnly>
        </div>
      </div>
    </section>
    <!-- Sidebar Perfil -->
    <aside
      class="w-full md:w-1/4 bg-purple-900 text-white rounded-2xl shadow-lg p-6 space-y-6 relative"
    >
      <div class="sticky top-10 right-0">
        <div class="flex flex-col items-center text-center">
          <div
            class="w-24 h-24 bg-purple-700 rounded-full flex items-center justify-center text-4xl"
          >
            <Icon name="mdi:account-circle" size="60" />
          </div>
          <h2 class="text-xl font-bold mt-4">{{ user }}</h2>
        </div>
        <nav class="space-y-3">
          <button class="w-full text-left px-4 py-2 bg-purple-700 rounded-lg">
            Gráficos
          </button>
          <UButton
            class="w-full text-left px-4 py-2 bg-purple-700 rounded-lg flex items-center gap-2"
          >
            <Icon name="mdi:export" size="20" />
            <div>Exportar</div>
          </UButton>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useDashboard } from "@/composables/useDashboard";
definePageMeta({ layout: "logged" });

const {
  user,
  por_cidade,
  por_escolaridade,
  por_situacao_trabalho,
  top_cidades,
  escolaridade_por_etnia,
} = useDashboard();
</script>
