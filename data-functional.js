// "hmm, bound upper is like Math.min, I could use that"

// export const boundUpper = (max, n) => {
//   return Math.min(max, n);
// }

// export const boundLower = (min, n) => {
//   return Math.max(min, n);
// }

// "hmm, since they signatures match, I can just assign boundUpper to Math.min"
export const boundUpper = Math.min;
export const boundLower = Math.max;

// "and I can reuse my funtions"
export const boundBetween = (min, max, n) => {
  let lowerBound = boundLower(min, n);
  return boundUpper(max, lowerBound);
}

export const boundBetween0And10 = (n) => {
  return boundBetween(0, 10, n);
}

// "but that looks a little messy, maybe I can do some currying"

