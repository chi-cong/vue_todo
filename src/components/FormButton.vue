<script lang="ts" setup>
import { useLanguageStore } from '../stores/language'
const languageStore = useLanguageStore();
</script>

<template>
  <button class="form-btn">{{ languageStore.mainSet.button.addCard }}</button>
</template>

<style scoped>
.form-btn {
  border: var(--normal-primary-border);
  padding: var(--normal-padding);
  border-radius: var(--rounded-angle);
  background: var(--primary);
  color: var(--white);
  height: 2.5rem;
  font-size: var(--small-text-size);
  transition: background .3s, border .3s;
}

.form-btn:hover {
  background: var(--secondary);
  border: var(--normal-secondary-border);
}
</style>