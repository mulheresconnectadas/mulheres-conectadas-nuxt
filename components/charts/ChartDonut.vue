<template>
  <Doughnut :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Registrar o plugin de datalabels também
ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const props = defineProps<{
  labels: string[];
  data: number[];
}>();

const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: "Escolaridade",
      data: props.data,
      backgroundColor: [
        "#d946ef",
        "#38bdf8",
        "#a3e635",
        "#fb923c",
        "#6366f1",
        "#f43f5e",
      ],
    },
  ],
};

const options = {
  responsive: true,
  cutout: "50%", // controla o tamanho do "buraco" da rosquinha
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        color: "#333",
        font: {
          size: 14,
        },
      },
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold" as const,
        size: 14,
      },
      formatter: (value: number) => value,
    },
  },
};
</script>
