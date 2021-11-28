<template>
  <section class="section">
    <h1 class="title has-text-primary">{{ title }}</h1>

    <figure class="image is-3by1">
      <img :src="imageUrl" />
    </figure>

    <hr />

    <FeaturedProducts />
  </section>
</template>

<script setup>
import FeaturedProducts from '@/components/product-list/FeaturedProducts.vue';

const imageUrl = 'https://picsum.photos/id/191/2246/749';
const title = 'Bienvenue !';
</script>
