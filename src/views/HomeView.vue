<script setup>
  const props = defineProps({text: String});
</script>

<template>
  <div class="presText" v-html="text">
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  .presText {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}  
</style>
