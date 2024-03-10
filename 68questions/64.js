//function that generates a pyramid pattern of a given height
function generatePyramid(height) {
    let pyramid = '';
    for (let i = 1; i <= height; i++) {
      // Add spaces before the asterisks
      pyramid += ' '.repeat(height - i);
      // Add asterisks for the current row
      pyramid += '*'.repeat(2 * i - 1);
      // Add a new line character at the end of each row
      pyramid += '\n';
    }
    return pyramid;
  }
  
  // Test the function
  const height = 5;
  console.log(generatePyramid(height));
  