<script lang="ts" setup>
const props = defineProps({
  memberInfo: Object,
});
</script>

<template>
  <div class="Rectangle-238">
    <div class="cardmem__ava">
      <img :src="props.memberInfo.image" alt="ava-1" class="cardmem__img" />
    </div>
    <div class="cardmem__info">
      <h2 class="cardmem__name">{{ props.memberInfo.name }}</h2>
      <p class="cardmem__text">{{ props.memberInfo.chatText }}</p>
    </div>
  </div>
</template>