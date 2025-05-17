<template>
  <PolarArea :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
} from "chart.js";

// Registrar os componentes necessários
ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, ArcElement);

// Props para o componente
const props = defineProps<{
  labels: string[];
  data: number[];
}>();

// Dados para o gráfico
const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: "Distribuição",
      data: props.data,
      backgroundColor: [
        "rgba(108, 75, 178, 0.6)",
        "rgba(249, 115, 22, 0.6)",
        "rgba(34, 197, 94, 0.6)",
        "rgba(59, 130, 246, 0.6)",
        "rgba(236, 72, 153, 0.6)",
        "rgba(250, 204, 21, 0.6)",
        "rgba(16, 185, 129, 0.6)",
        "rgba(244, 63, 94, 0.6)",
        "rgba(139, 92, 246, 0.6)",
        "rgba(20, 184, 166, 0.6)",
        "rgba(132, 204, 22, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

// Opções de configuração
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: false,
    },
  },
};
</script>
