function solution(inputArray) {
    let maxLength = 0;
    const longestStrings = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      const currentLength = inputArray[i].length;
  
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestStrings.length = 0;
      }
  
      if (currentLength === maxLength) {
        longestStrings.push(inputArray[i]);
      }
    }
  
    return longestStrings;
  }

//   For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));