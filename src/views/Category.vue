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
      <div
        v-for="product in products"
        :key="product.id"
        class="column is-one-quarter"
      >
        <div class="card product">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="product.imageUrl" :alt="product.name">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ product.name }}
                </p>

                <div class="tags are-large is-pulled-right">
                  <span class="tag is-primary is-rounded">
                    {{ format(product.price) }}
                  </span>
                  <span v-if="product.inSale" class="tag is-warning is-rounded">PROMO</span>
                </div>
              </div>
            </div>
            <div class="is-flex is-justify-content-space-between is-align-items-baseline">
              <div class="field is-grouped is-grouped-multiline">
                <div
                  v-for="color in product.colors"
                  :key="color.id"
                  class="control"
                >
                  <div class="tags has-addons">
                    <span class="tag" :style="{ backgroundColor: color.code }"></span>
                    <span class="tag is-white">{{ color.label }}</span>
                  </div>
                </div>
              </div>
              <button class="button is-success" :disabled="0 === product.colors.length">Voir le produit</button>
            </div>
          </div>
        </div>

      </div>
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

export default {
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
  methods: {
    format(price) {
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100);
    },
  }
}
</script>
