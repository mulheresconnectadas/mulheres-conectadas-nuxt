<template>
  <form class="space-y-4" @submit.prevent="emit('next')">
    <!-- Campos Etapa 4 -->
    <UFormField class="w-full" :error="error['como_soube_programa']">
      <RadioInput
        v-model="form.como_soube_programa"
        :options="sabendoOptions"
        label="Como você ficou sabendo do Programa Mulheres Conectadas: Empoderamento Digital no Semiárido?"
        @update:model-value="
          (val) => emit('update:form', 'como_soube_programa', val)
        "
      />
    </UFormField>
    <!-- LGPD -->
    <UFormField class="w-full" :error="error['autorizacao_lgpd']">
      <RadioInput
        v-model="form.autorizacao_lgpd"
        :options="lgpdOptions"
        label="Você concorda com a utilização de seus dados (LGPD)? Conforme a Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018)."
        @update:model-value="
          (val) => emit('update:form', 'autorizacao_lgpd', val)
        "
      />
    </UFormField>

    <!-- Botões -->
    <div class="flex justify-evenly mt-6">
      <UButton
        type="button"
        class="w-full md:w-auto block shadow-md bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-full transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
        @click="emit('prev')"
      >
        VOLTAR
      </UButton>
      <UButton
        type="button"
        color="tertiary"
        class="w-full md:w-auto block shadow-md bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-full transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
        :loading="loading"
        @click="next"
      >
        Finalizar Inscrição
      </UButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { IFormulario } from "@/types/form";
import { useForm } from "@/composables/useForm";
import { useValidateSteps } from "@/composables/useValidateSteps";
const toast = useToast();

const { submit, form } = useForm();
const { validateStep4, error } = useValidateSteps();
const loading = ref(false);
const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

interface Option {
  label: string;
  value: string;
}

function next() {
  const { valid } = validateStep4(form.value);

  if (valid) {
    loading.value = true;
    submit().then(() => {
      loading.value = false;
      emit("next");
    });
  } else {
    toast.add({
      title: "Erro",
      description: "Preencha todos os campos obrigatórios",
      color: "neutral",
    });
  }
}
const lgpdOptions = ref<Option[]>([
  { label: "Sim", value: "sim" },
  { label: "Não", value: "nao" },
]);

const sabendoOptions = ref<Option[]>([
  { label: "Instagram", value: "instagram" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "WhatsApp", value: "whatsapp" },
  { label: "TV", value: "tv" },
  { label: "Outros", value: "outros" },
]);
</script>
