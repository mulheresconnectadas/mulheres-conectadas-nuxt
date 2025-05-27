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

// Registrar tudo, inclusive o plugin de datalabels
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels
);

const props = defineProps<{
  labels: string[];
  data: number[];
}>();

const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: "Quantidade",
      data: props.data,
      backgroundColor: "#6C4BB2",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    datalabels: {
      anchor: "end" as const, // posição do texto
      align: "bottom" as const, // alinhamento do texto
      color: "#333",
      font: {
        weight: "bold" as const,
        size: 20,
      },
      formatter: (value: number) => value,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};
</script>
