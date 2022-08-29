<template>
  <div
    ref="checkColor"
    :class="[isMineChat ? 'message-content' : 'message-content2']"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
/* 
    import
*/
import { useRoute } from 'vue-router';
import { defineProps, ref, onUpdated } from 'vue';

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
  isMine: {
    type: Boolean,
    default: false,
  },
});

let message = props.message.content;

let myId = Math.random();

let isMineChat = props.isMine;

bef;
if (props.isMine) {
  isMineChat = props.isMine;
}

console.log(checkColor);
</script>

