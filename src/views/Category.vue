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

<script>
import { api } from '@/api';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ProductItem from '@/components/product-list/ProductItem.vue';

export default {
  components: {
    ProductItem,
    Breadcrumbs,
  },
  data() {
    return {
      category: null,
      products: [],
    };
  },
  props: {
    id: { type: String, required: true },
  },
  watch: {
    id: {
      async handler() {
        this.category = await api.get(`/categories/${ this.id }`);
        this.products = await api.get(`/products?categoryId=${ this.id }&_embed=colors`);
      },
      immediate: true,
    },
  },
}
</script>
