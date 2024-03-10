// function that finds the intersection of two arrays
function findIntersection(arr1, arr2) {
    // Use the filter() method to filter elements that are present in both arrays
    return arr1.filter(item => arr2.includes(item));
  }
  
  // Test the function
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  console.log(findIntersection(array1, array2));
  