<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
</template>

<style scoped>
  header{
    width: 100%;
    height: auto;
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
  }
</style>
