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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// Props para receber dados
const props = defineProps<{
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
  }[];
}>();

// Define cores padrão se não vierem
const defaultColors = [
  "#6C4BB2", // sim
  "#F43F5E", // nao
  "#FBBF24", // talvez
];

// Gera os datasets com cor, se não tiverem
const preparedDatasets = props.datasets.map((dataset, index) => ({
  ...dataset,
  backgroundColor:
    dataset.backgroundColor || defaultColors[index % defaultColors.length],
}));

// Dados do gráfico
const chartData = {
  labels: props.labels,
  datasets: preparedDatasets,
};

// Opções do gráfico
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
};
</script>
