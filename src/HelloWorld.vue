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
  mounted() {
    /* debugger */
    this.myName = "Peter Pan"
    console.log(this.myName);
  },
};
</script>

<style scoped>
</style>