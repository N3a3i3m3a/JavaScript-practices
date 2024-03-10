// a. Array Sum
function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  
  console.log(arraySum([1, 2, 3, 4, 5])); // example of use

   //Even Numbers
   function printEvenNumbers(arr) {
    for (let num of arr) {
      if (num % 2 === 0) {
        console.log(num);
      }
    }
  }
  
  printEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // example

  //c. Array Reverse
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5])); //usage example

  //d. Array Filter
  function filterArray(arr) {
    return arr.filter(num => num >= 10);
  }
  
  console.log(filterArray([5, 10, 15, 20, 25])); // usage example

  //e. Array Average
  function arrayAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
  }
  
  console.log(arrayAverage([1, 2, 3, 4, 5])); // usage example

  //f. Array Search
  function searchArray(arr, target) {
    return arr.indexOf(target);
  }
  
  console.log(searchArray([1, 2, 3, 4, 5], 3)); //usage example

  //g. Duplicate Elements
  function findDuplicates(arr) {
    const duplicates = {};
    arr.forEach(item => {
      if (duplicates[item]) {
        duplicates[item]++;
      } else {
        duplicates[item] = 1;
      }
    });
    for (let key in duplicates) {
      if (duplicates[key] > 1) {
        console.log(`${key} is duplicated.`);
      }
    }
  }
  
  findDuplicates([1, 2, 3, 4, 2, 5, 6, 5]); //example

  //h. Array Sorting
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  console.log(sortArray([5, 2, 7, 1, 9])); // example
  




  

  