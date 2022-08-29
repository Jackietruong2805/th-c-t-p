import { defineStore } from 'pinia'



export const useMessageStore = defineStore({
  id: 'messages',
  state: () => {
    return {
      messages: [
        {
          fromId: 1,
          name: 'Lê Thiện Viễn',
          content: "testing chức năng chat"
        },
        {
          fromId: 2,
          name: 'Alexandre',
        },
        {
          fromId:  3,
          name: 'Quinn Farbey Roger',
        },
        {
          fromId: 4,
          name: 'Elena Nguyen',
        },
        {
          fromId: 5,
          name: 'Fatima',
        },
        {
          fromId: 6,
          name: 'Mr Taylor',
        },
      ]
    }
  },
  getters: {
  },
  actions: {

  }
})
