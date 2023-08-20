import { defineStore } from 'pinia'
import { ref } from 'vue'

export type languages = 'vn' | 'en'

interface SetType {
  appName: string
  filter: {
    all: string
    expired: string
    undone: string
  }
  message: {
    expirationWarning: string
  }
  todoCard: {
    work: string
    deadline: string
  }
  button: {
    addCard: string
    save: string
    discard: string
    edit: string
  }
}

const languageSet = {
  vn: {
    appName: 'Danh sách việc',
    filter: {
      all: 'Tất cả',
      expired: 'Hết hạn',
      undone: 'Cần làm'
    },
    message: {
      expirationWarning: 'Sắp đến hạn'
    },
    todoCard: {
      work: 'Việc: ',
      deadline: 'Hạn: '
    },
    button: {
      addCard: 'Thêm thẻ mới',
      save: 'Lưu',
      discard: 'Hủy',
      edit: 'Sửa'
    }
  },
  en: {
    appName: 'Todo list',
    filter: {
      all: 'All',
      expired: 'Expired',
      undone: 'Undone'
    },
    message: {
      expirationWarning: 'Expired soon'
    },
    todoCard: {
      work: 'Work: ',
      deadline: 'Deadline: '
    },
    button: {
      addCard: 'Add new card',
      save: 'save',
      discard: 'discard',
      edit: 'Edit'
    }
  }
}

export const useLanguageStore = defineStore('language', () => {
  const mainSet = ref<SetType>(languageSet['vn'])
  const changeLanguage = (language: languages) => {
    mainSet.value = languageSet[language]
  }
  return { mainSet, changeLanguage }
})
