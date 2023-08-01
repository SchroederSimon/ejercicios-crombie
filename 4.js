function solution(inputArray) {
    let largestProduct = -Infinity;
    
    for (let i = 0; i < inputArray.length -1; i++){
        const product = inputArray[i] * inputArray[i + 1];
        if (product > largestProduct){
            largestProduct = product;
        }
    }
    return largestProduct;
}

//For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//solution(inputArray) = 21.

console.log(solution([3, 6, -2, -5, 7, 3]));

/*
const maxNumber = Math.pow(10, 1000); // Max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // Expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// Expected output: 0
*/