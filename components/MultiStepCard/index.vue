<template>
  <div class="max-w-7xl w-full mx-auto overflow-hidden">
    <div v-if="step < 5" class="md:flex rounded-md shadow-lg">
      <LeftPanel :step="step" />
      <RightPanel :step="step" :form="form" @next="next" @prev="prev" />
    </div>
    <div v-else class="w-full max-w-4xl mx-auto">
      <Step5Thanks />
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";
import Step5Thanks from "./LeftSteps/Step5Thanks.vue";
import { useMultiStep } from "@/composables/useMultiStep";
import { useForm } from "@/composables/useForm";
const { step, next, prev } = useMultiStep();

const { form } = useForm();
</script>
