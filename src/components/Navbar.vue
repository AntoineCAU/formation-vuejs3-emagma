<template>
  <nav class="navbar is-fixed-top is-dark">
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'homepage' }">{{ $t('homepage')
          }}</router-link>
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
            <div class="button is-primary is-small">{{ $t('cart') }}</div>
            <div class="button is-white is-small">{{ $t('account') }}</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();
const categories = computed(() => store.state.category.items);

onMounted(() => store.dispatch('category/fetchAll'));
</script>
