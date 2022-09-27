<script setup>
  const props = defineProps({title: String})
</script>

<template>
  <div class="experience">
    <h1>Sur cette page, on va parler de mes {{title}}.</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .experience {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
