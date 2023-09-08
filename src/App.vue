<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

import type { FilterOptions } from './models/FilterOption';

import Navbar from './components/Navbar.vue';
import TaskCard from './components/TaskCard.vue';
import FilterButton from './components/FilterButton.vue';
import TextInput from './components/TextInput.vue';
import DateTimeInput from './components/DateTimeInput.vue';
import FormButton from './components/FormButton.vue';

const filterOption = ref<FilterOptions>('all');
const changeOpttion = (option: FilterOptions): void => {
  filterOption.value = option;

}
</script>

<template>
  <Navbar />
  <form class="task-form" action="">
    <TextInput></TextInput>
    <DateTimeInput></DateTimeInput>
    <FormButton></FormButton>
  </form>
  <div class="filter-btn-container">
    <FilterButton :btn-type="'all'" :curr-opt="filterOption" @option-value="changeOpttion"></FilterButton>
    <FilterButton :btn-type="'expired'" :curr-opt="filterOption" @option-value="changeOpttion"></FilterButton>
    <FilterButton :btn-type="'undone'" :curr-opt="filterOption" @option-value="changeOpttion"></FilterButton>
  </div>
  <div class="task-card-container">
    <TaskCard></TaskCard>
  </div>
</template>

<style scoped>
.task-form {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}

.filter-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}

.task-card-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto auto auto;
}
</style>
