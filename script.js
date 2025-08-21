const BASE_NUMBER = 10;

function calculate() {
  const name = document.getElementById("name").value;
  const number = parseInt(document.getElementById("number").value);
  const arithmeticOutput = document.getElementById("arithmetic-output");
  const ifOutput = document.getElementById("if-output");
  const loopOutput = document.getElementById("loop-output");
  const functionOutput = document.getElementById("function-output");

  if (isNaN(number)) {
    arithmeticOutput.innerHTML = "<p>Please enter a valid number.</p>";
    return;
  }

  // Arithmetic
  let quotient = number !== 0 ? (BASE_NUMBER / number).toFixed(2) : "Undefined (cannot divide by zero)";
  arithmeticOutput.innerHTML = `
    <h3>Arithmetic Results</h3>
    <p>Sum: ${BASE_NUMBER + number}</p>
    <p>Difference: ${BASE_NUMBER - number}</p>
    <p>Product: ${BASE_NUMBER * number}</p>
    <p>Quotient: ${quotient}</p>
  `;

  // If Statement
  let ifResult = "";
  if (number >= 0) {
    ifResult += "<p>The number is positive or zero (if statement).</p>";
  } else {
    ifResult += "<p>The number is negative (if statement).</p>";
  }

  // Ternary Operator
  let ternaryResult = number >= 0 ? "positive or zero" : "negative";
  ifResult += `<p>The number is ${ternaryResult} (ternary operator).</p>`;
  ifOutput.innerHTML = "<h3>If & Ternary</h3>" + ifResult;

  // For Loop
  let loopHTML = "<h3>Loops</h3><p>Counting from 1 to your number:</p><p>";
  for (let i = 1; i <= number; i++) {
    loopHTML += i + " ";
  }
  loopHTML += "</p><p>Counting down from 5:</p><p>";
  let count = 5;
  while (count > 0) {
    loopHTML += count + " ";
    count--;
  }
  loopHTML += "</p>";
  loopOutput.innerHTML = loopHTML;

  // Function Greeting
  greetUser(name);
}

function greetUser(name) {
  const functionOutput = document.getElementById("function-output");
  functionOutput.innerHTML = `<h3>Greeting</h3><p>Hello, ${name}!</p>`;
}

function convertCase() {
  const sentence = document.getElementById("sentence").value;
  const stringOutput = document.getElementById("string-output");

  stringOutput.innerHTML = `
    <h3>String Methods</h3>
    <p>Uppercase: ${sentence.toUpperCase()}</p>
    <p>Lowercase: ${sentence.toLowerCase()}</p>
  `;
}

function showFruits() {
  const fruit1 = document.getElementById("fruit1").value;
  const fruit2 = document.getElementById("fruit2").value;
  const fruit3 = document.getElementById("fruit3").value;

  const fruits = [fruit1, fruit2, fruit3];
  const fruitOutput = document.getElementById("fruit-output");

  fruitOutput.innerHTML = "<h3>Your Favorite Fruits</h3><ul>" + 
    fruits.map(f => `<li>${f}</li>`).join("") + "</ul>";
}
