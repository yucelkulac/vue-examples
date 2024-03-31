<template>
  <div class="bg-orange-500 p-10 text-whit">
    <div class="e">child component {{ count }}</div>
    <input type="text" class="p-2 rounded shadow-sm bg-white border" v-model="count" />
    <div>Aktif Oyuncu : {{ activePlayer }}</div>
    <div class="p-10 bg-gray-200">
      <p>Oyun Bilgileri</p>
      {{ gameInfo }}
    </div>
  </div>
</template>

<script setup>
const count = defineModel();

const activePlayer = inject("activePlayer");
const { gameInfo } = inject("game_info");
</script>
