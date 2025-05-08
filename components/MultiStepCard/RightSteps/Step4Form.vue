<template>
  <form class="space-y-4" @submit.prevent="emit('next')">
    <!-- Campos Etapa 4 -->
    <div class="space-y-2">
      <p class="text-[#2C144C] font-medium">
        Como você ficou sabendo do Programa Mulheres Conectadas: Empoderamento
        Digital no Semiárido?
      </p>

      <URadioGroup
        v-model="props.form.sabendo"
        :items="sabendoOptions"
        @update:model-value="(val) => emit('update:form', 'sabendo', val)"
      />
    </div>
    <!-- LGPD -->
    <fieldset class="space-y-1">
      <legend class="font-medium">
        Você concorda com a utilização de seus dados (LGPD)?
      </legend>
      <URadioGroup
        v-model="props.form.lgpd"
        :items="lgpdOptions"
        @update:model-value="(val) => emit('update:form', 'lgpd', val)"
      />
    </fieldset>

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
        Finalizar Inscrição
      </UButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { RadioGroupItem } from "@nuxt/ui";
interface FormData {
  name: string;
  email: string;
  birth: string;
  presencial: string;
  phone: string;
  social: string;
  lgpd: string;
  lgpdTexto: string;
}

const props = defineProps<{ form: FormData }>();
const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof FormData, value: string): void;
}>();

const lgpdOptions = ref<RadioGroupItem[]>([
  { label: "Sim", value: "sim" },
  { label: "Não", value: "nao" },
]);

const sabendoOptions = ref<RadioGroupItem[]>([
  { label: "Instagram", value: "instagram" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "WhatsApp", value: "whatsapp" },
  { label: "TV", value: "tv" },
]);
</script>
