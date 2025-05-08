<template>
  <div class="max-w-7xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
    <div class="md:flex">
      <LeftPanel :step="step" />
      <RightPanel :step="step" :form="form" @next="next" @prev="prev" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";
import { useMultiStep } from "@/composables/useMultiStep";

const { step, form, next, prev } = useMultiStep();
</script>
