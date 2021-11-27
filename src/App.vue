<template>
  <nav class="navbar is-fixed-top is-dark">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <p class="navbar-item is-clickable" @click="currentCategory = null">Accueil</p>
        <p
          v-for="category in categories"
          :key="category.id"
          class="navbar-item is-clickable"
          @click="currentCategory = category.id"
        >
          {{ category.name }}
        </p>
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

  <Category v-if="currentCategory" :id="currentCategory" :key="currentCategory" />
  <Home v-else />

</template>

<script>
import { api } from '@/api';
import Category from '@/views/Category.vue';
import Home from '@/views/Home.vue';

export default {
  components: {
    Category,
    Home,
  },
  data() {
    return {
      currentCategory: null,
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
