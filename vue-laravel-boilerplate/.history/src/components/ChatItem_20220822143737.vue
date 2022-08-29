<script lang="ts" setup>
/*
  import
*/

const props = defineProps({
  memberInfo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link :to="`/chatbox/${memberInfo.id}`">
    <div class="Rectangle-238">
      <div class="cardmem__ava">
        <img :src="memberInfo.image" alt="ava-1" class="cardmem__img" />
      </div>
      <div class="cardmem__info">
        <h2 class="cardmem__name">{{ memberInfo.name }}</h2>
        <p class="cardmem__text">{{ memberInfo.chatText }}</p>
        <p class="cardmem__date">{{ memberInfo.date }}</p>
      </div>
    </div>
  </router-link>
</template>