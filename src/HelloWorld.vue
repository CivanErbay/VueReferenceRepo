<template>
  <div align="center">
    <p>Random Number: {{ randomNumber }}</p>
    <button v-on:click="aMethod">Click Me</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      randomNumber: Math.random(),
    };
  },
  //Methods is just a simple plain Object, because we define the methods inside of this objects - Those will be functions
  methods: {
      aMethod() {
          this.randomNumber = Math.random()
      }
  },
};
</script>

<style scoped>
</style>