<template>
  <div ref="checkColor" class="message-content2">{{ message }}</div>
</template>

<script setup lang="ts">
/* 
    import
*/
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';

/* 
  Route
*/

const route = useRoute();

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
if(myId )
</script>

