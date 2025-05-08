<!-- components/MultiStepCard/RightSteps/Step2Form.vue -->
<template>
  <form class="space-y-10" @submit.prevent="emit('next')">
    <!-- Nome -->
    <UInput
      v-model="form.nome"
      type="text"
      placeholder="Nome:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'nome', val)"
    />

    <!-- E-mail -->
    <UInput
      v-model="form.email"
      type="email"
      placeholder="E-mail:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'email', val)"
    />

    <!-- Data de nascimento -->
    <UInput
      v-model="form.data_nascimento"
      type="date"
      placeholder="Data de nascimento:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'data_nascimento', val)"
    />

    <!-- Gênero -->
    <USelect
      v-model="form.genero"
      :items="generoOptions"
      placeholder="Como você se identifica em relação ao gênero?"
      class="w-full"
    />

    <!-- Etnia -->
    <USelect
      v-model="form.etnia"
      :items="etniaOptions"
      placeholder="Etnia"
      class="w-full"
    />

    <!-- Escolaridade -->
    <USelect
      v-model="form.escolaridade"
      :items="escolaridadeOptions"
      placeholder="Escolaridade"
      class="w-full"
    />

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
        class="w-full md:w-auto block shadow-md bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-full transition hover:shadow-lg hover:scale-105 duration-300 cursor-pointer"
        @click="emit('next')"
      >
        PRÓXIMO PASSO
      </UButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { IFormulario } from "@/types/form";
import { useForm } from "@/composables/useForm";
const { form } = useForm();

const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

const generoOptions = [
  { label: "Mulher cisgênera", value: "mulher_cisgenero" },
  { label: "Homem cisgênero", value: "homem_cisgenero" },
  { label: "Mulher transexual/transgênera", value: "mulher_transexual" },
  { label: "Homem transexual/transgênero", value: "homem_transexual" },
  { label: "Travesti", value: "travesti" },
  { label: "Não binário", value: "nao_binario" },
  { label: "Prefiro não responder", value: "prefiro_nao_responder" },
  { label: "Outro", value: "outro" },
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
  { label: "Ensino Fundamental Incompleto", value: "fundamental_incompleto" },
  { label: "Ensino Fundamental Completo", value: "fundamental_completo" },
  { label: "Ensino Médio Incompleto", value: "medio_incompleto" },
  { label: "Ensino Médio Completo", value: "medio_completo" },
  { label: "Ensino Superior Incompleto", value: "superior_incompleto" },
  { label: "Ensino Superior Completo", value: "superior_completo" },
  { label: "Outro", value: "outro" },
];
</script>
