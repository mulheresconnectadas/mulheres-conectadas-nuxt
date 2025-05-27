<template>
  <Bar :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Registrar o plugin de datalabels
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels
);

// Props esperadas: mesmo formato que o stacked
const props = defineProps<{
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
  }[];
}>();

// Cores padrão (ciclo automático)
const defaultColors = [
  "#6C4BB2", // roxo
  "#F43F5E", // rosa
  "#FBBF24", // amarelo
  "#38BDF8", // azul claro
  "#34D399", // verde
];

// Garante cor para cada dataset
const preparedDatasets = props.datasets.map((dataset, index) => ({
  ...dataset,
  backgroundColor:
    dataset.backgroundColor || defaultColors[index % defaultColors.length],
}));

// Dados e configurações
const chartData = {
  labels: props.labels,
  datasets: preparedDatasets,
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: false },
    datalabels: {
      anchor: "end" as const,
      align: "top" as const,
      color: "#333",
      font: {
        weight: "bold" as const,
        size: 14,
      },
      formatter: (value: number) => value,
    },
  },
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
      beginAtZero: true,
    },
  },
};
</script>
