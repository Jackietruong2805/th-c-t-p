<template>
  <header>
    <the-header></the-header>
  </header>
  <section class="chat"></section>
</template>

<script lang="ts" src="./App.vue.ts">
// import
import TheHeader from './components/TheHeader.vue';
import TheChat from './components/TheChat.vue';
</script>

<style lang="scss" >
@import 'styles';
.chat {
  background-color: $bg-gray-1;
  padding: 23px 200px 0 200px;
  flex-grow: 1;
  height: calc(100vh - 74px);
}
</style>
