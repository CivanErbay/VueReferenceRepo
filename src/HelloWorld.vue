<template>
  <h1>Hello World</h1>
  <p>My Name is {{ myName }} and I live in {{ district }}</p>
</template>


<script>
export default {
  data() {
    return {
      myName: "Civan Erbay",
      district: "Ehrenfeld",
    };
  },
  beforeCreate() {
    console.log(this.myName);
    console.log("This is beforeCreate");
  },
  created() {
      //Data Injections are Done but (Data is Avalaible) but our View(Template) is NOT available
    console.log("This is created");
    debugger;
    console.log(this.myName);
  },
  beforeMount() {
    console.log("This is beforeMount");
    debugger
    console.log(this.myName);
  },
  mounted() {
      //View(Template) gets iniated and displayed! 
      debugger
    this.myName = "Peter Pan";
    console.log(this.myName);
  },


  beforeUnmount() {
    //Works only when navigating away from this page e.g. with Router
    console.log("This is beforeMount");
  },
  unmounted() {
    //Works only when navigating away from this page e.g. with Router
    console.log("This is unmounted");
  },
};
</script>

<style scoped>
</style>