<template>
  <Radar :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

const props = defineProps<{
  labels: string[];
  data: number[];
}>();

const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: "Inscritos",
      data: props.data,
      backgroundColor: "rgba(108, 75, 178, 0.4)",
      borderColor: "#6C4BB2",
      borderWidth: 2,
      pointBackgroundColor: "#6C4BB2",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: false },
  },
};
</script>
