<template>
  <span
    class="message-reload"
    :style="{'display': props.message.msgColor == true block; }"
    ><i class="fa fa-sync"></i
  ></span>
  <div
    ref="checkColor"
    :class="[props.message.msgColor ? 'message-content3' : 'message-content2']"
  >
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

