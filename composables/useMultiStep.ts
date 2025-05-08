import { ref } from "vue";

export function useMultiStep() {
  const step = ref(1);

  function next() {
    if (step.value < 5) step.value++;
    if (step.value === 5) {
      step.value++;
    }
  }
  function prev() {
    if (step.value > 1) step.value--;
  }

  return { step, next, prev };
}
