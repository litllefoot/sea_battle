<script setup>
import { computed, reactive, ref } from "vue";
import StartBtn from "../components/StartBtn.vue"; // .. выйти на уровень выше возьми папку компоненты
import AllField from "../components/AllField.vue";
import { useGenerationField } from "../composables/useGenerationField";

const start = ref(false);
function startGame() {
  start.value = !start.value;
}

const arrOfFieldMy = reactive(useGenerationField(10));

const arrOfFieldComputer = reactive(useGenerationField(10));

function openCell(coords, arrOfField) {
  arrOfField[coords.x][coords.y] = {
    ...arrOfField[coords.x][coords.y],
    isOpened: true,
  };
}

const whoIsNotActive = reactive({ human: false, computer: true });

function passStep(value) {
  if (!value) {
    whoIsNotActive.human = !whoIsNotActive.human;
    whoIsNotActive.computer = !whoIsNotActive.computer;
  }
}
</script>

<template>
  <StartBtn v-if="!start" @click="startGame" />
  <div v-else class="field">
    <AllField
      :arr-of-field="arrOfFieldMy"
      :is-human="true"
      :is-not-active="whoIsNotActive.human"
      @open-cell="(coords) => openCell(coords, arrOfFieldMy)"
      @pass-step="passStep"
    />
    <!-- заворачиваем в стрелку так как аргумент дочерний, который сначала нужно получить и потом доп аргумент из текущего файла -->
    <AllField
      :arr-of-field="arrOfFieldComputer"
      :is-human="false"
      :is-not-active="whoIsNotActive.computer"
      @open-cell="(coords) => openCell(coords, arrOfFieldComputer)"
      @pass-step="passStep"
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
