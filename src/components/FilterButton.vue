<script lang="ts" setup>
import { useLanguageStore } from '../stores/language'

type Options = 'all' | 'undone' | 'expired'
interface FilterBtnProp {
  'btnType' : Options
}

const languageStore = useLanguageStore();
const props = defineProps<FilterBtnProp>();
const filterOption: Options = props.btnType;

</script>

<template>
  <button class="filter-btn" :class="{ 'active-btn' : filterOption === 'all'}">{{ languageStore.mainSet.filter[filterOption] }}</button>
</template>

<style scoped>
.filter-btn{
  border: var(--normal-primary-border);
  padding: var(--normal-padding);
  border-radius: var(--rounded-angle);
  background: var(--white);
  font-size: 15px;
  transition: background .3s, color .3s;
}
.filter-btn:hover{
  background: var(--primary);
  color: var(--white);
}
.active-btn{
  background: var(--primary);
  color: var(--white);
}

</style>