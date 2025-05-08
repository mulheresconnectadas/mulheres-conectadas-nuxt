<template>
  <div class="md:w-1/2 bg-[#6c4bb2] text-white p-8 flex flex-col rounded-l-md">
    <component :is="leftComponent" class="flex-1" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Step1Intro from "./LeftSteps/Step1Intro.vue";
import Step2to4Visual from "./LeftSteps/Step2to4Visual.vue";
import Step5Thanks from "./LeftSteps/Step5Thanks.vue";
import { useMultiStep } from "@/composables/useMultiStep";

const { step } = useMultiStep();

const leftComponent = computed(() => {
  if (step.value === 1) return Step1Intro;
  if (step.value > 1 && step.value < 5) return Step2to4Visual;
  return Step5Thanks;
});
</script>
