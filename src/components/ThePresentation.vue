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
    <h3>💻Développeur Full Stack</h3>
    <h3>Spring Boot / Angular / Vue 3</h3>
    <h3>📍Apside TOP</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.presentation h1,
.presentation h3 {
  text-align: center;
}

@media (min-width: 1024px) {
}
</style>
