# Learn you some ramda.js

Ramda.js is a small and practical library that makes it easy to use functional-style programing in javascript.

[Ramda homepage and docs](http://ramdajs.com/)

Why Ramda?  What's wrong with underscore/lodash?  Ramda makes 2 important FP concepts very natural and practical:

- currying
- composing

[Why Ramda quick overview and example](http://fr.umio.us/why-ramda/).

[Introduction to benefits and central tools of functional programing](http://jschomay.github.io/functional-programming-introduction/#/).

## Learning Ramda with a simple chart-building example

**Challenge:** graph a clustered bar chart clipped along the y-axis between 0 and 10 for the following collection of raw data:

```javascript
var data1 = [10, 4, -5, 0, 8, 14];
var data2 = [8, -3, 1, 2, 22, 7];
```

**Expected output:**

[todo]


### The process

Read through `data-functional.js` from top to bottom to see the process of manually going from imperative code (see `data-imperative.js`) to ramda code.

By seeing each manual leap forward, you can gain insight into thinking in a more functional style, and appreciate how ramda makes writing functional javascript more practical.

Once you have gone through that, try applying the same principles and the tools ramda's api provides to the rest of the challenge.
