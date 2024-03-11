// a function that counts the number of characters that make up a string
function countCharacters(str) {
    // Remove spaces from the string
    const stringWithoutSpaces = str.replace(/\s/g, '');
    
    // Count the number of characters in the string without spaces
    const numberOfCharacters = stringWithoutSpaces.length;
  
    return numberOfCharacters;
  }
  
  
  const inputString = "Hello World";
  console.log("Number of characters:", countCharacters(inputString)); 
  