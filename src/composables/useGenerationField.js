export function useGenerationField(size = 10) {
  // Создаём пустое поле 10×10
  const field = Array.from({ length: size }, () =>
    Array(size).fill({ value: "", isOpened: false })
  );

  // Определяем корабли по правилам
  const ships = [
    { count: 1, length: 4 },
    { count: 2, length: 3 },
    { count: 3, length: 2 },
    { count: 4, length: 1 },
  ];

  // Проверка, можно ли поставить корабль в координаты
  function canPlaceShip(x, y, length, horizontal) {
    for (let i = 0; i < length; i++) {
      const nx = x + (horizontal ? i : 0);
      const ny = y + (horizontal ? 0 : i);

      // Проверяем выход за границы
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) return false;

      // Проверяем соседние клетки (вокруг + по диагонали)
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const cx = nx + dx;
          const cy = ny + dy;
          if (
            cx >= 0 &&
            cy >= 0 &&
            cx < size &&
            cy < size &&
            field[cy][cx] === "x"
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }

  // Устанавливаем корабль
  function placeShip(x, y, length, horizontal) {
    for (let i = 0; i < length; i++) {
      const nx = x + (horizontal ? i : 0);
      const ny = y + (horizontal ? 0 : i);
      field[ny][nx] = { value: "x", isOpened: false };
    }
  }

  // Размещаем все корабли
  for (const { count, length } of ships) {
    for (let i = 0; i < count; i++) {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 1000) {
        attempts++;
        const horizontal = Math.random() < 0.5;
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        if (canPlaceShip(x, y, length, horizontal)) {
          placeShip(x, y, length, horizontal);
          placed = true;
        }
      }
      if (!placed) {
        console.warn(`Не удалось разместить корабль длиной ${length}`);
      }
    }
  }

  return field;
}
