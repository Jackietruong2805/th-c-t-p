<template>
  <div class="chat__left">
    <div class="chat__search">
      <i class="fa fa-search"></i>
      <input type="text" />
    </div>
    <chat-list></chat-list>
  </div>
  <div class="chat__right"></div>
</template>

<script lang="ts">
/* 
    import
*/
import ChatList from './ChatList.vue';
</script>