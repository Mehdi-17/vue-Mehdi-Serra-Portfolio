<script setup>
import { ref } from "vue";
import Parcours from "../components/Parcours.vue";
import { GITHUB_REPOS_URL } from "../constants/constants";

const props = defineProps({
  title: String,
  contents: {
    type: Array,
  },
});

const contentFromGitHubApi = ref(null);
const errorApiResponse = ref(null);

fetch(GITHUB_REPOS_URL)
  .then((res) => res.json())
  .then((json) => (contentFromGitHubApi.value = json))
  .catch((err) => (errorApiResponse.value = err));
</script>

<template>
  <div class="sectionContainer">
    <div v-if="errorApiResponse !== null && contents === null">
      Un problème a été rencontré lors de l'appel à l'API GitHub :
      {{ errorApiResponse.message }}
    </div>
    <div v-else-if="contentFromGitHubApi === null && contents === null">Chargement...</div>
    <div v-if="contents !== null || contentFromGitHubApi !== null">
      <div class="section" v-for="content in contents">
        <Parcours :parcours="content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sectionContainer {
  display: flex;
  flex-direction: column;
}
.section {
  padding: 0 2rem 1.5rem;
}
.section::after {
  content: "";
  display: block;
  width: 70%;
  margin: auto;
  bottom: -20px;
  border-bottom: 3px solid var(--color-border);
}
@media (min-width: 1024px) {
}
</style>
