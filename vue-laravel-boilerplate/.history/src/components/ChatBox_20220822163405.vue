<template>
  <div class="chat__top">
    <div class="chat__status">
      <img class="chat__image" :src="image" alt="" />
      <div class="status-wrapper">
        <h2 class="chat__name">{{ name }}</h2>
        <p class="Hot-ng-15-pht-tr">Hoạt động 15 phút trước</p>
      </div>
    </div>
    <div class="chat__Ellipse-21">
      <i class="fa fa-angle-left"></i>
    </div>
  </div>
  <div class="chat__content"></div>
  <div class="chat__message"></div>
</template>


<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

/* 
  stores
*/
import { useMemberStore } from '../stores/storemembers';
let image = '';
let name = '';
const route = useRoute();
const memberStore = useMemberStore().members;
console.log(parseInt(route.params.id));
memberStore.forEach((member) => {
  if (member.id == parseInt(route.params.id)) {
    image = member.image;
    name = member.name;
  }
});
</script>