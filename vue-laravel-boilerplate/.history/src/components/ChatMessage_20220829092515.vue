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

let myId = Math.random();

if (myId != message.fromId) {
  let isMineChat = ref<boolean>(false);
  isMineChat.value = true;
}

console.log(checkColor);
</script>

