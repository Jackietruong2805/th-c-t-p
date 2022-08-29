

<script lang="ts" setup>
/* 
    import
*/
import { ref } from 'vue';
import ChatItem from './ChatItem.vue';
import { useMemberStore } from '../stores/storemembers';
/* 
    data
*/

/* 
  stores

*/

const memberStore = useMemberStore();

// interface User {
//   name: string;
//   status: boolean;
//   chatText: string;
//   date: string;
//   image: string;
// }

// type memberChat = User;

// let memberList = ref<memberChat[]>([
</script>

<template>
  <ChatItem
    v-for="(member, index) in memberList"
    :memberInfo="member"
    :key="index"
  ></ChatItem>
</template>
