<template>
  <nav class="navbar is-fixed-top is-dark">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'homepage' }">Accueil</router-link>
        <router-link
          v-for="category in categories"
          :key="category.id"
          class="navbar-item"
          :to="{ name: 'category', params: { 'id': category.id }}"
        >
          {{ category.name }}
        </router-link>
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

  <router-view :key="$route.fullPath"></router-view>

</template>

<script>
import { api } from '@/api';

export default {
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
