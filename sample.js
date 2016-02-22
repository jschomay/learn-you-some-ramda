import R from 'ramda';
import chart from './chart';
import {boundBetweenCurried} from './data-functional';

const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const drawBarCluster = chart(ctx);

// Graph a clustered bar chart clipped along the y-axis between 0 and 10 for the given data sets:
const data1 = [10, 4, -5, 0, 8, 14];
const data2 = [8, -3, 1, 2, 22, 7];

const each = R.addIndex(R.forEach);
const drawChart = each(R.flip(drawBarCluster));
const clip = R.map(boundBetweenCurried(0, 10));

const combinedData = R.zip(
  clip(data1),
  clip(data2)
);
drawChart(combinedData);



// Bonus: make it work with a third data set:
const data3 = [1, 4, 22, -8, 3, 7];

const combineDataSets = R.compose(
  R.transpose,
  R.map(clip)
);

const combinedData3 = combineDataSets([data1, data2, data3]);
drawChart(combinedData3);

