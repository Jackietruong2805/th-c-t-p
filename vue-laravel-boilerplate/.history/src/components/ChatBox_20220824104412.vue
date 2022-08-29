<template>
  <div class="chat__top">
    <div class="chat__status">
      <img class="chat__image" :src="image" alt="" />
      <div class="status-wrapper">
        <h2 class="chat__name">{{ name }}</h2>
        <p class="Hot-ng-15-pht-tr">Hoạt động 15 phút trước</p>
      </div>
    </div>
    <div class="chat__Ellipse-21" @click="handleCloseChatBox">
      <button class="button">
        <i class="fa fa-angle-left"></i>
      </button>
    </div>
  </div>
  <div class="chat__content">
    <chat-message v-if="messageAvailable" :message="message"></chat-message>
  </div>
  <div class="chat__bottom">
    <div class="chat__message">
      <form class="chat__input" @submit.prevent>
        <input
          placeholder="Nhập nội dung..."
          class="message"
          type="text"
          v-model="message"
          ref="inputMessage"
        />
        <div class="chat__icon">
          <button class="button">
            <i class="fa fa-image"></i>
          </button>
          <button class="button">
            <i class="fa fa-grin-alt"></i>
          </button>
          <button
            type="submit"
            class="button sending"
            :disabled="!message"
            @click="addMessage"
          >
            <i class="fa fa-paper-plane" :class="{ 'is-active': message }"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script lang="ts" setup>
/*
  import
*/
import { watch, ref, onMounted, onActivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ChatMessage from './ChatMessage.vue';

/* 
  router
*/

const router = useRouter();

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

/* 

  message

*/

const message = ref('');
let messageAvailable = ref<boolean>(false);

function addMessage() {
  messageAvailable.value = true;
}

onActivated(() => {
  message.value = '';
});

/* 

  Close ChatBox

*/

function handleCloseChatBox() {
  router.push({ path: '/' });
}
</script>