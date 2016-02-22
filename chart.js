import R from 'ramda';

export default (ctx) => {
  const line = (start, end) => {
    ctx.beginPath();
    ctx.moveTo.apply(ctx, start);
    ctx.lineTo.apply(ctx, end);
    ctx.closePath();
    ctx.stroke();
  };

  const bar = (index, height, offset = 0) => {
    const colors = ['red', 'blue', 'green'];
    ctx.save();
    ctx.fillStyle = colors[offset];
    ctx.fillRect (xScale(index) + offset * 10, 0, 10, yScale(-height));
    ctx.restore();
  };

  const barCluster = (index, heights) => {
    heights.forEach((height, clusterIndex) => bar(index, height, clusterIndex));
  };

  const xScale = (units) => {
    return 40 * units;
  };

  const yScale = (units) => {
    return 20 * units;
  };

  const axis = (x, y) => {
    ctx.save();
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'lightgray';

    R.range(0, x + 1).forEach((x) => {
      ctx.fillText(x+'', xScale(x), 20);
    });
    R.range(0, y + 1).forEach((y) => {
      ctx.fillText(y+'', -20, yScale(-y));
      line([0, yScale(-y)], [yScale(20), yScale(-y)]);
    });
    ctx.restore();

    let origin = [0, 0];
    line(origin, [xScale(x), 0]);
    line(origin, [0, yScale(-y)]);
  };



  ctx.translate(50, 250);
  axis(10, 10);

  return barCluster;
};
