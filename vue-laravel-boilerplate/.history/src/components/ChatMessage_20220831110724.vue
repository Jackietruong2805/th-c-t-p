<template>
  <div :class="[chatId > 0.5 ? 'wrapper' : 'wrapper-2']">
    <div
      :class="{
        myMessage:
          (chatId > 0.5 && status == 'sent') ||
          (chatId > 0.5 && status == 'sending'),
        myMessageError: chatId > 0.5 && status == 'sentError',
        myMissedCall: chatId > 0.5 && status == 'callMissed',
        yourMessage: chatId <= 0.5 && !msgColor,
      }"
    >
      <i
        :style="{
          display: status == 'callMissed' ? 'block' : 'none',
        }"
        class="fa fa-phone-slash phone-missed"
      ></i>
      {{ message }}
    </div>
    <span
      class="message-reload"
      :style="{
        display: status == 'sentError' && chatId > 0.5 ? 'block' : 'none',
      }"
      ><i class="fa fa-sync"></i
    ></span>
  </div>
</template>

<script setup lang="ts">
/* 
    import
*/
import { useRoute } from 'vue-router';
import { defineProps, ref, onUpdated, onBeforeMount } from 'vue';

/* 
  Route
*/

const route = useRoute();

const checkColor = ref('');

/* 
    Props
*/

const props = defineProps({
  message: {
    type: Object,
  },
});

let message = props.message.content;

const chatId = props.message.chatId ? props.message.chatId : 0.2;

const msgColor = props.message.msgColor;

const status = props.message.status;

console.log(checkColor);
</script>

