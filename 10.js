function solution(s1, s2) {
    let count = 0;
    
    for (let i = 0; i < s1.length; i++) {
      let foundIndex = s2.indexOf(s1[i]);
      
      if (foundIndex >= 0) {
        count++;
        s2 = s2.replace(s1[i], '');
      }
    }
    
    return count;
  }

//   For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.
console.log(solution("aabcc", "adcaa"));