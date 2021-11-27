<template>
  <div>
    <div class="card product">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="product.imageUrl" :alt="product.name">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ product.name }}</p>

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
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    format(price) {
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100);
    },
  }
}
</script>

<style lang="scss">
.product { height: 100% }
</style>
