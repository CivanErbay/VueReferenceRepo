<template>
  <h1>Hello World</h1>
 
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