const add = (a, b) => {
  if (a === b) {
    return a * 2;
  }
  return a + b;
};

const subtract = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a - b;
}

export {
  add,
  subtract,
};
