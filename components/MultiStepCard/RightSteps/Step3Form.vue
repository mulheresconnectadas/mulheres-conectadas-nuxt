<!-- components/MultiStepCard/RightSteps/Step3Form.vue -->
<template>
  <form class="space-y-4" @submit.prevent="emit('next')">
    <!-- Número de contato -->
    <UInput
      v-model="form.contato"
      type="tel"
      placeholder="Número de contato:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'contato', val)"
    />

    <!-- Situação atual no mercado de trabalho -->
    <USelect
      v-model="form.situacao_trabalho"
      :items="situacaoOptions"
      placeholder="Qual é sua situação atual no mercado de trabalho?"
      class="w-full"
      required
      @update:model-value="
        (val) => emit('update:form', 'situacao_trabalho', String(val ?? ''))
      "
    />

    <!-- Rede social -->
    <UInput
      v-model="form.rede_social"
      type="text"
      placeholder="Insira a sua rede social (Instagram/Linkedin/Tiktok):"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'rede_social', val)"
    />

    <!-- Cidade onde mora -->
    <USelect
      v-model="form.cidade"
      :items="cidadeOptions"
      placeholder="Cidade onde mora"
      class="w-full"
      required
      @update:model-value="
        (val) => emit('update:form', 'cidade', String(val ?? ''))
      "
    />

    <!-- Participação presencial -->
    <div class="space-y-2">
      <p class="text-[#2C144C] font-medium">
        Você deseja participar de forma presencial?
      </p>

      <URadioGroup
        v-model="form.deseja_participar_presencial"
        :items="presencialOptions"
        @update:model-value="
          (val) => emit('update:form', 'deseja_participar_presencial', val)
        "
      />
    </div>

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
import type { RadioGroupItem } from "@nuxt/ui";
import type { IFormulario } from "@/types/form";
import { useForm } from "@/composables/useForm";
const { form } = useForm();

const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

const situacaoOptions = [
  { label: "Empregado", value: "empregado" },
  { label: "Desempregado", value: "desempregado" },
  { label: "Estudante", value: "estudante" },
  { label: "Autônomo", value: "autônomo" },
  { label: "Em transição de carreira", value: "em_transicao_de_carreira" },
  { label: "Outro", value: "outro" },
];

const cidadeOptions = [
  { label: "Maceió", value: "maceio" },
  { label: "Arapiraca", value: "arapiraca" },
  { label: "Outra...", value: "outra" },
];

const presencialOptions = ref<RadioGroupItem[]>([
  { label: "Sim", value: "sim" },
  { label: "Não", value: "nao" },
  { label: "Talvez", value: "talvez" },
]);
</script>
