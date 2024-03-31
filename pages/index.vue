<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script setup>
const gameInfo = reactive({
  players: [
    {
      name: "Player 1",
    },
    {
      name: "Player 2",
    },
  ],
  round: 5,
  status: false,
});

provide("game_info", {
  gameInfo,
});
</script>
