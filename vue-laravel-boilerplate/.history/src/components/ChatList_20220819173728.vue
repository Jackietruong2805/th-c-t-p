<template>
  <chat-item></chat-item>
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

const memberList: User = [
  {
    Name: 'Lê Thiện Viễn',
    status: false,
    chatText: 'Mr Taylor is a must',
    date: '9:00 04/8',
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
];
</script>s