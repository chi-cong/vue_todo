<script lang="ts" setup>
import { useLanguageStore } from '../stores/language'
const languageStore = useLanguageStore();
</script>

<template>
  <header>
    <h1 class="app-name">{{ languageStore.mainSet.appName}}</h1>
  </header>
</template>