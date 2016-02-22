export const boundUpper = (max, n) => {
  return n > max ? max : n;
};

export const boundLower = (min, n) => {
  return n < min ? min : n;
};

export const boundBetween = (min, max, n) => {
  if(n > max) {
    return max;
  } else if(n < min) {
    return min;
  } else {
    return n;
  }
};

export const boundBetween0And10 = (n) => {
  if(n > 10) {
    return 10;
  } else if(n < 0) {
    return 0;
  } else {
    return n;
  }
};

export const boundBetweenNegative5And0 = (n) => {
  if(n > 0) {
    return 0;
  } else if(n < -5) {
    return -5;
  } else {
    return n;
  }
};


