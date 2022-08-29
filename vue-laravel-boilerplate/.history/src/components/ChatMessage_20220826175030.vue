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
import { defineProps, ref } from 'vue';

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

let isMineChat = false;

console.log(checkColor);
</script>

