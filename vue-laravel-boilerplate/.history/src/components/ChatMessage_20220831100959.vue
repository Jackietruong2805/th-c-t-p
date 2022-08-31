<template>
  <div
    :class="[
      props.message.msgColor || props.message.status == 'callMissed'
        ? 'wrapper'
        : 'wrapper-2',
    ]"
  >
    <div
      :class="{
        myMessage: props.message.status != 'callMissed',
        myMissedCall: props.message.status == 'callMissed',
        messageError: props.message.status == 'sentError',
        friendMessage: !props.message.msgColor,
      }"
    >
      <i
        :style="{
          display: (props.message.status = 'callMissed' ? 'block' : 'none'),
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

console.log(checkColor);
</script>

