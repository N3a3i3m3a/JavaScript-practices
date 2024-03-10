function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
      let pattern = '';
      for (let j = 0; j < rows; j++) {
        if (j >= rows - i - 1) {
          pattern += '1 ';
        } else {
          pattern += '0 ';
        }
      }
      console.log(pattern);
    }
  }
  
  displayPattern(4);
  