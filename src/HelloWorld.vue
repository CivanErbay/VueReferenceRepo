<template>
  <h1 align="center">Hello World</h1>
  <!--   Because of v-once the h3 is only updated One Time in the Moment it gets rendered
 -->
  <h3 align="center" v-once>{{ myName }}</h3>
  <h3 align="center">{{ myName }}</h3>

  <!--     v-html usecase could be when you receive Raw HTML from backend - you can display it the right away
 -->
  <p align="center" v-html="rawHTML"></p>
  <p align="center">{{rawHTML}}</p>
</template>


<script>
export default {
  //Data is a functiom
  data() {
    return {
      rawHTML: "<b>Ich bin hier unten</b>",
      myName: "Civan Erbay",
      district: "Ehrenfeld",
    };
  },
  //Methods is just a simple plain Object, because we define the methods inside of this objects - Those will be functions
  methods: {
    something(a) {
      let result = 0;
      for (let i = 0; i < a.length; i++) {
        result = result + a[i];
      }
      return result;
    },
  },
  mounted() {
    console.log(this.something([1, 3, 4, 5, 6]));
    this.myName = "Random";
  },
};
</script>

<style scoped>
</style>