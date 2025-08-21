const BASE_NUMBER = 10;

// Greeting function
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Analyze name and number
function analyze() {
  const name = document.getElementById("name").value.trim();
  const num = parseFloat(document.getElementById("number").value);
  const output = document.getElementById("output");

  if (!name || isNaN(num)) {
    output.textContent = "Please enter a valid name and number.";
    return;
  }

  // Calculations
  const sum = BASE_NUMBER + num;
  const diff = BASE_NUMBER - num;
  const product = BASE_NUMBER * num;
  const quotient = (num !== 0) ? (BASE_NUMBER / num).toFixed(2) : "Undefined (division by zero)";

  // Conditional checks
  let posNeg = "";
  if (num >= 0) {
    posNeg = "positive";
  } else {
    posNeg = "negative";
  }

  const posNegTernary = num >= 0 ? "positive" : "negative";

  output.innerHTML = `
    ${greetUser(name)}<br>
    Your number is <strong>${num}</strong>.<br>
    Sum (BASE + num): ${sum}<br>
    Difference: ${diff}<br>
    Product: ${product}<br>
    Quotient: ${quotient}<br>
    (If-statement) The number is ${posNeg}.<br>
    (Ternary) The number is ${posNegTernary}.
  `;
}

// Convert sentence to uppercase and lowercase
function convert() {
  const sentence = document.getElementById("sentence").value.trim();
  const output = document.getElementById("string-output");

  if (!sentence) {
    output.textContent = "Please enter a sentence.";
    return;
  }

  output.innerHTML = `
    <strong>Uppercase:</strong> ${sentence.toUpperCase()}<br>
    <strong>Lowercase:</strong> ${sentence.toLowerCase()}
  `;
}

// Display favorite fruits
function showFruits() {
  const fruits = [
    document.getElementById("fruit1").value.trim(),
    document.getElementById("fruit2").value.trim(),
    document.getElementById("fruit3").value.trim()
  ].filter(fruit => fruit !== "");

  const output = document.getElementById("fruit-output");

  if (fruits.length === 0) {
    output.textContent = "Please enter at least one fruit.";
    return;
  }

  output.innerHTML = `Your favorite fruits:<ul>${fruits.map(f => `<li>${f}</li>`).join('')}</ul>`;
}

// Show loop examples
function showLoops() {
  const loopOutput = document.getElementById("loop-output");

  // Get number input for for-loop
  const number = parseInt(document.getElementById("number").value);
  let forLoopResult = "";
  if (!isNaN(number) && number > 0) {
    forLoopResult = "<strong>For Loop (1 to number):</strong><br>";
    for (let i = 1; i <= number; i++) {
      forLoopResult += i + " ";
    }
  } else {
    forLoopResult = "<strong>Invalid number for for loop.</strong><br>";
  }

  // While loop countdown from 5
  let count = 5;
  let whileLoopResult = "<br><strong>While Loop (countdown from 5):</strong><br>";
  while (count >= 1) {
    whileLoopResult += count + " ";
    count--;
  }

  loopOutput.innerHTML = forLoopResult + whileLoopResult;
}

