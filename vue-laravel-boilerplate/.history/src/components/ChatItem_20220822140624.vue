<script lang="ts" setup>
/*
  import
*/

import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  memberInfo: {
    type: Object,
    required: true,
  },
});

function handleChatbox() {
  router.push('/chatbox', {});
}
</script>

<template>
  <router-link to="/chatbox" @click="handleChatbox()">
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