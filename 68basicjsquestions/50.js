// function that checks if an array is sorted in ascending order
function isSortedAscending(arr) {
    return arr.every((num, index) => index === 0 || num >= arr[index - 1]);
  }
  