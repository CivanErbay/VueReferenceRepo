<template>
  <h1>Hello World</h1>
  <p>My Name is {{ myName }} and I live in {{ district }}</p>
  <div class="secondary">
    <input :value="newHero" />
    <input :[attribute]="exampleHero" />
  </div>

  <!-- v-model.trim removes whitespace!! -->
  <!--   <input v-model.lazy="newHero" type="text">  v-model.lazy is only going to update newHero as soon as you loose focus of the input field!! 
  <input v-model.number="newHero" type="text">  v-model.number if you enter a number like "2" its an Integer Value - if you type a string its still a string! -->
  <div style="margin-top: 2em" align="center">
    <input v-model.trim="newHero" type="text" />
    <div>{{ heroList.length }}</div>
    <div>{{ isDisabled }}</div>
    <button @click="addHero" :disabled="isDisabled">Add Hero</button>

    <div>
      <h4 v-for="hero in heroList" :key="hero">{{ hero }}</h4>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      attribute: "value", //DYNAMIC ATTRIBUTE
      isDisabled: false,
      exampleHero: "A-train",
      newHero: "",
      heroList: [],
      myName: "Civan Erbay",
      district: "Ehrenfeld",
    };
  },
  methods: {
    addHero() {
      this.heroList.push(this.newHero);
    },
  },
  watch: {
    "heroList.length"() {       //Perfect Example to TRACK the length 
      console.log(this.heroList.length)
      if (this.heroList.length > 5) {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped>
.secondary {
  opacity: 0.2;
}
</style>
