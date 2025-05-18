<template>
  <form
    class="space-y-6 w-full max-w-2xl px-4 sm:px-6 mx-auto"
    @submit.prevent="emit('next')"
  >
    <!-- Número de contato -->
    <UFormField class="w-full" :error="error['contato']">
      <BaseInput
        v-model="form.contato"
        label="Número de contato"
        padding-left-class="pl-42"
        type="tel"
        class="w-full"
        @update:model-value="(val) => emit('update:form', 'contato', val)"
      />
    </UFormField>

    <!-- Situação atual no mercado de trabalho -->
    <UFormField class="w-full" :error="error['situacao_trabalho']">
      <SelectInput
        v-model="form.situacao_trabalho"
        label="Situação atual no mercado de trabalho"
        :options="situacaoOptions"
        padding-left-class="pl-74"
        @update:model-value="
          (val) => emit('update:form', 'situacao_trabalho', val)
        "
      />
    </UFormField>

    <!-- Rede social -->
    <UFormField class="w-full" :error="error['rede_social']">
      <BaseInput
        v-model="form.rede_social"
        label="Rede social"
        padding-left-class="pl-26"
        type="text"
        class="w-full"
        @update:model-value="(val) => emit('update:form', 'rede_social', val)"
      />
    </UFormField>

    <!-- Cidade onde mora -->
    <UFormField class="w-full" :error="error['cidade']">
      <SelectMenuInput
        v-model="selectedCity"
        :options="cities"
        label="Cidade onde mora"
        padding-left-class="pl-38"
        @update:model-value="(val: Option) => emit('update:form', 'cidade', val.label)"
      />
    </UFormField>

    <!-- Participação presencial -->
    <UFormField class="w-full" :error="error['deseja_participar_presencial']">
      <RadioInput
        v-model="form.deseja_participar_presencial"
        :options="presencialOptions"
        label="Você deseja participar do Programa Mulheres Conectadas: Empoderamento Digital no Semiárido de forma presencial?"
        @update:model-value="
          (val) => emit('update:form', 'deseja_participar_presencial', val)
        "
      />
    </UFormField>

    <!-- Botões -->
    <div class="flex flex-col md:flex-row justify-between gap-4 mt-6">
      <UButton
        type="button"
        class="w-full md:w-auto block shadow-md bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-full transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
        @click="emit('prev')"
      >
        VOLTAR
      </UButton>

      <UButton
        type="button"
        class="w-full md:w-auto block shadow-md bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-full transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
        @click="next"
      >
        PRÓXIMO PASSO
      </UButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { IFormulario } from "@/types/form";
import { useForm } from "@/composables/useForm";
import { useValidateSteps } from "@/composables/useValidateSteps";
import { useAddress } from "@/composables/useAddress";
import { ref, computed, watch } from "vue";

interface Option {
  value: string;
  label: string;
}

const { form } = useForm();
const { validateStep3, error } = useValidateSteps();
const toast = useToast();
const { cities: originalCities } = useAddress();
const cities = computed(() =>
  originalCities.value.map((city) => ({
    ...city,
    value: String(city.value),
  }))
);
const selectedCity = ref<Option>({
  value: "",
  label: "",
});

// Sincroniza o valor com form.cidade
watch(selectedCity, (val) => {
  if (val) {
    form.value.cidade = val.label;
  }
});

const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

function next() {
  const { valid } = validateStep3(form.value);
  if (valid) {
    emit("next");
  } else {
    toast.add({
      title: "Erro",
      description: "Preencha todos os campos obrigatórios",
      color: "neutral",
    });
  }
}

const situacaoOptions = [
  { label: "Empregado", value: "empregado" },
  { label: "Desempregado", value: "desempregado" },
  { label: "Estudante", value: "estudante" },
  { label: "Autônomo", value: "autonomo" },
  { label: "Em transição de carreira", value: "em transicao de carreira" },
  { label: "Outro", value: "outro" },
];

const presencialOptions = [
  { label: "Sim", value: "sim" },
  { label: "Não", value: "nao" },
  { label: "Talvez", value: "talvez" },
];
</script>
