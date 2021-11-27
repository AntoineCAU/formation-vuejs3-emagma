<template>
  <div class="section category" v-if="category">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Homepage</a></li>
        <li class="is-active"><a href="#" aria-current="page">{{ category.name }}</a></li>
      </ul>
    </nav>
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
import ProductItem from '@/components/product-list/ProductItem.vue';

export default {
  components: {
    ProductItem,
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
  async created() {
    this.category = await api.get(`/categories/${this.id}`);
    this.products = await api.get(`/products?categoryId=${this.id}&_embed=colors`);
  },
}
</script>
