<template>
  <h1>{{ inputValue }}</h1>

  <h1>{{ keywords.join(" | ") }}</h1>
  <!--   function($event) Syntax - very helpful to define custom functions with user Input, other than simplified v-model for data binding
 -->

  <!--   THIS is CHANGING THE VALUES WHILE TYPING
 -->
  <input :value="inputValue" @input="processInput($event)" />

  <!--  USE of Space to submit Value -->
  <input :value="inputValue" @keyup.space="processInput($event)" />
      <!-- Use of alt + enter to submit Value -->
    <input :value="inputValue" @keyup.alt.enter="processInput($event)" />
</template>


<script>
export default {
  data() {
    return {
      inputValue: "",
      index: 0,
      keywords: [],
    };
  },
  methods: {
    processInput(event) {
      const value = event.target.value;
      this.keywords[this.index] = value; //same like push, because mutating the array at specific positions
      (this.inputValue = ""), this.index++;
    },
  },
};
</script>

<style scoped>
</style>