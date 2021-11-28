<template>
  <div v-if="product.colors.length">
    <select name="color" @change="setColor">
      <option>Couleur...</option>
      <option
        v-for="color in product.colors"
        :key="color.id"
        :value="color.id"
      >{{ color.label }}</option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const product = computed(() => store.state.product.item);
const setColor = (value) => {
  store.dispatch('product/setColor', value.target.value);
}
</script>
