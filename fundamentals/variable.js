const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: (line) => {
    // List of predefined options for autocomplete
    const options = ["10", "20", "30", "40", "50"];
    const hits = options.filter((option) => option.startsWith(line));
    return [hits.length ? hits : options, line];
  },
});

console.log("Welcome to a simple calculator");

// Prompt for the first number
rl.question("Enter the first number: ", (num1) => {
  const number1 = parseFloat(num1);

  // Prompt for the second number
  rl.question("Enter the second number: ", (num2) => {
    const number2 = parseFloat(num2);

    // Prompt for the operation
    rl.question("Select an operation (+, -, *, /): ", (operation) => {
      let result;
      if (operation === "+") {
        result = number1 + number2;
      } else if (operation === "-") {
        result = number1 - number2;
      } else if (operation === "*") {
        result = number1 * number2;
      } else if (operation === "/") {
        result = number1 / number2;
      } else {
        console.log("Invalid operation");
        rl.close();
        return;
      }

      console.log("Result is: ${result}");
      rl.close();
    });
  });
});
