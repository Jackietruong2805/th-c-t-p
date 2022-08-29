import { defineStore } from 'pinia'



export const useMessageStore = defineStore({
  id: 'messages',
  state: () => {
    return {
      messages: [
        {
          fromId: 1,
          name: 'Lê Thiện Viễn',
          content: "testing chức năng chat",
        },
        {
          fromId: 2,
          name: 'Alexandre',
          content: "testing chức năng chat2",
        },
        {
          fromId:  3,
          name: 'Quinn Farbey Roger',
          content: "testing chức năng chat3",
        },
        {
          fromId: 4,
          name: 'Elena Nguyen',
          content: "testing chức năng chat4",
        },
        {
          fromId: 5,
          name: 'Fatima',
          content: "testing chức năng chat5",
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
