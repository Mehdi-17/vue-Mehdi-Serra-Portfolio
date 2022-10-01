<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="presentation">
    <h1 class="green">{{ msg }}</h1>
    <h2>💻Développeur Full Stack</h2>
    <h3>🚀Spring Boot 🪐Angular ☄️Vue 3</h3>
  </div>
</template>

<style scoped>
h1,h2, h3 {
  text-align: center;
}

@media (min-width: 1024px) {
}
</style>
