<template>
  <template v-if="featured.length">
    <div class="is-flex is-align-items-baseline mb-4">
      <h3 class="is-size-3">{{ $t('featuredProducts') }}</h3>
      <button
        class="button is-primary ml-4"
        @click="isFilteredInSale = !isFilteredInSale"
      >
        {{ isFilteredInSale ? $t('viewAll') : $t('viewSalesOnly') }}
      </button>
    </div>

    <div class="columns products is-multiline">
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        class="column is-one-quarter"
      />
    </div>
  </template>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { api } from '@/api';
import ProductItem from '@/components/product-list/ProductItem.vue';

const featured = ref([]);
const isFilteredInSale = ref(false);

onMounted(async () => {
  featured.value = await api.get('/products?featured=true&_embed=colors');
});

const filteredProducts = computed(() => !isFilteredInSale.value ? featured.value : featured.value.filter((product) => product.inSale));
</script>
