<script setup>
import { ref } from "vue";
import Parcours from "../components/Parcours.vue";
import { GITHUB_REPOS_URL } from "../constants/constants";
import { useFetch } from "../services/fetch";
import SelectComponent from "../components/SelectComponent.vue";

const props = defineProps({
  title: String,
  contents: {
    type: Array,
  },
  isSelectedDisplayed: {
    type: Boolean,
    default: false,
  },
});

const responseApi = ref(null);
const errorApi = ref(null);

useFetch(GITHUB_REPOS_URL).then((datas, error) => {
  if (datas.message) {
    responseApi.value = datas;
    return;
  }
  if (error != null) {
    errorApi = error.message;
    return;
  }

  if (datas.length > 0) {
    responseApi.value = [];
    datas.sort((a, b) => b.id - a.id);
    datas.forEach((data) => {
      responseApi.value.push({
        id: data.id,
        title: data.name,
        description: data.description,
        skills: data.topics,
        url: data.html_url,
      });
    });

    return responseApi.value;
  }
});
</script>

<template>
  <div class="sectionContainer">
    <div
      v-if="
        (errorApi || (responseApi && responseApi.message)) &&
        contents &&
        contents.length === 0
      "
    >
      Un problème a été rencontré lors de l'appel à l'API GitHub :
      {{ errorApi ? errorApi.message : responseApi.message }}
    </div>

    <div
      v-else-if="
        contents &&
        contents.length === 0 &&
        (!responseApi || responseApi.length === 0)
      "
    >
      Chargement...
    </div>

    <div
      v-if="isSelectedDisplayed && responseApi && responseApi.length > 0"
      style="display: flex; justify-content: center; margin:0.8rem 0 ;"
    >
      <SelectComponent />
    </div>

    <div v-if="contents && contents.length > 0">
      <div class="section" v-for="content in contents">
        <Parcours :parcours="content" />
      </div>
    </div>
    <div
      v-else-if="
        contents &&
        contents.length === 0 &&
        responseApi &&
        responseApi.length > 0
      "
    >
      <div class="section" v-for="content in responseApi" :key="responseApi.id">
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
