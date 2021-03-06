import R from 'ramda';
import chart from './chart';
import {boundBetweenCurried} from './data-functional';

const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const drawBarCluster = chart(ctx);

// Graph a clustered bar chart clipped along the y-axis between 0 and 10 for the given data sets:
const data1 = [10, 4, -5, 0, 8, 14];
const data2 = [8, -3, 1, 2, 22, 7];

// Your code here:



// Bonus: make it work with a third data set:
const data3 = [1, 4, 22, -8, 3, 7];
