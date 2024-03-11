// function that finds the index of a given character in a string
function findIndexOfCharacter(str, char) {
    return str.indexOf(char);
  }
  
  // Test the function
  const inputString = "Hello World";
  const characterToFind = "o";
  console.log(findIndexOfCharacter(inputString, characterToFind));
  