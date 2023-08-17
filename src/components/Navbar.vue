<script lang="ts" setup>
import { useLanguageStore } from '../stores/language'
const languageStore = useLanguageStore();
</script>

<template>
  <header>
    <h1 class="app-name">{{ languageStore.mainSet.appName}}</h1>
    <div class="language">
      <button class="language-btn active-language-btn">VN</button>
      <button class="language-btn">EN</button>
    </div>
  </header>
</template>

<style>
  header{
    width: 100%;
    height: auto;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background: var(--primary);
    color: var(--white);
  }
  .app-name{
    font-weight: var(--thick-font);
  }
  .language{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .language-btn{
    background: var(--primary);
    border: 2px solid var(--white);
    border-radius: var(--rounded-angle);
    color: var(--white);
  }
  .active-language-btn{
    color: var(--black);
    background: var(--white);
  }
</style>