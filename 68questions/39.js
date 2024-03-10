// function that checks if a given value is present in an array
function isValuePresent(arr, value) {
    return arr.includes(value);
  }
  
  // Test the function
  const array = [1, 2, 3, 4, 5];
  const valueToCheck = 3;
  console.log(isValuePresent(array, valueToCheck));
  