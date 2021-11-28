<template>
  <div v-html="product.details" />
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
});
</script>
