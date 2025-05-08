<template>
  <form class="space-y-4" @submit.prevent="emit('next')">
    <!-- Campos Etapa 4 -->
    <details open class="bg-purple-100 p-3 rounded">
      <summary>Como você ficou sabendo do Programa?</summary>
      <ul class="mt-2 list-disc list-inside">
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>WhatsApp</li>
        <li>TV</li>
        <li>Outros</li>
      </ul>
    </details>
    <!-- LGPD -->
    <fieldset class="bg-purple-100 p-3 rounded space-y-1">
      <legend class="font-medium">
        Você concorda com a utilização de seus dados (LGPD)?
      </legend>
      <label class="flex items-center space-x-2">
        <input
          type="radio"
          value="sim"
          :checked="props.form.lgpd === 'sim'"
          @change="emit('update:form', 'lgpd', 'sim')"
        />
        <span>Sim, concordo.</span>
      </label>
      <label class="flex items-center space-x-2">
        <input
          type="radio"
          value="outro"
          :checked="props.form.lgpd === 'outro'"
          @change="emit('update:form', 'lgpd', 'outro')"
        />
        <span>Não, concordo.</span>
      </label>
    </fieldset>
    <!-- ... outros detalhes -->
    <div class="flex justify-between mt-6">
      <button type="button" class="bg-gray-200 ..." @click="emit('prev')">
        VOLTAR
      </button>
      <button type="submit" class="bg-pink-500 ...">PRÓXIMO PASSO</button>
    </div>
  </form>
</template>

<script setup lang="ts">
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
</script>
