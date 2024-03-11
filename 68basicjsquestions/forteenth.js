function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
      let pattern = '';
      for (let j = 0; j < rows - i - 1; j++) {
        pattern += ' ';
      }
      pattern += '1';
      console.log(pattern);
    }
  }
  
  displayPattern(4);
  