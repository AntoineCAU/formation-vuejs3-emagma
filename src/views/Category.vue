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
        {{ $t('noResult') }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, toRef, watch } from 'vue';
import { useStore } from 'vuex';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ProductItem from '@/components/product-list/ProductItem.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const store = useStore();
const category = computed(() => store.state.category.item);
const products = computed(() => store.state.product.items);

watch(
  toRef(props, 'id'),
  async () => {
    await store.dispatch('category/fetch', props.id);
    await store.dispatch('product/fetchByCategory', props.id);
  },
  { immediate: true },
)
</script>
