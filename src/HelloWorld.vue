<template>
  <h1 align="center">Hello World</h1>
  <!--   Because of v-once the h3 is only updated One Time in the Moment it gets rendered
 -->
  <h3 align="center" v-once>{{ myName }}</h3>
  <h3 align="center">{{ myName }}</h3>

  <!--     v-html usecase could be when you receive Raw HTML from backend - you can display it the right away
 -->
  <p align="center" v-html="rawHTML"></p>
  <p align="center">{{ rawHTML }}</p>

  <ul align="center">
    <li v-for="(lang, index) in programmingLangs" :key="lang.name">
      {{ index + 1 }} - {{ lang.name }}
    </li>
  </ul>

  <!-- WORKS ALSO FOR ITERATION THROUGH OBJECTS NOT ONLY ARRAYS -->
  <ul align="center">
    <li v-for="object in outerObject" v-bind:key="object">
      {{ object }}
    </li>
  </ul>
</template>


<script>
export default {
  //Data is a functiom
  data() {
    return {
      myName: "Civan Erbay",
      rawHTML: "<b>Ich bin hier unten</b>",
      programmingLangs: [
        { name: "JavaScript" },
        { name: "C" },
        { name: "C++" },
        { name: "Java" },
      ],
      outerObject: {
        innerObject1: "Object1",
        innerObject2: "Object2",
      },
    };
  },
  //Methods is just a simple plain Object, because we define the methods inside of this objects - Those will be functions
  methods: {},
  mounted() {
    this.myName = "Random";
  },
};
</script>

<style scoped>
</style>