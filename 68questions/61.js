// function that checks if a given string contains only digits
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
  }
  
  // Test the function
  const string1 = "12345";
  const string2 = "abc123";
  console.log( containsOnlyDigits(string1));
  console.log( containsOnlyDigits(string2));
  