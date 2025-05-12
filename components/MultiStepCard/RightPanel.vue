<template>
  <div class="md:w-1/2 bg-white p-8 rounded-r-md">
    <transition name="fade" mode="out-in">
      <component
        :is="rightComponent"
        :key="props.step"
        :form="form"
        @next="emit('next')"
        @prev="emit('prev')"
        @update:form="(field: keyof IFormulario, value: string) => emit('update:form', field, value)"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IFormulario } from "@/types/form";
import Step1Welcome from "./RightSteps/Step1Welcome.vue";
import Step2Form from "./RightSteps/Step2Form.vue";
import Step3Form from "./RightSteps/Step3Form.vue";
import Step4Form from "./RightSteps/Step4Form.vue";

const props = defineProps<{ step: number; form: IFormulario }>();
const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

const rightComponent = computed(() => {
  switch (props.step) {
    case 1:
      return Step1Welcome;
    case 2:
      return Step2Form;
    case 3:
      return Step3Form;
    case 4:
      return Step4Form;
    default:
      return Step1Welcome;
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
