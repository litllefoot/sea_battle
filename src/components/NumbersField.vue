<template>
  <ul class="number-column">
    <li v-for="n in 10" class="number">{{ n }}</li>
  </ul>
</template>
<style>
.number-column {
  display: flex;
  flex-direction: column;
}
.number {
  width: calc(var(--cell-width) / 2);
  aspect-ratio: 1;
  box-sizing: border-box;
  line-height: var(--cell-width);
  user-select: none;
}
</style>
