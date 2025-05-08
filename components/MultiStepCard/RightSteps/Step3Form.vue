<!-- components/MultiStepCard/RightSteps/Step3Form.vue -->
<template>
  <form class="space-y-4" @submit.prevent="emit('next')">
    <!-- Número de contato -->
    <UInput
      type="tel"
      :model-value="props.form.phone"
      placeholder="Número de contato:"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'phone', val)"
    />

    <!-- Situação atual no mercado de trabalho -->
    <USelect
      :items="situacaoOptions"
      :model-value="props.form.situacao"
      placeholder="Qual é sua situação atual no mercado de trabalho?"
      class="w-full"
      required
      @update:model-value="
        (val) => emit('update:form', 'situacao', String(val ?? ''))
      "
    />

    <!-- Rede social -->
    <UInput
      type="text"
      :model-value="props.form.social"
      placeholder="Insira a sua rede social (Instagram/Linkedin/Tiktok):"
      class="w-full"
      required
      @update:model-value="(val) => emit('update:form', 'social', val)"
    />

    <!-- Cidade onde mora -->
    <USelect
      :items="cidadeOptions"
      :model-value="props.form.cidade"
      placeholder="Cidade onde mora"
      class="w-full"
      required
      @update:model-value="
        (val) => emit('update:form', 'cidade', String(val ?? ''))
      "
    />

    <!-- Participação presencial -->
    <div class="bg-purple-100 p-3 rounded space-y-2">
      <p class="text-[#2C144C] font-medium">
        Você deseja participar de forma presencial?
      </p>
      <URadioGroup
        :model-value="props.form.presencial"
        class="flex flex-col space-y-1"
        @update:model-value="(val) => emit('update:form', 'presencial', val)"
      >
        <URadio label="Sim" value="sim" />
        <URadio label="Não" value="nao" />
        <URadio label="Talvez" value="talvez" />
      </URadioGroup>
    </div>

    <!-- Botões -->
    <div class="flex justify-between mt-6">
      <UButton
        type="button"
        variant="outline"
        class="px-6 py-3 rounded-full"
        @click="emit('prev')"
      >
        VOLTAR
      </UButton>
      <UButton type="submit" class="px-6 py-3 rounded-full">
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
</script>
