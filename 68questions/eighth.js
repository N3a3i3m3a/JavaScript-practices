//a function that receives an array of and returns the average of numbers
function calculateAverage(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
  let arr=[1,2,4];
  console.log(calculateAverage(arr))