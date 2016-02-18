const boundUpper = (max, n) => {
  return n <= max ? n : max;
}

const boundLower = (min, n) => {
  return n >= min ? n : min;
}

const boundBetween = (min, max, n) => {
  return n >= min ? n : min;
}

module.exports = {
  boundUpper,
  boundLower,
  boundBetween
}
