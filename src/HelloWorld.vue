<template>
  <h1>Hello World</h1>
  <p>My Name is {{ myName }} and I live in {{ district }}</p>
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
          alert("I am avalable")
      }
  },
  mounted() {
      this.helloWorld()
  }
};
</script>

<style scoped>
</style>