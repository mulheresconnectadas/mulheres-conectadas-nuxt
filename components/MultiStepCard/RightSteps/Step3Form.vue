<!-- components/MultiStepCard/RightSteps/Step3Form.vue -->
<template>
  <form class="space-y-4" @submit.prevent="emit('next')">
    <!-- Número de contato -->
    <UInput
      v-model="props.form.phone"
      type="tel"
      placeholder="Número de contato:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'phone', val)"
    />

    <!-- Situação atual no mercado de trabalho -->
    <USelect
      v-model="props.form.situacao"
      :items="situacaoOptions"
      placeholder="Qual é sua situação atual no mercado de trabalho?"
      class="w-full"
      required
      @update:model-value="
        (val) => emit('update:form', 'situacao', String(val ?? ''))
      "
    />

    <!-- Rede social -->
    <UInput
      v-model="props.form.social"
      type="text"
      placeholder="Insira a sua rede social (Instagram/Linkedin/Tiktok):"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'social', val)"
    />

    <!-- Cidade onde mora -->
    <USelect
      v-model="props.form.cidade"
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
        v-model="props.form.presencial"
        :items="presencialOptions"
        @update:model-value="(val) => emit('update:form', 'presencial', val)"
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
import { ref } from "vue";
interface FormData {
  name: string;
  email: string;
  birth: string;
  situacao: string;
  phone: string;
  social: string;
  cidade: string;
  presencial: string;
  lgpd: string;
  lgpdTexto: string;
}

const props = defineProps<{ form: FormData }>();
const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof FormData, value: string): void;
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
