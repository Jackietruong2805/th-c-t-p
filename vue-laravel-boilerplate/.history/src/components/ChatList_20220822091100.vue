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
      'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    Name: 'Alexandre',
    status: true,
    chatText: 'If you ever look for a Sustainable...',
    Date: '9:00 04/8',
  },
  {
    Name: 'Quinn Farbey Roger',
    status: false,
    chatText: 'Bàn công chuyện hè',
    Date: '9:00 04/8',
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