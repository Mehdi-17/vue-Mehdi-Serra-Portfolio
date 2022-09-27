<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThePresentation from "./components/ThePresentation.vue";
</script>

<template>
  <header>
    <img
      alt="Mehdi Serra Photo"
      class="presentationPhoto"
      src="@/assets/mehdi.jpeg"
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
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.presentationPhoto {
  display: block;
  margin: 0 auto 2rem;
  height: auto;
  width: 100px;
  border-radius: 50%;
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
  margin-top: 0.5rem;
}

nav a:first-of-type, a:nth-child(4) {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .presentationPhoto {
    margin: 0 2rem 0 0;
    height: auto;
    width: 255px;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  nav {
    text-align: center;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
