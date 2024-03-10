// function that filters out negative numbers from an array
function filterOutNegatives(arr) {
    return arr.filter(num => num >= 0);
  }
  
  // Test the function
  const array = [1, -2, 3, -4, 5, -6];
  const filteredArray = filterOutNegatives(array);
  console.log(filteredArray);
  