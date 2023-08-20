<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import TaskCard from './components/TaskCard.vue';
import FilterButton from './components/FilterButton.vue';
</script>

<template>
  <Navbar />
  <div class="filter-btn-container">
    <FilterButton btn-type="all"></FilterButton>
    <FilterButton btn-type="expired"></FilterButton>
    <FilterButton btn-type="undone"></FilterButton>
  </div>
  <div class="task-card-container">
    <TaskCard></TaskCard>
  </div>
</template>

<style scoped>

.filter-btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}

.task-card-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto auto auto;
}
</style>
