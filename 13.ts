function solution13(inputString: string): string {
  let outputString = "";
  let tempString = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char === "(") {
      tempString = outputString;
      outputString = "";
    } else if (char === ")") {
      outputString = tempString + reverseString(outputString);
      tempString = "";
    } else {
      outputString += char;
    }
  }

  return outputString;
}

function reverseString(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
