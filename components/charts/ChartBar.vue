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
  },
  scales: {
    y: { beginAtZero: true },
  },
};
</script>
