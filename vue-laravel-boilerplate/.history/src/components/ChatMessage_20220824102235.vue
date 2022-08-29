<template>
  <div class="chat__message">
    {{ props.message }}
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

console.log(props.message);
</script>

