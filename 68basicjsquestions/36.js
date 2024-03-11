// counts the number of consonants in a string
function countConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (!vowels.includes(char) && char.match(/[a-z]/i)) {
        count++;
      }
    }
  
    return count;
  }
  