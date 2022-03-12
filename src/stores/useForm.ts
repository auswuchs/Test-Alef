import { defineStore } from 'pinia'

interface FormData {
  name: string,
  age: number | null
}

export const useFormStore = defineStore({
  id: 'form',
  state: () => ({
    parent: {} as FormData, 

    childs: [] as FormData[]
  }),
  getters: {
  },
  actions: {
  }
})
