<template>
  <div>
    <div class="card product">
      <div class="card-image">
        <figure class="image is-4by3">
          <router-link :to="{ name: 'product', params: { id: product.id }}">
            <img :src="product.imageUrl" :alt="product.name">
          </router-link>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              <router-link :to="{ name: 'product', params: { id: product.id }}">
                {{ product.name }}
              </router-link>
            </p>

            <div class="tags are-large is-pulled-right">
              <span class="tag is-primary is-rounded">
                {{ $n(product.price/100, 'currency') }}
              </span>
              <span v-if="product.inSale" class="tag is-warning is-rounded">{{ $t('inSale') }}</span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
});
</script>

<style lang="scss">
.product { height: 100% }
</style>
