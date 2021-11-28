<template>
  <div class="section category" v-if="category">
    <breadcrumbs :current="category.name" />
    <h1 class="title">{{ category.name }}</h1>
    <div class="notification is-primary">{{ category.description }}</div>

    <div v-if="products.length" class="columns products is-multiline">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="column is-one-quarter"
      />
    </div>
    <div v-else class="buttons is-centered">
      <a class="button is-rounded is-centered is-link">
        Aucun résultat ici. Retour à la page d'accueil.
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef, watch } from 'vue';
import { api } from '@/api';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ProductItem from '@/components/product-list/ProductItem.vue';

const props = defineProps({
  id: { type: String, required: true },
});
const category = ref(null);
const products = ref([]);

watch(
  toRef(props, 'id'),
  async () => {
    category.value = await api.get(`/categories/${props.id}`);
    products.value = await api.get(`/products?categoryId=${props.id}&_embed=colors`);
  },
  { immediate: true },
)
</script>
