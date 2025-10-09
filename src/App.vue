<script setup>
import { reactive, ref } from "vue";
import StartBtn from "./components/StartBtn.vue";
import Field from "./components/Field.vue";
import { useGenerationField } from "./components/ComputerField";

const arrOfFieldMy = reactive([
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", "x"],
  [" ", "x", " ", " ", " ", " ", "x", "x", "x", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", "x", "x", "x", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", "x", "x", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", "x", "x", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["x", " ", " ", " ", "x", " ", "x", "x", " ", "x"],
]);

const arrOfFieldComputer = useGenerationField(10);

function openCell(event) {
  if (event.target.textContent === "x") {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "var(--green-color)";
  } else {
    event.target.style.backgroundColor = "var(--red-color)";
  }
}

const start = ref(false);
function startGame() {
  start.value = !start.value;
}
</script>

<template>
  <StartBtn v-if="!start" @start-game="startGame"></StartBtn>
  <div v-else class="field">
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
