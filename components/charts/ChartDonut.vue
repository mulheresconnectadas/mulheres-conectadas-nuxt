<template>
  <Doughnut :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

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
  plugins: {
    legend: { position: "right" as const },
    title: { display: false },
  },
};
</script>
