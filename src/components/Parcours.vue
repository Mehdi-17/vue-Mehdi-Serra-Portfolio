<script setup>
const props = defineProps({
  parcours: {
    required: true,
  },
});
</script>

<template>
  <div class="parcoursHeader">
    <div class="headerFirstInfo">
      <h2>{{ parcours.title }}</h2>
      <p>{{ parcours.startDate }} - {{ parcours.endDate }}</p>
    </div>
    <h3>{{ parcours.company }}</h3>
  </div>
  <div class="parcoursContent">
    <div class="parcoursDescription" v-html="parcours.description"></div>
    <div class="parcoursSkills" v-if="parcours.skills">
      <p style="text-decoration: underline">Compétences :</p>
      <p v-for="skill in parcours.skills" class="skill">{{ skill }}</p>
    </div>
  </div>
</template>

<style scoped>
.parcoursHeader {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.headerFirstInfo {
  display: flex;
  flex-direction: column;
}
.dateSection {
  display: flex;
  align-items: center;
}

.parcoursDescription {
  text-align: justify;
  margin-bottom: 0.5rem;
}
.parcoursSkills {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.skill {
  display: flex;
}
.skill::before {
  content: "•";
  display: block;
}

@media (min-width: 1024px) {
  .headerFirstInfo {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
}
</style>
