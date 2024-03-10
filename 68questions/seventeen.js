// function that determines the age classification of people
function determineAgeClassification(age) {
    if (age >= 0 && age <= 12) {
      return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
      return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
      return "COMMITMENT";
    } else {
      return "LEGACY";
    }
  }