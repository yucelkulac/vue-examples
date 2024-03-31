<template>
  <div>
    request page
    <button @click="fetchData" class="bg-gray-white border shadow-sm rounded font-semibold p-2">Fetch Data</button>
  </div>
</template>

<script setup>
const fetchData = async () => {
  const { data } = await useFetch("/api/user/test");

  console.log(data);
};
</script>
