const calculator = document.querySelector(".calculator");

const calculatingScreen = calculator.querySelector(".calculating-display");
const display = calculator.querySelector(".calculator__display");

const buttons = calculator.querySelector(".calculator__keys");

let firstValue = null;
let operation = null;
let secondValue = null;
let equalOn = false;

buttons.addEventListener("click", (e) => {
  const targetKeyValue = e.target.getAttribute("data-key");

  if (equalOn) {
    reset();
  }

  if (e.target.getAttribute("data-button-type") === "number") {
    setNumDisplay(targetKeyValue);
  } else if (e.target.getAttribute("data-button-type") === "operator") {
    if (operation && display.textContent !== "0") {
      console.log(operation + "is avilable");
      firstValue = setToCalculator(firstValue, display.textContent, operation);
      returnCalculatingDisplay();
      display.textContent = "0";
    }
    switch (targetKeyValue) {
      case "plus":
        console.log("plus");
        setOperator("plus");
        break;
      case "minus":
        console.log("minus");
        setOperator("minus");
        break;
      case "times":
        console.log("times");
        setOperator("times");
        break;
      case "divide":
        console.log("divide");
        setOperator("divide");
        break;
    }

    setNumSave();
    returnCalculatingDisplay();
  }

  // 초기화 및 결과출력
  if (targetKeyValue === "clear") {
    console.log(e.target);
    reset();
  } else if (targetKeyValue === "equal") {
    if (display.textContent === "0") return;
    equalOn = true;
    setNumSave();
    setResult(setToCalculator(firstValue, secondValue, operation));
    console.log(e.target);
  }
});

function setNumDisplay(numkey) {
  if (numkey === "." && display.textContent.includes(".")) return;
  display.textContent =
    display.textContent === "0" && numkey !== "."
      ? numkey
      : display.textContent + numkey;
}

function setNumSave() {
  if (!firstValue) {
    firstValue = display.textContent;
    display.textContent = "0";
  } else {
    secondValue = display.textContent;
    calculatingScreen.textContent += secondValue;
  }
}

function setOperator(oper) {
  operation = oper;
}

function returnCalculatingDisplay() {
  let displayOperation = null;
  switch (operation) {
    case "plus":
      displayOperation = " + ";
      break;
    case "minus":
      displayOperation = " - ";
      break;
    case "times":
      displayOperation = " × ";
      break;
    case "divide":
      displayOperation = " ÷ ";
      break;
  }
  calculatingScreen.textContent = firstValue + displayOperation;
}

function setToCalculator(a, b, indicator) {
  A = Number(a);
  B = Number(b);
  switch (indicator) {
    case "plus":
      return A + B;
    case "minus":
      return A - B;
    case "times":
      return A * B;
    case "divide":
      return A / B;
  }
}

function setResult(result) {
  display.textContent = result;
}

function reset() {
  display.textContent = "0";
  calculatingScreen.textContent = "";
  firstValue = "";
  operation = "";
  secondValue = "";
  equalOn = false;
}
