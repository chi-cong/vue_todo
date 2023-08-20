<script lang="ts" setup>
import { useLanguageStore } from '../stores/language'
const languageStore = useLanguageStore();
</script>

<template>
  <div class="task-card">
    <p><span class="desc">{{ languageStore.mainSet.todoCard.work }}</span>{{ "abcdefg" }}</p>
    <p><span class="desc">{{ languageStore.mainSet.todoCard.deadline }}</span>{{ "23/04/2023 13:04" }}</p>
    <p><span class="warning">{{ languageStore.mainSet.message.expirationWarning }}</span></p>
    <div class="task-btn-area">
      <button class="task-card-btn edit-btn">{{ languageStore.mainSet.button.edit }}</button>
      <button class="task-card-btn delete-btn">{{ languageStore.mainSet.button.discard }}</button>
    </div>
  </div>
</template>

<style scoped>
.task-card {
  width: 50%;
  padding: 10px;
  border-radius: var(--rounded-angle);
  border: var(--normal-primary-border);
  background: var(--white);
  line-height: 1.5em;
  font-size: var(--normal-text-size);
  transition: translate 1s;
}

.task-card .desc {
  font-weight: var(--light-font);
  color: var(--secondary);
}

.task-card .warning {
  color: var(--warming);

}

.removed-task-card{
  translate: -100vw;
}

.task-btn-area{
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

.task-card .task-card-btn {
  border: var(--normal-white-border);
  border-radius: var(--rounded-angle);
  padding: var(--small-padding);
  background: var(--white);
  font-size: var(--normal-text-size);
}

.task-card .task-card-btn:hover {
  background-color: var(--transparent-black-bg);
}

.task-card .edit-btn {
  color: var(--primary);
}

.task-card .delete-btn {
  color: var(--warming);
}


@media screen and (max-width: 1200px) {
  .task-card {
    width: 60%;
  }
}</style>