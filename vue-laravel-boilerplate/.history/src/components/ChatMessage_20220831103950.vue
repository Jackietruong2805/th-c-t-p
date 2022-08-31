<template>
  <div :class="[chatId > 0.5 ? 'wrapper' : 'wrapper-2']">
    <div
      :class="{
        myMessage: msgColor,
        myMessageError: status == 'sentError',
        myMissedCall: msgColor && status == 'callMissed',
        yourMessage: msgColor,
      }"
    >
      <i
        :style="{
          display: props.message.status == 'callMissed' ? 'block' : 'none',
        }"
        class="fa fa-phone-slash phone-missed"
      ></i>
      {{ message }}
    </div>
    <span
      class="message-reload"
      :style="{
        display: props.message.status == 'sentError' ? 'block' : 'none',
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

const chatId = props.message.chatId;

const msgColor = props.message.msgColor;

const status = props.message.status;

console.log(checkColor);
</script>

