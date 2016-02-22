let boundUpper, boundLower, boundBetween, boundBetween0And10, boundBetweenNegative5And0;
export { boundUpper, boundLower, boundBetween, boundBetweenCurried, boundBetween0And10, boundBetweenNegative5And0 };


// "How can I make data-imperative.js more functional?"





// ** First pass - reuse existing functions **


// "Hmm, bound upper is like Math.min, I could use that."
boundUpper = (max, n) => {
  return Math.min(max, n);
};
boundLower = (min, n) => {
  return Math.max(min, n);
};

// "Since the signatures match, I can just assign boundUpper to Math.min."
boundUpper = Math.min;
boundLower = Math.max;

// "And I can reuse my functions, building up complexity by combining (or "composing") smaller building blocks."
boundBetween = (min, max, n) => {
  let lowerBounded = boundLower(min, n);
  return boundUpper(max, lowerBounded);
};
boundBetween0And10 = (n) => {
  return boundBetween(0, 10, n);
};
boundBetweenNegative5And0 = (n) => {
  return boundBetween(-5, 0, n);
};







// ** Second pass - getting more succinct by using the power of currying and composing **


// "But that is a little messy and inflexible, maybe I can do better with some currying."
let boundUpperCurried = (max) => {
  return n => Math.min(max, n);
};
let boundLowerCurried = (min) => {
  return n => Math.max(min, n);
};
let boundBetweenCurried = (min, max) => {
  let lowerBoundAtMin = boundLowerCurried(min);
  let upperBoundAtMax = boundUpperCurried(max);
  return (n) => {
    return (lowerBoundAtMin(upperBoundAtMax(n)));
  };
};

// "Hold on, I can write that more succinctly with bind."
boundUpperCurried = max => Math.min.bind(null, max);
boundLowerCurried = min => Math.max.bind(null, min);

// "But my tests will break now, since they don't call these curried functions one argument at a time, so I need a more flexible currying method, or some wrapper functions..."
boundUpper = (max, n) => boundUpperCurried(max)(n);
boundLower = (min, n) => boundLowerCurried(min)(n);
boundBetween = (min, max, n) => boundBetweenCurried(min, max)(n);

// "And finally"
boundBetween0And10 = boundBetweenCurried(0, 10);
boundBetweenNegative5And0 = boundBetweenCurried(-5, 0);












// ** Third pass - ramda.js **



// "That's pretty good, but it's kind of clunky.  Maybe ramda can help make it more practical."

import R from 'ramda';

boundUpper = R.min;
boundLower = R.max;
boundBetweenCurried = (min, max) => R.compose(boundLower(min), boundUpper(max));
boundBetween0And10 = boundBetweenCurried(0, 10);
boundBetweenNegative5And0 = boundBetweenCurried(-5, 0);


// "Yes! Ramda FTW."
