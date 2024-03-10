// function that capitalizes the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the words back together into a sentence
    return capitalizedWords.join(' ');
  }
  
  // Test the function
  const sentence = "this is a test sentence";
  console.log(capitalizeFirstLetter(sentence));
  