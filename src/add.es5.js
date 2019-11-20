window.addEs5 = function (a, b) {
  if (a === b) {
    return a * 2;
  }
  return a + b;
}

window.subtractEs5 = function (a, b) {
  if (a === b) {
    return 0;
  }
  return a - b;
}

window.throwEs5Error = function () {
  throw new Error('testing...');
}
