<template>
  <chat-item v-for="member in memberList" :key="member"></chat-item>
</template>


<script lang="ts">
/* 
    import
*/
import ChatItem from './ChatItem.vue';
/* 
    data
*/

interface User {
  Name: string;
  chatText: string;
  date: string;
}

let memberList: User = [
  {
    Name: 'Lê Thiện Viễn',
    status: false,
    chatText: 'Mr Taylor is a must',
    date: '9:00 04/8',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    Name: 'Alexandre',
    status: true,
    chatText: 'If you ever look for a Sustainable...',
    Date: '9:00 04/8',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    Name: 'Quinn Farbey Roger',
    status: false,
    chatText: 'Bàn công chuyện hè',
    Date: '9:00 04/8',
    image:
      'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    Name: 'Elena Nguyen',
    status: true,
    chatText: 'Đúng vậy, thiết kế tái chế giúp chú...',
    Date: '9:00 04/8',
  },
  {
    Name: 'Fatima',
    status: false,
    chatText: 'Tôi đã sử dụng dịch vụ này, Thiết k...',
    Date: '9:00 04/8',
  },
  {
    Name: 'Mr Taylor',
    status: false,
    chatText: 'Bạn đã gửi hình ảnh',
    Date: '9:00 04/8',
  },
];
</script>