<script setup>
import { reactive } from "vue";
import Field from "./components/Field.vue";
const arrOfFieldMy = reactive([
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", "x"],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", "x"],
]);

const arrOfFieldComputer = reactive([
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", "x"],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", "x"],
]);

function openCell(event) {
  if (event.target.textContent === "x") {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "var(--green-color)";
  } else {
    event.target.style.backgroundColor = "var(--red-color)";
  }
}
</script>

<template>
  <div class="field">
    <Field :arrOfField="arrOfFieldMy" @open-cell="openCell"></Field>
    <Field :arrOfField="arrOfFieldComputer" @open-cell="openCell"></Field>
  </div>
</template>

<style scoped>
.field {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
