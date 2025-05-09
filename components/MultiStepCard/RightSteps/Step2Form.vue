<!-- components/MultiStepCard/RightSteps/Step2Form.vue -->
<template>
  <form class="space-y-10" @submit.prevent="emit('next')">
    <!-- Nome -->
    <UFormField class="w-full" :error="error['nome']">
      <UInput
        v-model="form.nome"
        type="text"
        placeholder=""
        class="w-full"
        required
        :ui="{ base: 'peer' }"
        @update:model-value="(val) => emit('update:form', 'nome', val)"
      >
        <label
          class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
        >
          <span class="inline-flex bg-default px-1">Nome completo</span>
        </label>
      </UInput>
    </UFormField>

    <!-- E-mail -->
    <UFormField class="w-full" :error="error['email']">
      <UInput
        v-model="form.email"
        type="email"
        placeholder=""
        class="w-full"
        required
        :ui="{ base: 'peer' }"
        @update:model-value="(val) => emit('update:form', 'email', val)"
      >
        <label
          class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
        >
          <span class="inline-flex bg-default px-1">E-mail</span>
        </label>
      </UInput>
    </UFormField>

    <!-- Data de nascimento -->
    <UFormField class="w-full" :error="error['data_nascimento']">
      <UInput
        v-model="form.data_nascimento"
        type="date"
        placeholder=""
        class="w-full"
        required
        :ui="{ base: 'peer' }"
        @update:model-value="
          (val) => emit('update:form', 'data_nascimento', val)
        "
      >
        <label
          class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
        >
          <span class="inline-flex bg-default px-1">Data de nascimento</span>
        </label>
      </UInput>
    </UFormField>

    <!-- Gênero -->
    <UFormField label="Gênero" class="w-full" :error="error['genero']">
      <USelect
        v-model="form.genero"
        :items="generoOptions"
        placeholder="Como você se identifica em relação ao gênero?"
        class="w-full"
      />
    </UFormField>

    <!-- Etnia -->
    <UFormField label="Etnia" class="w-full" :error="error['etnia']">
      <USelect
        v-model="form.etnia"
        :items="etniaOptions"
        placeholder="Etnia"
        class="w-full"
      />
    </UFormField>

    <!-- Escolaridade -->
    <UFormField label="Escolaridade" xclass="w-full" :error="error['escolaridade']">
      <USelect
        v-model="form.escolaridade"
        :items="escolaridadeOptions"
        placeholder="Escolaridade"
        class="w-full"
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

const { form } = useForm();
const { validateStep2, error } = useValidateSteps();
const toast = useToast();

const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

function next() {
  const { valid } = validateStep2(form.value);
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

const generoOptions = [
  { label: "Mulher cisgênera", value: "Mulher cisgenero" },
  { label: "Homem cisgênero", value: "Homem cisgenero" },
  { label: "Mulher transexual/transgênera", value: "Mulher transexual/transgenero" },
  { label: "Homem transexual/transgênero", value: "Homem transexual/transgenero" },
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
