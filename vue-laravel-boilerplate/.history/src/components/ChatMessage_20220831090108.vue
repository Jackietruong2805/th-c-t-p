<template>
  <div :class="[props.message.msgColor ? 'wrapper' : 'wrapper-2']">
    <div
      :class="[
        props.message.msgColor ? 'message-content3' : 'message-content2',
      ]"
    >
      <i
        :style="{ display: props.message.msgColor ? 'block' : 'none' }"
        class="fa fa-phone-slash"
      ></i>
      {{ message }}
    </div>
    <span
      class="message-reload"
      :style="{ display: props.message.msgColor ? 'block' : 'none' }"
      ><i class="fa fa-sync"></i
    ></span>
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

