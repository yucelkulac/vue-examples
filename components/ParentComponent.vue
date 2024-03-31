<template>
  <div>
    <div class="bg-red-500 p-10 text-white">parent component {{ countModel }}</div>
    <ChildComponent v-model="countModel" />
  </div>
</template>

<script setup>
const countModel = ref();

const parentdata = provide("activePlayer", 2);
</script>
