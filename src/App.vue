<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import TaskCard from './components/TaskCard.vue';
</script>

<template>
  <Navbar />
  <div class="task-card-container">
    <TaskCard></TaskCard>
  </div>
</template>

<style scoped>
.task-card-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto auto auto;
}
</style>
