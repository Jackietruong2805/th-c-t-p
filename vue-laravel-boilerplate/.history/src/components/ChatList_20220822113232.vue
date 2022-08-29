

<script lang="ts" setup>
/* 
    import
*/
import { ref } from 'vue';
import ChatItem from './ChatItem.vue';
import { useMemberStore } from '../stores/storemembers';

/* 
  stores

*/

const memberStore = useMemberStore();

const memberList = memberStore.members;
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
