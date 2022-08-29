<template>
  <div class="chat__message">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsam
    consequatur iste vero quaerat ea voluptas! Sunt expedita molestias, eius,
    cupiditate commodi, hic accusantium unde nisi distinctio laborum voluptate
    neque?
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

console.log(message);
</script>

