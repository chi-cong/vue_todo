<script setup lang="ts">
import { ref } from 'vue';
const date = ref<string>('');
</script>

<template>
  <input v-model="date" @input="$emit('emit-date', date)" type="datetime-local" class="date-time-input">
</template>

<style>
.date-time-input {
  width: auto;
  height: 2.5rem;
  font-size: var(--small-text-size);
  border: var(--normal-primary-border);
  border-radius: var(--rounded-side);
}
</style>