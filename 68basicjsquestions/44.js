// function that checks if all elements in an array are positive
function areAllPositive(arr) {
    return arr.every(num => num > 0);
  }
  let arr=[1,2,-3]
  console.log(areAllPositive(arr))