// function that finds the median of an array of numbers
function findMedian(arr) {
    // Sort the array in ascending order
    const sortedArr = arr.slice().sort((a, b) => a - b);
  
    // Calculate the middle index
    const midIndex = Math.floor(sortedArr.length / 2);
  
    // Check if the array length is odd or even
    if (sortedArr.length % 2 === 0) {
      // If the length is even, return the average of the two middle elements
      return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
    } else {
      // If the length is odd, return the middle element
      return sortedArr[midIndex];
    }
  }
  
  // Test the function
  const array = [1, 3, 5, 2, 4];
  console.log(findMedian(array));
  