<template>
  <div v-if="product.colors.length">
    <Selector :options="product.colors" @change="setColor">
      <template #default>
        <option value="">{{ $t('color') }}...</option>
      </template>
      <template #option="{ option }">
        {{ option.label }}
      </template>
    </Selector>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Selector from '@/components/Selector.vue';

const store = useStore();
const product = computed(() => store.state.product.item);
const setColor = (value) => store.dispatch('product/setColor', value.target.value);
</script>
