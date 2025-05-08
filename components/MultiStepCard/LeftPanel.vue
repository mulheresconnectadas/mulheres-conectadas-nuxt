<template>
  <div class="md:w-1/2 bg-[#6c4bb2] text-white p-8 flex flex-col rounded-l-md">
    <transition name="fade" mode="out-in">
      <component :is="leftComponent" class="flex-1" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Step1Intro from "./LeftSteps/Step1Intro.vue";
import Step2to4Visual from "./LeftSteps/Step2to4Visual.vue";
import Step5Thanks from "./LeftSteps/Step5Thanks.vue";

const props = defineProps<{ step: number }>();

const leftComponent = computed(() => {
  if (props.step === 1) return Step1Intro;
  if (props.step > 1 && props.step < 5) return Step2to4Visual;
  return Step5Thanks;
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
