<template>
  <select>
    <slot name="default" />
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.id"
    >
      <slot name="option" :option="option">
        {{ option }}
      </slot>
    </option>
  </select>
</template>

<script setup>
defineProps({
  options: { type: Array, required: true },
});
</script>
