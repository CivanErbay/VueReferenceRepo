<template>
  <div align="center">
    <h1>Hello World</h1>
    <button @click="a++">Add to Variable "a"</button>
    <button @click="b++">Add to variable "b"</button>

    <h3>{{ a }}</h3>
    <h3>{{ b }}</h3>
    <h2>Age + A: {{ addToA() }}</h2>
    <h2>Age + B: {{ addToB() }}</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      age: 20,
      a: 0,
      b: 0,
    };
  },
  //Example with Methods - Problem: Both Update as soon as only ONE changes - not very performant
  methods: {
    addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    },
  },
};
</script>

<style scoped>
.secondary {
  opacity: 0.2;
}
</style>
