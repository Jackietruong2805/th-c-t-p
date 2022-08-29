<template>
  <div class="message-content2">{{ message }}</div>
</template>

<script setup lang="ts">
/* 
    import
*/
import { defineProps } from 'vue';

/* 
    Props
*/

const props = defineProps({
  message: {
    type: String,
  },
});

const message = props.message;
console.log(message);
</script>

