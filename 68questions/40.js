// function that squares each element of an array
function squareArray(arr) {
    return arr.map(num => num * num);
  }
  
  // Test the function
  const array = [1, 2, 3, 4, 5];
  const squaredArray = squareArray(array);
  console.log( squaredArray);
  