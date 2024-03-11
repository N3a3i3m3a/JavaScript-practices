//stringModifier function
function stringModifier(str, position, replacement) {
    if (position < 0 || position >= str.length) {
      return "Position is out of range.";
    }
  
    const modifiedString = str.slice(0, position) + replacement + str.slice(position + 1);
    return modifiedString;
  }
  
  // Test the function
  const originalString = "example";
  const modifiedString = stringModifier(originalString, 2, "x");
  console.log(modifiedString); // Output: "exaxple"
  