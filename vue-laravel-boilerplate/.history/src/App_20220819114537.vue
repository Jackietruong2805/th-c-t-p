<template>
  <header class="header">
    <the-header></the-header>
  </header>
  <section class="chat"></section>
</template>

<script lang="ts" src="./App.vue.ts">
// import
import TheHeader from "./components/TheHeader.vue"
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.header {
  width: 1728px;
  height: 74px;
  display: flex;
  margin: 0 0 23px;
  padding: 9px 50px 11px;
  background-color: #4d92fb;
}
</style>
