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
    <h3>☄️Java 🚀Spring Boot 🪐Angular</h3>
    <h4>
      <a href="https://www.linkedin.com/in/mehdi-serra-5a3489207/" target="_blank">⚡Voir mon profil LinkedIn</a>
    </h4>
  </div>
</template>

<style scoped>
h1,h2, h3, h4 {
  text-align: center;
}

@media (min-width: 1024px) {
}
</style>
