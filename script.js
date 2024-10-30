let button = document.getElementById("seisure");
let body = document.getElementById("body");

function pressed() {
  body.style.backgroundColor =
    "rgb(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";
}
