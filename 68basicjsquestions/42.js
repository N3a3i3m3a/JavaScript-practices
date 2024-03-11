// function that removes the last element from an array.
function removeLastElement(arr) {
    arr.pop();
    return arr;
  }
  
  // Test the function
  const array = [1, 2, 3, 4, 5];
  const newArray = removeLastElement(array);
  console.log( newArray);
  