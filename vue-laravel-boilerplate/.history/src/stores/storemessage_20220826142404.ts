import { defineStore } from 'pinia'



export const useMessageStore = defineStore({
  id: 'messages',
  state: () => {
    return {
      message: [
        {
          id: 1,
          name: 'Lê Thiện Viễn',
        },
        {
          id: 2,
          name: 'Alexandre',
        },
        {
          id:  3,
          name: 'Quinn Farbey Roger',
        },
        {
          id: 4,
          name: 'Elena Nguyen',
        },
        {
          id: 5,
          name: 'Fatima',
          status: false,
          chatText: 'Tôi đã sử dụng dịch vụ này, Thiết k...',
          date: '9:00 04/8',
          image:
            'https://sohanews.sohacdn.com/160588918557773824/2021/4/28/photo-9-1619575510785681886686.jpg',
        },
        {
          id: 6,
          name: 'Mr Taylor',
          status: false,
          chatText: 'Bạn đã gửi hình ảnh',
          date: '9:00 04/8',
          image:
            'https://kenh14cdn.com/2019/10/19/7269872413639461504308173511299650480050194n-15714426244161741222544.jpg',
        },
      ]
    }
  },
  getters: {
  },
  actions: {

  }
})
