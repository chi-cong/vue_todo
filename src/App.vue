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
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5%;
    justify-content: space-between``;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background: var(--primary);
    font-weight: var(--thick-font);
  }
</style>
