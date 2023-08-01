function solution(inputString) {
  const stringReversed = inputString.split("").reverse().join("");
  if (stringReversed === inputString) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("crombie"));
console.log(solution("a a"));
console.log(solution("aabaa"));
