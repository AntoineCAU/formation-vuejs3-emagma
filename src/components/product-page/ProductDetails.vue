<template>
  <div v-html="product.details" />
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const product = computed(() => store.state.product.item);
</script>
