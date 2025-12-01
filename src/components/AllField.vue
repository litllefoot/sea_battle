<template>
  <div class="word-numbers-and-field">
    <WordsField />
    <div class="numbers-and-field">
      <NumbersField />
      <ul>
        <li
          v-for="(rowField, rowFieldIndex) in arrOfField"
          :key="rowFieldIndex"
        >
          <div class="row-field">
            <div
              v-for="(cell, cellIndex) in rowField"
              :key="`${rowFieldIndex}:${cellIndex}`"
              class="cell-field"
              :class="{
                'is-human': isHuman,
                'default-color': !cell.isOpened,
                'red-color': cell.isOpened && !cell.value,
                'green-color': cell.isOpened && cell.value,
              }"
              @click="$emit('open-cell', { x: rowFieldIndex, y: cellIndex })"
            >
              {{ cell.value }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import NumbersField from "./NumbersField.vue";
import WordsField from "./WordsField.vue";

defineProps({
  arrOfField: {
    type: Array,
    required: true,
    validator: (value) => value.length === 10,
  },
  isHuman: { type: Boolean, require: true },
}); //обязательный пропс у которого тип массив, и проверка на валидность длина 10

defineEmits(["open-cell"]);
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
  box-sizing: border-box;
  text-align: center;
  line-height: var(--cell-width);
  font-size: 2rem;
  user-select: none;
  cursor: pointer;
}

.default-color {
  background-color: var(--blue-color);
  color: transparent;
}

.default-color:hover {
  background-color: var(--hover-color);
  transition: var(--transition-time);
}
.is-human {
  color: var(--black-color);
}
.red-color {
  background-color: var(--red-color);
  color: var(--black-color);
}
.green-color {
  background-color: var(--green-color);
  color: var(--black-color);
}
</style>
