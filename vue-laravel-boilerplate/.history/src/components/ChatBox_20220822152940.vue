<template>
  <div class="chat__top">
    <div class="chat__status">
      <div class="chat__ava">
        <img src="" alt="" />
      </div>
      <div class="Hot-ng-15-pht-tr"></div>
    </div>
    <div class="chat__Ellipse-21"></div>
    <div class="chat__content"></div>
    <div>{{ $route.params.id }}</div>
  </div>
</template>


<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

/* 
  stores
*/
import { useMemberStore } from '../stores/storemembers';
let image = '';
const route = useRoute();
const memberStore = useMemberStore();
console.log(parseInt(route.params.id));
// memberStore.forEach(member =>{
//   if(Array.isArray(route.params.id)){
//   }
//   if
// })
// route.
</script>