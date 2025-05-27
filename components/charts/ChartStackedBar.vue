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

// Registrar os elementos e o plugin
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels
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

// Cores padrão
const defaultColors = [
  "#6C4BB2", // sim
  "#F43F5E", // nao
  "#FBBF24", // talvez
];

// Aplicar cores se não vierem
const preparedDatasets = props.datasets.map((dataset, index) => ({
  ...dataset,
  backgroundColor:
    dataset.backgroundColor || defaultColors[index % defaultColors.length],
}));

// Dados para o gráfico
const chartData = {
  labels: props.labels,
  datasets: preparedDatasets,
};

// Opções com datalabels para stacked bars
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
    datalabels: {
      color: "#000",
      font: {
        weight: "bold" as const,
        size: 15,
      },
      anchor: "end" as const, // ou "end" para topo da pilha
      align: "bottom" as const, // ou "top" para topo da pilha
      formatter: (value: number) => value >= 3 ? value : "",
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
