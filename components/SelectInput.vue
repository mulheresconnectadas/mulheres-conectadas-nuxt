<!-- components/BaseSelect.vue -->
<template>
  <div class="relative w-full">
    <USelect
      v-model="localValue"
      :items="options"
      arrow
      :class="[
        'w-full bg-[rgba(108,75,178,0.36)] border border-[rgba(108,75,178,0.4)] p-3 rounded-xs text-[#2C144C]',
        paddingLeftClass,
        extraClass,
      ]"
    >
      <template #leading>
        <span class="text-[#2C144C] font-semibold"> {{ label }}: </span>
      </template>
    </USelect>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Option {
  value: string;
  label: string;
}

const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  options: { type: Array as () => Option[], default: () => [] },
  paddingLeftClass: { type: String, default: "pl-20" },
  extraClass: { type: String, default: "" },
});

const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

// Sincroniza v-model
const localValue = ref(props.modelValue);
watch(localValue, (v) => emit("update:modelValue", v));
watch(
  () => props.modelValue,
  (v) => (localValue.value = v)
);
</script>

<style scoped>
/* remove todo padding das opções no dropdown */
:deep([role="option"]) {
  padding: 0 !important;
}
</style>
