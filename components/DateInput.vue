<!-- components/DateInput.vue -->
<template>
  <div class="relative w-full mb-4">
    <input
      type="date"
      :value="modelValue"
      class="w-full bg-[rgba(108,75,178,0.36)] border border-[rgba(108,75,178,0.4)] rounded-xs pl-[165px] pr-4 py-2 focus:outline-none text-[#2C144C]"
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
defineProps<{
  label: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

function handleInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>
