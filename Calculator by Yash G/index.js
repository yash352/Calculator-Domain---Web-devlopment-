let value = 0;
let operation = 0;

const keys = document.querySelectorAll(".key");
const display = document.querySelector(".screen-text");

function calcularTotal(v) {
  let res = 0;
  switch (operation) {
    case 0:
      res = v;
      break;
    case 1:
      res = value / v;
      break;
    case 2:
      res = value * v;
      break;
    case 3:
      res = value - v;
      break;
    case 4:
      res = value + v;
      break;
  }
  value = 0;
  operation = 0;
  return res;
}

keys.forEach(function(key) {
  key.addEventListener("click", function() {
    switch (key.innerText) {
      case "C":
        display.innerText = "0";
        value = 0;
        operation = 0;
        break;
      case "←":
        display.innerText = display.innerText.substr(
          0,
          display.innerText.length - 1
        );
        if (display.innerText === "") display.innerText = "0";
        break;
      case "÷":
        display.innerText = calcularTotal(parseInt(display.innerText));
        value = parseInt(display.innerText);
        display.innerText = "0";
        operation = 1;
        break;
      case "X":
        display.innerText = calcularTotal(parseInt(display.innerText));
        value = parseInt(display.innerText);
        display.innerText = "0";
        operation = 2;
        break;
      case "-":
        display.innerText = calcularTotal(parseInt(display.innerText));
        value = parseInt(display.innerText);
        display.innerText = "0";
        operation = 3;
        break;
      case "+":
        display.innerText = calcularTotal(parseInt(display.innerText));
        value = parseInt(display.innerText);
        display.innerText = "0";
        operation = 4;
        break;
      case "=":
        display.innerText = calcularTotal(parseInt(display.innerText));
        break;
      default:
        if (display.innerText === "0") display.innerText = "";
        display.innerText += key.innerText;
        break;
    }
  });
});
