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
    chatText: 'Mr Taylor is a must',
    status: false,
    date: '9:00 04/8',
  },
  {
    Name: 'Alexandre',
    chatText: 'If you ever look for a Sustainable...',
    Date: '9:00 04/8',
  },
  {
    Name: 'Quinn Farbey Roger',
    chatText:
  },
];
</script>