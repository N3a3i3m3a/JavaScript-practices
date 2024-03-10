// function that returns the first n elements of an array
function firstNElements(arr, n) {
    return arr.slice(0, n);
  }
  
  // Test the function
  const array = [1, 2, 3, 4, 5];
  const n = 3;
  console.log(firstNElements(array, n));
  