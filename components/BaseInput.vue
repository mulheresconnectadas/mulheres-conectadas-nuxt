<!-- components/BaseInput.vue -->
<template>
  <div class="relative w-full mb-4">
    <input
      :type="inputType"
      :inputmode="type === 'tel' ? 'numeric' : undefined"
      :value="modelValue"
      :class="[
        'w-full bg-[rgba(108,75,178,0.36)] border border-[rgba(108,75,178,0.4)] rounded-xs pr-4 py-3 focus:outline-none text-[#2C144C]',
        paddingLeftClass,
        extraClass,
      ]"
      :maxlength="type === 'tel' ? 15 : undefined"
      @input="handleInput"
    />
    <span
      class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2C144C] font-semibold"
    >
      {{ label }}:
    </span>
  </div>
</template>

<script setup lang="ts">
/**
 * Componente de input genérico.
 * - type: tipo de input. Se "tel", aplica máscara (xx) xxxxx-xxxx e corta em 11 dígitos.
 * - modelValue: valor v-model (já formatado, no caso de tel).
 * - paddingLeftClass / extraClass: controle de espaçamento e estilos extras.
 */
const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  type: { type: String, default: "text" },
  paddingLeftClass: { type: String, default: "pl-20" },
  extraClass: { type: String, default: "" },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// O inputType repassa text para masking, mas mantém outros types puros
const inputType = props.type === "tel" ? "text" : props.type;

/**
 * Formata um string de até 11 dígitos no padrão brasileiro:
 * (xx) xxxxx-xxxx
 */
function formatBrPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  let out = "";

  if (digits.length > 0) {
    out += "(" + digits.slice(0, 2);
  }
  if (digits.length >= 3) {
    out += ") " + digits.slice(2, 7);
  }
  if (digits.length >= 8) {
    out += "-" + digits.slice(7, 11);
  }

  return out;
}

function handleInput(e: Event) {
  let v = (e.target as HTMLInputElement).value;

  if (props.type === "tel") {
    v = formatBrPhone(v);
  }

  emit("update:modelValue", v);
}
</script>
