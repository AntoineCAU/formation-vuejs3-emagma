<template>
  <section class="hero is-primary" v-if="product">
    <div class="hero-body">
      <h1 class="title">{{ product.name }}</h1>
      <h2 class="subtitle">{{ product.category.name }}</h2>
    </div>
  </section>

  <section class="section" v-if="product">
    <breadcrumbs :parent="{
                    path: { name: 'category', params: { id: product.category.id }},
                    label: product.category.name
                  }"
                 :current="product.name"
    />

    <div class="box columns" id="product">
      <div class="column is-one-third">
        <figure class="image is-4by3">
          <img :src="product.imageUrl" :alt="product.name">
        </figure>
      </div>
      <div class="column is-two-thirds">
        <div class="is-flex is-justify-content-space-between is-align-items-baseline">
          <p class="title">{{ product.name }}</p>
          <div class="tags are-large">
            <span class="tag is-primary is-rounded">
              {{ $n(product.price/100, 'currency') }}
            </span>
            <span v-if="product.inSale" class="tag is-warning is-rounded">{{ $t('inSale') }}</span>
          </div>
        </div>

        <div class="is-flex is-justify-content-space-between is-align-items-baseline">
          <product-colors class="select is-rounded is-medium is-warning" />
          <product-quantity class="is-flex is-align-items-baseline" />
        </div>

        <div class="tabs is-boxed is-medium">
          <ul>
            <li
              v-for="tab in tabs" :key="tab.component"
              :class="{ 'is-active': tab.component === activeTab }"
              @click="activeTab = tab.component"
            ><a>{{ tab.label }}</a></li>
          </ul>
        </div>
        <keep-alive>
          <transition name="slide-fade">
            <component class="content" :is="activeTab" />
          </transition>
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, shallowRef, watch, toRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ProductColors from '@/components/product-page/ProductColors.vue';
import ProductComments from '@/components/product-page/ProductComments.vue';
import ProductDetails from '@/components/product-page/ProductDetails.vue';
import ProductQuantity from '@/components/product-page/ProductQuantity.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const store = useStore();
const { t } = useI18n();
const product = computed(() => store.state.product.item);

const activeTab = shallowRef(ProductDetails);
const tabs = computed(() => {
  const tabs = [{ label: t('details'), component: ProductDetails }];
  if (0 < product.value.comments.length) {
    tabs.push({
      label: t('comments', { num: product.value.comments.length }),
      component: ProductComments });
  }
  return tabs;
});

watch(
  toRef(props, 'id'),
  async () => {
    await store.dispatch('product/fetch', props.id);
  },
  { immediate: true },
)
</script>

<style lang="scss">
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease-out;
  opacity: 0;
}
.slide-fade-enter-from, .fade-leave-to {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
