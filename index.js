var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var alpha1 = document.querySelector("#alpha1");
var color2 = document.querySelector("#color2");
var alpha2 = document.querySelector("#alpha2");
var body = document.querySelector("#gradient");
var btnRandomColors = document.querySelector("#btnRandomColors");

// console.log(body);
// console.log(css);
// console.log(color1.value);
// console.log(color2.value);

function onPageLoad() {
    color1.value = "#ff0000";
    color2.value = "#ffff00";
    setGradient();
}

function setGradient() {
    color1Rgba = getRgba(hexToRgb(color1.value), alpha1);
    color2Rgba = getRgba(hexToRgb(color2.value), alpha2);
    body.style.background =
        "linear-gradient(to right, " + color1Rgba + ", " + color2Rgba + ")";
    css.textContent =
        "linear-gradient(to right, " + color1Rgba + ", " + color2Rgba + ");";
}

function setRandomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor1Alpha(alpha) {
    updateAlpha(color1, alpha);
}
function updateColor2Alpha(alpha) {
    updateAlpha(color2, alpha);
}

function updateAlpha(element, alpha) {
    element.style.opacity = alpha;
    setGradient();
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

function getRgba(rgbObj, alpha) {
    var colorRgba =
        "rgba(" +
        rgbObj.r +
        ", " +
        +rgbObj.g +
        ", " +
        +rgbObj.b +
        ", " +
        alpha.value +
        ")";
    return colorRgba;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btnRandomColors.addEventListener("click", setRandomColors);

onPageLoad();
