// function that checks if a given year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the function
  const year = 2024;
  console.log(isLeapYear(year));
  