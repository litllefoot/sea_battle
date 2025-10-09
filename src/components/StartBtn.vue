<template>
  <div class="flex-btn">
    <button>В АТАКУ</button>
  </div>
</template>

<style>
.flex-btn {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background-color: var(--blue-color);
  height: calc(var(--cell-width) * 2);
  aspect-ratio: 2.5;
  border-radius: 10px;
  font-size: 2.5rem;
  border-color: transparent;
}
button:hover {
  background-color: var(--hover-color);
  transition: var(--transition-time);
}
</style>
