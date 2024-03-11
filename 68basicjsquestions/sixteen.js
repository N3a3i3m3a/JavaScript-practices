// function to sort and arrange elements of the array in ascending order
function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
  }

  //display the last 3 numbers and the first 3 numbers in front of the sorted array
  function rearrangeArray(arr) {
    const sortedArr = sortAscending(arr);
    const firstThree = sortedArr.slice(0, 3);
    const lastThree = sortedArr.slice(-3);
    return lastThree.concat(firstThree,sortedArr);
  }

  //From the same sorted array, also display the first 3 numbers.
  function displayFirstThree(arr) {
    return arr.slice(0, 3);
  }
 
  let arr=[3,4,8,2,1,2,2,6,3,4]
  console.log(sortAscending(arr))
  console.log(rearrangeArray(arr))
  console.log(displayFirstThree(arr))