//a. Power Function
function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  console.log(power(2, 3)); // Output: 8

  //b. Array Max and Min
  function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }
  
  console.log(findMaxAndMin([5, 3, 9, 1, 7])); // example

  //c. The sum of Digits
  function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  
  console.log(sumOfDigits(123)); // usage example

  
  //d. Greatest Common Divisor
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  console.log(gcd(12, 18)); // usage example
  
  //e. Random Number Generator
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(getRandomNumber(1, 10)); // example
  
