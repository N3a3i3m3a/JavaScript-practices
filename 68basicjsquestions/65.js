//a, program that uses a switch case to perform the corresponding operation of two numbers and an operator
function calculate(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

// Example usage:
const num1 = 10;
const num2 = 5;
const operator = '+';
const result = calculate(num1, num2, operator);
console.log(`${num1} ${operator} ${num2} = ${result}`);

//b,take number representing a day of the week (1-7) and outputs the name of the day
function getDayName(dayNumber) {
    let dayName;
    switch(dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}

// Example usage:
const dayNumber = 3;
const dayName = getDayName(dayNumber);
console.log(`Day ${dayNumber} is ${dayName}`);

//c, grade system
function getGrade(score) {
    switch (true) {
      case score >= 90:
        return "A";
      case score >= 80:
        return "B";
      case score >= 70:
        return "C";
      case score >= 60:
        return "D";
      default:
        return "F";
    }
  }
  
  console.log(getGrade(85)); 

  //d, Traffic light
  function getTrafficLightColor(code) {
    switch (code) {
      case 1:
        return "Red";
      case 2:
        return "Yellow";
      case 3:
        return "Green";
      default:
        return "Invalid code";
    }
  }
  
  console.log(getTrafficLightColor(2)); // Output: Yellow

  // e, month name
  function getMonthName(month) {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "Invalid month";
    }
  }
  
  console.log(getMonthName(9)); // example

  //f, Simple menu
  function showMenu() {
    console.log("Menu:");
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Option 3");
  }
  
  function executeOption(option) {
    switch (option) {
      case 1:
        console.log("Executing Option 1");
        break;
      case 2:
        console.log("Executing Option 2");
        break;
      case 3:
        console.log("Executing Option 3");
        break;
      default:
        console.log("Invalid option");
    }
  }
  
  showMenu();
  executeOption(2); // example

  //g, Currency converter
  function convertCurrency(amount, sourceCurrency, targetCurrency) {
    let rate;
    switch (`${sourceCurrency}-${targetCurrency}`) {
      case 'USD-EUR':
        rate = 0.84;
        break;
      case 'EUR-USD':
        rate = 1.19;
        break;
      // Add more conversion rates as needed
      default:
        console.log("Invalid currency pair");
        return;
    }
    return amount * rate;
  }
  
  console.log(convertCurrency(100, 'USD', 'EUR')); // usage example

  //h, shape erea
  function calculateArea(shape, ...params) {
    switch (shape) {
      case 'circle':
        const [radius] = params;
        return Math.PI * radius ** 2;
      case 'square':
        const [side] = params;
        return side ** 2;
      case 'triangle':
        const [base, height] = params;
        return 0.5 * base * height;
      default:
        console.log("Invalid shape");
        return;
    }
  }
  
  console.log(calculateArea('circle', 5)); // Output: ~78.54
  
  //i. Season Detector
  function getSeason(month) {
    switch (month) {
      case 12:
      case 1:
      case 2:
        return "Winter";
      case 3:
      case 4:
      case 5:
        return "Spring";
      case 6:
      case 7:
      case 8:
        return "Summer";
      case 9:
      case 10:
      case 11:
        return "Fall";
      default:
        return "Invalid month";
    }
  }
  
  console.log(getSeason(7)); // usage example

  
  
  
  

  