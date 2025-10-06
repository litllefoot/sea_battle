<script setup>
import Field from "./components/field.vue";
</script>

<template>
  <div class="field">
    <Field></Field>
    <Field></Field>
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
