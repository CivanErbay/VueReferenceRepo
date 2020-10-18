<template>
  <h1>Speed Typer</h1>

  <!--     Very Interesting Filter Method to get the Number of the Correct Values -> by filtering out an Array of only Correct Answers
 -->

  <!--  ADD TASk: ADD a Timer - after its done freeze the Input
 -->
  <p>
    Your Score: {{ keywords.filter((keyword) => keyword.correct).length }} /
    {{ keywords.length }}
  </p>
  <p>
    <!--     :class Condition is defined by the truthy Value of the object depending on the keyword. By default for example all every keyword has a class="pending"
 -->
    <span
      :class="{
        correct: keyword.correct,
        wrong: keyword.wrong,
        pending: keyword.pending,
      }"
      v-for="keyword in keywords"
      :key="keyword"
    >
      {{ keyword.text }} {{ " " }}
    </span>

    <input
      type="text"
      :value="inputValue"
      @keyup.space="processInput($event)"
    />
  </p>
</template>


<script>
/* VERY NICE APPROACH TO MAKE STRINGS TO OBJECTS WITH SEVERAL PROPERTYS */
const defaultKeywords = [
  "facebook",
  "google",
  "denkwerk",
  "sony",
  "vue",
  "react",
  "angular",
  "webpack",
  "netflix",
  "frisbee",
].map((keyword) => {
  return {
    text: keyword,
    correct: false,
    wrong: false,
    pending: true,
  };
});

export default {
  data() {
    return {
      inputValue: "",
      index: 0,
      keywords: defaultKeywords,
    };
  },
  methods: {
    processInput(event) {
      const value = event.target.value.trim();
      if (value == "") {
        return;
      }

      if (this.keywords[this.index].text === value) {
        this.keywords[this.index].correct = true;
        this.keywords[this.index].wrong = false;
        this.keywords[this.index].pending = false;
      } else {
        this.keywords[this.index].correct = false;
        this.keywords[this.index].wrong = true;
        this.keywords[this.index].pending = false;
      }

      this.inputValue = "";
      this.index++;
    },
  },
};
</script>

<style scoped>
.pending {
  font-weight: bold;
}
.correct {
  font-weight: bold;
  color: green;
}
.wrong {
  font-weight: bold;
  color: red;
}
</style>