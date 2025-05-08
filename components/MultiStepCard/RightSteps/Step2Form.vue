<!-- components/MultiStepCard/RightSteps/Step2Form.vue -->
<template>
  <form class="space-y-10" @submit.prevent="emit('next')">
    <!-- Nome -->
    <UInput
      type="text"
      :model-value="props.form.name"
      placeholder="Nome:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'name', val)"
    />

    <!-- E-mail -->
    <UInput
      type="email"
      :model-value="props.form.email"
      placeholder="E-mail:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'email', val)"
    />

    <!-- Data de nascimento -->
    <UInput
      type="date"
      :model-value="props.form.birth"
      placeholder="Data de nascimento:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'birth', val)"
    />

    <!-- Gênero -->
    <USelect
      :items="generoOptions"
      :model-value="props.form.genero"
      placeholder="Como você se identifica em relação ao gênero?"
      class="w-full"
    />

    <!-- Etnia -->
    <USelect
      :items="etniaOptions"
      :model-value="props.form.etnia"
      placeholder="Etnia"
      class="w-full"
    />

    <!-- Escolaridade -->
    <USelect
      :items="escolaridadeOptions"
      :model-value="props.form.escolaridade"
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
interface FormData {
  name: string;
  email: string;
  birth: string;
  genero: string;
  etnia: string;
  escolaridade: string;
}

const props = defineProps<{ form: FormData }>();

const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof FormData, value: string): void;
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
