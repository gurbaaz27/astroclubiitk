var htm = "";
var rand = Math.floor(Math.random() * 100);
var arg = 0;
function create() {
  for (var iter = 0; iter < rand; iter++) {
    htm += "<div class='star' id='s" + iter + "'></div>";
  }
  $(".galaxy").html(htm);
}
function pos() {
  for (iter = 0; iter < rand; iter++) {
    $("#s" + iter).css({
      top: Math.sin(rand * iter) * (iter / 2) + 50 + "%",
      left: Math.cos(rand * iter) * (iter / 2) + 50 + "%",
      background: "#" + (559555 + iter * 100)
    });
  }
}
var s, c;
function move(arg) {
  for (iter = 0; iter < rand; iter++) {
    $("#s" + iter).css({
      top: Math.sin(rand * iter + arg * 0.11) * (iter / 2) + 50 + "%",
      left: Math.cos(rand * iter + arg * 0.1) * (iter / 2) + 50 + "%"
    });
  }
}
function init() {
  arg++;
  move(arg);
}
create();
pos();
var t = setInterval(init, 10);
