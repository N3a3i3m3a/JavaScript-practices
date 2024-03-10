// function that calculates the sum of the even numbers in an array
function sumOfEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  }
  