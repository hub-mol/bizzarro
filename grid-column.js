function getCurrentColumnCount() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 480) return 2;
  if (viewportWidth < 991) return 3;
  return 5;
}

export function gridBorders() {
  const containers = document.querySelectorAll(".grid-global");
  containers.forEach((container) => {
    const cells = Array.from(container.querySelectorAll(".grid-cell, .grid-cell-decor"));
    cells.forEach((cell) => {
      cell.classList.remove("no-right-border");
    });
    const visibleCells = cells.filter(
      (cell) => window.getComputedStyle(cell).display !== "none"
    );
    let columns = getCurrentColumnCount();
    visibleCells.forEach((cell, index) => {
      const visualIndex = index + 1;
      if (visualIndex % columns === 0) {
        cell.classList.add("no-right-border");
      }
    });
  });
}
