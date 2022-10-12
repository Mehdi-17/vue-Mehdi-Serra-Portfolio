<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThePresentation from "./components/ThePresentation.vue";

//todo use axios to call github api
//voir dans "à regarder plus tard" du compte mehdi.serra57
</script>

<template>
  <div class="appContainer">
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
.appContainer {
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
  border: 4px solid var(--color-border-green);
}

nav {
  width: 100%;
  font-size: 1rem;
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
  .appContainer {
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
}
</style>
