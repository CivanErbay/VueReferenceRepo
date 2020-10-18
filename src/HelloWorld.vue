<template>
  <div class="one" align="center">
    <h2>One Way Data Binding</h2>
    <!--       v-on is kind of an Event-Listener
        We can also use Expressions like  {{ XY }} to display data
        But to bind data to specific fields like Inputs you need to use v-bind -->
    <input value="randomNumber" />
    <!--    Additional Info : The Following is "only" One-Way-Data-binding -->
    <input v-bind:value="randomNumber" />
    <input :value="randomNumber" />
    <!-- same -->
    <button @click="oneWayBinding">BindMeOneWayOnly</button>
    <p>
      As you can see - I can bind the value via Button-Method, but I can not
      bind it from the input the other way round. v-bind can "only" display
      values
    </p>
  </div>
  <div class="one" align="center">
    <h2>Two Way Data Binding</h2>
    <div class="flexy">
      <h3>v-on:Change --> Adds Value onEnter</h3>
      <input v-on:change="twoWayBinding($event)" />
    </div>
    <div class="flexy">
      <h3>@Input Syntax --> Adds Value onChange directly</h3>
      <input @input="twoWayBinding($event)" />
    </div>
      <div class="flexy">
      <h3>v-model --> Easiest approach for 2-Way Data Binding IMO</h3>
      <input v-model="randomNumber" />
    </div>
    <h2>Result {{ randomNumber }}</h2>
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
    oneWayBinding() {
      this.randomNumber = 100;
    },
    twoWayBinding(e) {
      this.randomNumber = e.target.value;
    },
  },
};
</script>

<style scoped>
.one {
  padding: 2em;
}
.flexy {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>