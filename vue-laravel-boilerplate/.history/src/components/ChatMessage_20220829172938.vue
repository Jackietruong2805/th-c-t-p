<template>
  <div
    ref="checkColor"
    :class="[props.message.msgColor ? 'message-content3' : 'message-content2']"
  >
    <span
      class="message-reload"
      :style="{ display: props.message.msgColor ? 'block' : 'none' }"
      ><i class="fa fa-sync"></i
    ></span>
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

console.log(checkColor);
</script>

