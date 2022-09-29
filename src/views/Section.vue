<script setup>
  const props = defineProps({title: String});
</script>

<template>
  <div class="experience">
    <h1>Sur cette page, on va parler de mes {{title}}.</h1>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .experience {
    display: flex;
  }
}
</style>
