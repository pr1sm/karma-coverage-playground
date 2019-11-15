function add(a: number, b: number): number {
  if (a === b) {
    return a * 2;
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (a === b) {
    return 0;
  }
  return a - b;
}

export {
  add,
  subtract,
};
