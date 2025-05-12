<!-- components/BaseRadioGroup.vue -->
<template>
  <div class="border border-[rgba(108,75,178,0.4)] rounded-xs mb-4">
    <!-- Label da pergunta -->
    <div
      class="p-4 mb-3 text-[#2C144C] bg-[rgba(108,75,178,0.36)] border-b border-[rgba(108,75,178,0.4)] font-medium"
    >
      {{ label }}
    </div>
    <!-- Radios -->
    <div class="space-y-2 bg-white p-4">
      <label
        v-for="opt in options"
        :key="opt.value"
        :class="[
          'flex items-center space-x-2 cursor-pointer rounded px-2 py-1 transition-colors',
        ]"
      >
        <input
          type="radio"
          :value="opt.value"
          :checked="opt.value === localValue"
          class="h-4 w-4 accent-[#6C4BB2] border border-[rgba(108,75,178,0.4)] focus:ring-2 focus:ring-[rgba(108,75,178,0.4)]"
          @change="onChange(opt.value)"
        />
        <span class="text-[#2C144C] font-semibold">
          {{ opt.label }}
        </span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Option {
  value: string;
  label: string;
}

const props = defineProps<{
  /** Texto da pergunta */
  label: string;
  /** Lista de opções */
  options: Option[];
  /** v-model */
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

// Estado interno sincronizado com o v-model
const localValue = ref(props.modelValue);
watch(localValue, (v) => emit("update:modelValue", v));
watch(
  () => props.modelValue,
  (v) => (localValue.value = v)
);

function onChange(val: string) {
  localValue.value = val;
}
</script>
