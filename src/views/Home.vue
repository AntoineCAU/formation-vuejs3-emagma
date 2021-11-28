<template>
  <section class="section">
    <h1 class="title has-text-primary">{{ title }}</h1>

    <figure class="image is-3by1">
      <img :src="imageUrl" />
    </figure>

    <hr />

    <template v-if="featured.length">
      <div class="is-flex is-align-items-baseline mb-4">
        <h3 class="is-size-3">Produits à la une</h3>
        <button
          class="button is-primary ml-4"
          @click="isFilteredInSale = !isFilteredInSale"
        >
          {{ isFilteredInSale ? 'Afficher tout' : 'Afficher uniquement les promos' }}
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
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { api } from '@/api';
import ProductItem from '@/components/product-list/ProductItem.vue';

const featured = ref([]);
const imageUrl = 'https://picsum.photos/id/191/2246/749';
const title = 'Bienvenue !';
const isFilteredInSale = ref(false);

onMounted(async () => {
  featured.value = await api.get('/products?featured=true&_embed=colors');
});
const filteredProducts = computed(() => !isFilteredInSale.value ? featured.value : featured.value.filter((product) => product.inSale));
</script>
