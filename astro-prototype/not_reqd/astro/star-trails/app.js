"use strict";

const {
  random,
  PI,
  max
} = Math;
const canvas = $('canvas')[0];
const ctx = canvas.getContext('2d');
ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
const size = max(window.innerWidth, window.innerHeight) * window.devicePixelRatio * 2;
const center = {
  x: size / 2 | 0,
  y: size / 2 | 0
};
canvas.width = size;
canvas.height = size;

function circle(x, y) {
  let amt = random() * .1 + .25;

  for (let i = 0; i < 400; i++) {
    let offset = random();
    let radius = random() * size * .15 + 20;
    ctx.strokeStyle = 'hsla(' + random() * 360 + ',10%,9' + (random() * 3 + 4) + '%,.95)';
    ctx.lineWidth = 0.5 + random();
    ctx.beginPath();
    ctx.arc(x, y, radius, offset * 2 * PI, amt * 2 * PI + offset * 2 * PI);
    ctx.stroke();
  }
}

circle(center.x, center.y);