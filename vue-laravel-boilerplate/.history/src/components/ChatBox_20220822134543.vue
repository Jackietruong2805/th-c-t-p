<template>
  <div class="chat__top">
    <div class="chat__status">
      <div class="chat__ava">
        ấdads
        <img src="" alt="" />
      </div>
      <div class="Hot-ng-15-pht-tr"></div>
    </div>
    <div class="chat__Ellipse-21"></div>
    <div class="chat__content"></div>
  </div>
</template>


<script lang="ts" setup>
/* 
  stores
*/
import { useMemberStore } from '../stores/storemembers';

const memberStore = useMemberStore().members;
</script>