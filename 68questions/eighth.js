//a function that receives an array of and returns the average of numbers
function calculateAverage(arr) {
    let total=0
    for(let num of arr){
      total+=num
    }
  return total / arr.length;
}
  let arr=[1,2,4];
  console.log(calculateAverage(arr))