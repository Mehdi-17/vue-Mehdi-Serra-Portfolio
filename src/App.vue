<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThePresentation from "./components/ThePresentation.vue";
</script>

<template>
  <div class="container">
    <header>
    <img
      alt="Mehdi Serra Photo"
      class="presentationPhoto"
      src="@/assets/mehdi-2.jpeg"
    />

    <div class="wrapper">
      <ThePresentation msg="Mehdi Serra" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/experience">Expérience</RouterLink>
        <RouterLink to="/formation">Formation</RouterLink>
        <RouterLink to="/projects">Projets</RouterLink>
        <RouterLink to="/hobbies">Centres d'intérêts</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  </div>
  
</template>

<style scoped>
.container {
  position: relative;
  top: -50px;
}

header {
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 1.5rem;
}

.presentationPhoto {
  display: block;
  margin: 0 auto;
  height: auto;
  width: 100px;
  border-radius: 50%;
  border: 4px solid hsla(160, 100%, 37%, 1);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  position: relative;
}

nav a {
  display: inline-block;
  padding: 0 1.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  .container{
    top: -100px;
  }
  .presentationPhoto {
    margin: 0 auto;
    height: 200px;
    width: auto;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }

  nav {
    text-align: center;
    font-size: 1rem;
  }
}
</style>
