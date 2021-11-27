<template>
  <nav class="navbar is-fixed-top is-dark">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Accueil</a>
        <a
          v-for="category in categories"
          :key="category.id"
          class="navbar-item"
          href="#"
        >
          {{ category.name }}
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div class="button is-primary is-small">Mon panier</div>
            <div class="button is-white is-small">Mon compte</div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <Home />
</template>

<script>
import { api } from '@/api';
import Home from '@/views/Home.vue';

export default {
  components: {
    Home,
  },
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    this.categories = await api.get('/categories');
  },
};
</script>

<style lang="scss">
@import 'assets/scss/styles';
</style>
