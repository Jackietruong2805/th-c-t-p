<template>
  <div :class="[chatId > 0.5 ? 'wrapper' : 'wrapper-2']">
    <div
      :class="{
        myMessage: chatId > 0.5 && status == 'sent',
        myMessageError: chatId > 0.5 && status == 'sentError',
        myMissedCall: chatId > 0.5 && status == 'callMissed',
        yourMessage: chatId <= 0.5 && status == 'sent',
        yourMessageError: chatId <= 0.5 && status == 'sentError',
        yourMissedCall: chatId <= 0.5 && status == 'callMissed',
      }"
    >
      <i
        :class="[status == 'callMissed' && chatId > 0.5 ? 'block' : 'none']"
        class="fa fa-phone-slash my-phone-missed"
      ></i>
      <i
        :class="[status == 'callMissed' && chatId <= 0.5 ? 'block' : 'none']"
        class="fa fa-phone-slash your-phone-missed"
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

