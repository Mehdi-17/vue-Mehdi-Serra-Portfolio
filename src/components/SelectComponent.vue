<script setup>
import { ref } from "vue";

const selectedTechno = ref("");
</script>

<template>
  <select v-model="selectedTechno">
    <option disabled value="">Filtrer sur une technologie</option>
    <option>React Native</option>
    <option>Vue.js</option>
  </select>
</template>

<style scoped>
select {
  border-radius: 5px;
  text-align: center;
}
</style>
