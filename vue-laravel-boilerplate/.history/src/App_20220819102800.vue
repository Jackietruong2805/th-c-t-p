<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive :max="5">
      <Component :is="Component" :key="$route.path" />
    </KeepAlive>
  </RouterView>
</template>

<script lang="ts" src="./App.vue.ts"></script>

<style lang="scss">
@use './styles' as *;
@use './assets/base.scss';
</style>
