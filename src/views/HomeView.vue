<script setup>
  const props = defineProps({text: String});
</script>

<template>
  <div class="presText" v-html="text">
  </div>
</template>

<style scoped>
.presText {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    text-align: justify;
  }

@media (min-width: 1024px) {
}  
</style>
