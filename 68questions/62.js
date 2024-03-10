// function that counts the number of words in a sentence
function countWords(sentence) {
    // Split the sentence into words using spaces as delimiters
    const words = sentence.split(' ');
  
    // Return the number of words
    return words.length;
  }
  
  // Test the function
  const sentence = "This is a test sentence";
  console.log(countWords(sentence));
  