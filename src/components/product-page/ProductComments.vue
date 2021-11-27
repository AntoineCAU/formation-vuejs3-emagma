<template>
  <div>
    <button class="button is-primary is-light" @click="showForm = !showForm">
      <font-awesome-icon :icon="showForm ? 'comment-slash' : 'comment'" />
      <span class="ml-2">{{ showForm ? 'Cacher' : 'Afficher' }} le formulaire de commentaire</span>
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
        <p>{{ formatDate(comment.date) }}, par {{ comment.author }}</p>
        <p>({{ comment.note }}/5)</p>
      </div>
      <div class="message-body">
        {{ comment.comment }}
      </div>
    </article>
  </div>
</template>

<script>
import ProductCommentForm from './ProductCommentForm.vue';

export default {
  props: {
    product: { type: Object, required: true },
  },
  components: {
    ProductCommentForm,
  },
  data() {
    return {
      showForm: true,
    };
  },
  methods: {
    formatDate(value) {
      const date = new Date(value);

      return date.toLocaleDateString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    }
  }
}
</script>
