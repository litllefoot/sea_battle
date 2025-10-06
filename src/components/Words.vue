<template>
  <ul class="word-row">
    <li v-for="letter in word" class="word">{{ letter }}</li>
  </ul>
</template>

<script setup>
const word = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К"];
</script>

<style>
.word-row {
  display: flex;
  flex-direction: row;
}
.word {
  width: var(--cell-width);
  aspect-ratio: 1;
  box-sizing: border-box;
  line-height: var(--cell-width);
  text-align: center;
}
</style>
