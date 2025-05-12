<!-- components/MultiStepCard/RightSteps/Step2Form.vue -->
<template>
  <form
    class="flex flex-col gap-4 h-full items-center"
    @submit.prevent="emit('next')"
  >
    <!-- Nome -->
    <UFormField class="w-full" :error="error['nome']">
      <BaseInput
        v-model="form.nome"
        label="Nome"
        padding-left-class="pl-18"
        @update:model-value="(val) => emit('update:form', 'nome', val)"
      />
    </UFormField>

    <!-- E-mail -->
    <UFormField class="w-full" :error="error['email']">
      <BaseInput
        v-model="form.email"
        label="E-mail"
        padding-left-class="pl-18"
        @update:model-value="(val) => emit('update:form', 'email', val)"
      />
    </UFormField>

    <!-- Data de nascimento -->
    <UFormField class="w-full" :error="error['data_nascimento']">
      <DateInput
        v-model="form.data_nascimento"
        label="Data de nascimento"
        padding-left-class="pl-20"
        @update:model-value="
          (val) => emit('update:form', 'data_nascimento', val)
        "
      />
    </UFormField>

    <!-- Gênero -->
    <UFormField class="w-full" :error="error['genero']">
      <SelectInput
        v-model="form.genero"
        label="Gênero"
        :options="generoOptions"
        padding-left-class="pl-20"
        @update:model-value="(val) => emit('update:form', 'genero', val)"
      />
    </UFormField>

    <!-- Etnia -->
    <UFormField class="w-full" :error="error['etnia']">
      <SelectInput
        v-model="form.etnia"
        label="Etnia"
        :options="etniaOptions"
        padding-left-class="pl-16"
        @update:model-value="(val) => emit('update:form', 'etnia', val)"
      />
    </UFormField>

    <!-- Escolaridade -->
    <UFormField class="w-full" :error="error['escolaridade']">
      <SelectInput
        v-model="form.escolaridade"
        label="Escolaridade"
        :options="escolaridadeOptions"
        padding-left-class="pl-30"
        @update:model-value="(val) => emit('update:form', 'escolaridade', val)"
      />
    </UFormField>

    <!-- Botões -->
    <div class="flex justify-evenly mt-6 w-full">
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
        PRÓXIMO PASSO
      </UButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { IFormulario } from "@/types/form";
import { useForm } from "@/composables/useForm";
import { useValidateSteps } from "@/composables/useValidateSteps";

const { form } = useForm();
const { validateStep2, error } = useValidateSteps();
const toast = useToast();
const loading = ref(false);
const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

async function next() {
  loading.value = true;
  const { valid } = await validateStep2(form.value);
  if (valid) {
    emit("next");
  } else {
    toast.add({
      title: "Erro",
      description: "Preencha todos os campos obrigatórios",
      color: "neutral",
    });
  }
  loading.value = false;
}

const generoOptions = [
  { label: "Mulher cisgênera", value: "Mulher cisgenera" },
  { label: "Homem cisgênero", value: "Homem cisgenero" },
  {
    label: "Mulher transexual/transgênera",
    value: "Mulher transexual/transgenera",
  },
  {
    label: "Homem transexual/transgênero",
    value: "Homem transexual/transgenero",
  },
  { label: "Travesti", value: "Travesti" },
  { label: "Não binário", value: "Nao binario" },
  { label: "Prefiro não responder", value: "Prefiro nao responder" },
  { label: "Outro", value: "Outro" },
];

const etniaOptions = [
  { label: "Branca", value: "branca" },
  { label: "Preta", value: "preta" },
  { label: "Parda", value: "parda" },
  { label: "Amarela", value: "amarela" },
  { label: "Indígena", value: "indigena" },
  { label: "Outro", value: "outro" },
];

const escolaridadeOptions = [
  { label: "Ensino Fundamental Incompleto", value: "fundamental incompleto" },
  { label: "Ensino Fundamental Completo", value: "fundamental completo" },
  { label: "Ensino Médio Incompleto", value: "medio incompleto" },
  { label: "Ensino Médio Completo", value: "medio completo" },
  { label: "Ensino Superior Incompleto", value: "superior incompleto" },
  { label: "Ensino Superior Completo", value: "superior completo" },
  { label: "Outro", value: "outro" },
];
</script>
