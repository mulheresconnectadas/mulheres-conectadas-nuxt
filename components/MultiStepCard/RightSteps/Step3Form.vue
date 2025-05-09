<!-- components/MultiStepCard/RightSteps/Step3Form.vue -->
<template>
  <form class="space-y-10" @submit.prevent="emit('next')">
    <!-- Número de contato -->
    <UFormField class="w-full" :error="error['contato']">
      <UInput
        v-model="form.contato"
        type="text"
        maxlength="11"
        placeholder=""
        class="w-full"
        required
        :ui="{ base: 'peer' }"
        @update:model-value="(val) => emit('update:form', 'contato', val)"
      >
        <label
          class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
        >
          <span class="inline-flex bg-default px-1">Número de contato</span>
        </label>
      </UInput>
    </UFormField>

    <!-- Situação atual no mercado de trabalho -->
    <UFormField
      label="Situação atual no mercado de trabalho"
      class="w-full"
      :error="error['situacao_trabalho']"
    >
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
    </UFormField>

    <!-- Rede social -->
    <UFormField class="w-full" :error="error['rede_social']">
      <UInput
        v-model="form.rede_social"
        type="text"
        placeholder=""
        class="w-full"
        required
        :ui="{ base: 'peer' }"
        @update:model-value="(val) => emit('update:form', 'rede_social', val)"
      >
        <label
          class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
        >
          <span class="inline-flex bg-default px-1">Rede social</span>
        </label>
      </UInput>
    </UFormField>
    <!-- Cidade onde mora -->
    <UFormField
      label="Cidade onde mora"
      class="w-full"
      :error="error['cidade']"
    >
      <USelectMenu
        v-model="selectedCity"
        :items="cities"
        placeholder="Cidade onde mora"
        class="w-full"
        required
        @update:model-value="
          (val) => emit('update:form', 'cidade', String(val ?? ''))
        "
      />
    </UFormField>

    <!-- Participação presencial -->
    <UFormField class="w-full" :error="error['deseja_participar_presencial']">
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
import type { RadioGroupItem } from "@nuxt/ui";
import type { IFormulario } from "@/types/form";
import { useForm } from "@/composables/useForm";
import { useValidateSteps } from "@/composables/useValidateSteps";
import { useAddress } from "@/composables/useAddress";

const { form } = useForm();
const { validateStep3, error } = useValidateSteps();
const toast = useToast();
const { cities } = useAddress();
const selectedCity = ref<{ value: number; label: string } | undefined>(
  undefined
);
const emit = defineEmits<{
  (e: "next" | "prev"): void;
  (e: "update:form", field: keyof IFormulario, value: string): void;
}>();

function next() {
  form.value.cidade = selectedCity.value?.label ?? "";
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

const presencialOptions = ref<RadioGroupItem[]>([
  { label: "Sim", value: "sim" },
  { label: "Não", value: "nao" },
  { label: "Talvez", value: "talvez" },
]);
</script>
