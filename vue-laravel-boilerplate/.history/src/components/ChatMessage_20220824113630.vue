<template>
  <div class="chat__message">
    <div class="message-wrapper">
      {{ message }}
    </div>
  </div>
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
</script>

