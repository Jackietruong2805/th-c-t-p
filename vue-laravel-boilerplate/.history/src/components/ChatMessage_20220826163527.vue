<template>
  <div class="message-content2">{{ message }}</div>
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

if (props.message.fromId == route.params.id) {
  let message = props.message.content;
}
</script>

