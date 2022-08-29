<template>
  <div class="chat__container">
    <div class="chat__left">
      <div class="chat__search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Tìm kiếm..." />
      </div>
      <div class="chat__list">
        <chat-list></chat-list>
      </div>
    </div>
    <div class="chat__right"></div>
  </div>
</template>

<script lang="ts">
/* 
    import
*/
import ChatList from './ChatList.vue';
</script>