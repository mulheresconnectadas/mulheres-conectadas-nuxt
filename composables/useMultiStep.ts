import { ref, reactive } from "vue";

export function useMultiStep() {
  const step = ref(1);
  const form = reactive({
    name: "",
    email: "",
    birth: "",
    presencial: "",
    phone: "",
    social: "",
    lgpd: "",
    lgpdTexto: "",
  });

  function next() {
    if (step.value < 5) step.value++;
  }
  function prev() {
    if (step.value > 1) step.value--;
  }

  return { step, form, next, prev };
}
