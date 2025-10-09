<script setup>
import { reactive, ref } from "vue";
import StartBtn from "../components/StartBtn.vue"; // .. выйти на уровень выше возьми папку компоненты
import AllField from "../components/AllField.vue";
import { useGenerationField } from "../composables/useGenerationField";

const start = ref(false);
function startGame() {
  start.value = !start.value;
}

const arrOfFieldMy = reactive(useGenerationField(10));

const arrOfFieldComputer = reactive(useGenerationField(10));

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
  <StartBtn v-if="!start" @click="startGame" />
  <div v-else class="field">
    <AllField
      :arr-of-field="arrOfFieldMy"
      :is-human="true"
      @open-cell="openCell"
    />
    <AllField
      :arr-of-field="arrOfFieldComputer"
      :is-human="false"
      @open-cell="openCell"
    />
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
