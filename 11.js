function solution(n) {
  const digits = n.toString();
  const half = digits.length / 2;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < half; i++) {
    sum1 += Number(digits[i]);
  }

  for (let i = half; i < digits.length; i++) {
    sum2 += Number(digits[i]);
  }

  return sum1 === sum2;
}
//   For n = 1230, the output should be
//   solution(n) = true;
//   For n = 239017, the output should be
//   solution(n) = false.
console.log(solution(1230));
console.log(solution(239017));