<template>
  <h1>Hello World</h1>
  <p>My Name is {{ myName }} and I live in {{ district }}</p>
  <!--   Whenever you pass something into Vue-Expressiongs {{}}, consider the Content of the ARGUMENT of a Function
 -->
  <p>{{ this.something([1, 3, 5, 6]) }}</p>
  <p>{{ 1 === 1 && "hello" }}</p>
  <p>{{ 1 === 2 ? 'Yesss' : 'Nooo'}}</p>
  <p> Either I am Cheers or Serefe... See --> <b>{{Math.random() > 0.5 ? "Cheers" : "Serefe"}}</b></p>
</template>


<script>
export default {
  //Data is a functiom
  data() {
    return {
      myName: "Civan Erbay",
      district: "Ehrenfeld",
    };
  },
  //Methods is just a simple plain Object, because we define the methods inside of this objects - Those will be functions
  methods: {
    helloWorld() {
      alert("I am avalable");
    },
    something(a) {
      let result = 0;
      for (let i = 0; i < a.length; i++) {
        result = result + a[i];
      }
      return result;
    },
  },
  mounted() {
      console.log(this.something([1,3,4,5,6]))
  },
};
</script>

<style scoped>
</style>