<template>
  <main class="wrapper">
    <header>
      <the-header></the-header>
    </header>
    <section class="chat"></section>
  </main>
</template>

<script lang="ts" src="./App.vue.ts">
// import
import TheHeader from './components/TheHeader.vue';
</script>

<style lang="scss" scoped>
@import 'styles';
.wrapper {
  display: flex;
  flex-direction: column;
  header {
    flex-grow: 0;
  }
  .chat {
    background-color: $bg-gray-1;
    padding: 20px 200px 0 200px;
    flex-grow: 1;
  }
}
</style>
