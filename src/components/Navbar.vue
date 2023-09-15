<script lang="ts" setup>
import { useLanguageStore } from '../stores/language';
import type { Languages } from '../stores/language';
const languageStore = useLanguageStore();
const changeLang = (language: Languages) => {
  languageStore.changeLanguage(language);
  console.log(languageStore.currLang);

}
</script>

<template>
  <header>
    <h1 class="app-name">{{ languageStore.mainSet.appName }}</h1>
    <div class="language">
      <button @click="changeLang('vn')" class="language-btn"
        :class="{ 'active-language-btn': languageStore.currLang === 'vn' }">VN</button>
      <button @click="changeLang('en')" class="language-btn"
        :class="{ 'active-language-btn': languageStore.currLang === 'en' }">EN</button>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
  background: var(--primary);
  color: var(--white);
}

.app-name {
  font-weight: var(--thick-font);
}

.language {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.language-btn {
  background: var(--primary);
  border: var(--normal-white-border);
  border-radius: var(--rounded-angle);
  color: var(--white);
  transition: background .3s, color .3s;
}

.active-language-btn {
  color: var(--black);
  background: var(--white);
}

.language-btn:hover {
  color: var(--black);
  background: var(--white);
}
</style>