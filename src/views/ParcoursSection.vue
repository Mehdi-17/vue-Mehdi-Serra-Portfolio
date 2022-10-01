<script setup>
import Parcours from "../components/Parcours.vue";

const props = defineProps({
  title: String,
  contents: {
    type: Array,
  },
});
</script>

<template>
  <div class="sectionContainer">
    <div class="section" v-for="content in contents">
      <Parcours :parcours="content" />
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
