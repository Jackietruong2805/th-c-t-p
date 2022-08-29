import { defineStore } from 'pinia'



export const useMessageStore = defineStore({
  id: 'messages',
  state: () => {
    return {
      message: [
        {
          id: 1,
          name: 'Lê Thiện Viễn',
          status: false,
          chatText: 'Mr Taylor is a must',
          date: '9:00 04/8',
          image:
            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        },
        {
          id: 2,
          name: 'Alexandre',
          status: true,
          chatText: 'If you ever look for a Sustainable...',
          date: '9:00 04/8',
          image:
            'https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        },
        {
          id:  3,
          name: 'Quinn Farbey Roger',
          status: false,
          chatText: 'Bàn công chuyện hè',
          date: '9:00 04/8',
          image:
            'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
        },
        {
          id: 4,
          name: 'Elena Nguyen',
          status: true,
          chatText: 'Đúng vậy, thiết kế tái chế giúp chú...',
          date: '9:00 04/8',
          image:
            'https://images.unsplash.com/photo-1575186083127-03641b958f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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
