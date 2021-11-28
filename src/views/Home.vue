<template>
  <section class="section">
    <h1 class="title has-text-primary">{{ $t('welcome') }}</h1>

    <figure class="image is-3by1">
      <img src="https://picsum.photos/id/191/2246/749" />
    </figure>

    <hr />

    <FeaturedProducts />
  </section>
</template>

<script setup>
import FeaturedProducts from '@/components/product-list/FeaturedProducts.vue';
</script>
