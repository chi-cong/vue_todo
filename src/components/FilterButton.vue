<script lang="ts" setup>
import { useLanguageStore } from "../stores/language";
import { onBeforeUpdate } from "vue";
import type { FilterOptions, } from "@/models/FilterOption";

interface FilterBtnProp {
  btnType: FilterOptions;
  currOpt: FilterOptions;
}

const languageStore = useLanguageStore();
const props = defineProps<FilterBtnProp>();
const filterOption: FilterOptions = props.btnType;

let currentActiveBtn = props.currOpt;
onBeforeUpdate(() => {
  currentActiveBtn = props.currOpt;
})
</script>

<template>
  <button class="filter-btn" @click="$emit('optionValue', filterOption)"
    :class="{ 'active-btn': filterOption === currentActiveBtn }">
    {{ languageStore.mainSet.filter[props.btnType] }}
  </button>
</template>

<style scoped>
.filter-btn {
  border: var(--normal-primary-border);
  padding: var(--normal-padding);
  border-radius: var(--rounded-angle);
  background: var(--white);
  font-size: 15px;
  transition: background 0.3s, color 0.3s;
}

.filter-btn:hover {
  background: var(--primary);
  color: var(--white);
}

.active-btn {
  background: var(--primary);
  color: var(--white);
}
</style>
