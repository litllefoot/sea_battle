<template>
  <div class="word-numbers-and-field">
    <words></words>
    <div class="numbers-and-field">
      <numbers></numbers>
      <ul>
        <li v-for="rowField in arrOfField">
          <div class="row-field">
            <div v-for="cell in rowField" class="cell-field">{{ cell }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import numbers from "./numbers.vue";
import Words from "./Words.vue";

const arrOfField = reactive([
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
]);
</script>

<style>
.word-numbers-and-field {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.numbers-and-field {
  display: flex;
  align-items: start;
}
.row-field {
  width: 30vw;
  aspect-ratio: 10;
  display: flex;
  box-sizing: border-box;
}
.cell-field {
  width: var(--cell-width);
  aspect-ratio: 1;
  border: 2px solid black;
  background-color: var(--blue-color);
  box-sizing: border-box;
}
</style>
