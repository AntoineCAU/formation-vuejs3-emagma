<template>
  <ReloadPWA />
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import ReloadPWA from '@/components/ReloadPWA.vue';
</script>

<style lang="scss">
@import 'assets/scss/styles';
</style>
