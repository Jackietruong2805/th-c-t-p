import { defineStore, type StateTree, type _GettersTree } from 'pinia';

interface IChatBaseItem extends StateTree{
  messages : {chatId: number;
  fromId: number;
  // status: '' | 'sending' | 'sent' | 'sentError' | 'seen';
  content: string;
  msgColor: boolean;
}[]
}




export const useMessageStore = defineStore<string, IChatBaseItem>({
  id: 'messages',
  state: () => ({
    messages: 
      [
        {
          chatId: 1,
          fromId: 1,
          name: 'Lê Thiện Viễn',
          content: "testing chức năng chat",
          msgColor: false,
        },
        {
            chatId:2,
            fromId: 1,
            name: 'Lê Thiện Viễn',
            content: "testing chức năng chat 2 cho anh Lê Thiện Viễn",
            msgColor: false,

          },
        {
          chatId: 3,
          fromId: 2,
          name: 'Alexandre',
          content: "testing chức năng chat2",
          msgColor: false,

        },
        {
          chatId: 4,
          fromId:  3,
          name: 'Quinn Farbey Roger',
          content: "testing chức năng chat3",
          msgColor: false,
        },
        {
          chatId: 5,
          fromId: 4,
          name: 'Elena Nguyen',
          content: "testing chức năng chat4",
          msgColor: false,
        },
        {
          chatId: 6,
          fromId: 5,
          name: 'Fatima',
          content: "testing chức năng chat5",
          msgColor: false,
        },
        {
          chatId: 7,
          fromId: 6,
          name: 'Mr Taylor',
          content: "testing chức năng chat6",
          msgColor: false,
        },
      ]
  })
  ,
  getters: {
    messageUser(state){
        state.messages.filter((msg)=>{
          msg.fromId == route.params.id
        })
    }
  },
  actions: {

  }
})
