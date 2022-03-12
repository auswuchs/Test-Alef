import { defineStore } from 'pinia'
import type { PersonalData } from '@/components/interfaces'




export const useFormStore = defineStore({
  id: 'form',
  state: () => ({
    parent: {} as PersonalData, 

    childs: [] as PersonalData[]
  }),
  getters: {
  },
  actions: {
  }
})
