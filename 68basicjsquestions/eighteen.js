//BMI of a person and returns the specificclassification of a person accordingly
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
  
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  // Test the function
  const weight = 70; 
  const height = 1.75; 
  console.log("BMI Classification:", calculateBMI(weight, height));
   