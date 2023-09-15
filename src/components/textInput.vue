<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref<string>('');
</script>

<template>
  <input v-model="inputValue" @input="$emit('emit-value', inputValue)" class="text-input" type="text">
</template>

<style scoped>
.text-input {
  width: 20%;
  height: 2.5rem;
  font-size: var(--small-text-size);
  border: var(--normal-primary-border);
  border-radius: var(--rounded-side);
}
</style>