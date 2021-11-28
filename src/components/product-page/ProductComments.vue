<template>
  <div>
    <button class="button is-primary is-light" @click="showForm = !showForm">
      <font-awesome-icon :icon="showForm ? 'comment-slash' : 'comment'" />
      <span class="ml-2">{{ showForm ? $t('hideForm') : $t('showForm') }}</span>
    </button>
    <product-comment-form
      v-show="showForm"
      :product="product"
      @hide="showForm = false"
    />
    <hr />
    <article
      v-for="comment in product.comments"
      :key="comment.id"
      class="message is-dark"
    >
      <div class="message-header is-flex">
        <p>{{ $d(comment.date, 'long') }}, par {{ comment.author }}</p>
        <p>({{ comment.note }}/5)</p>
      </div>
      <div class="message-body">
        {{ comment.comment }}
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ProductCommentForm from './ProductCommentForm.vue';

const store = useStore();
const product = computed(() => store.state.product.item);
const showForm = ref(true);
</script>
