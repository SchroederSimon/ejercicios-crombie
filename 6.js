function solution(statues) {
  const originalStatue = [];

  for (let i = 0; i < statues.length; i++) {
    const statue = statues[i];
    if (!originalStatue.includes(statue)) {
      originalStatue.push(statue);
    }
  }

  originalStatue.sort((a, b) => a - b);

  let additionalStatues = 0;

  for (let i = 1; i < originalStatue.length; i++) {
    const difference = originalStatue[i] - originalStatue[i - 1];
    if (difference > 1) {
      additionalStatues += difference - 1;
    }
  }

  return additionalStatues;
}
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

console.log(solution([6, 2, 3, 8]));