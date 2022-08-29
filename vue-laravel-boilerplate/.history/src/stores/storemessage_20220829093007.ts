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
          msgColor: false,
        },
        {
            fromId: 1,
            name: 'Lê Thiện Viễn',
            content: "testing chức năng chat 2 cho anh Lê Thiện Viễn",
            msgColor: false,

          },
        {
          fromId: 2,
          name: 'Alexandre',
          content: "testing chức năng chat2",
          msgColor: false,

        },
        {
          fromId:  3,
          name: 'Quinn Farbey Roger',
          content: "testing chức năng chat3",
          msgColor: false,
        },
        {
          fromId: 4,
          name: 'Elena Nguyen',
          content: "testing chức năng chat4",
          msgColor: false,
        },
        {
          fromId: 5,
          name: 'Fatima',
          content: "testing chức năng chat5",
          msgColor: false,

        },
        {
          fromId: 6,
          name: 'Mr Taylor',
          content: "testing chức năng chat6",
        },
      ]
    }
  },
  getters: {
  },
  actions: {

  }
})
