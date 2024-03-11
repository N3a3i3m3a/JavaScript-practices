// function that sorts an array of numbers in ascending order
function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // Test the function
  const array = [5, 2, 9, 1, 3];
  const sortedArray = sortAscending(array);
  console.log( sortedArray);
  