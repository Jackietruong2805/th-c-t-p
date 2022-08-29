<template>
  <div
    ref="checkColor"
    :class="{
      'message-content': Math.random() > 0.5,
      'message-content2': Math.random() < 0.5,
    }"
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

const myId = Math.random();

console.log(checkColor);
</script>

