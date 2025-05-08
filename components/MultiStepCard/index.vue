<template>
  <div class="max-w-7xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
    <div v-if="step < 5" class="md:flex">
      <LeftPanel :step="step" />
      <RightPanel :step="step" :form="form" @next="next" @prev="prev" />
    </div>
    <div v-else>
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
