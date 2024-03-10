const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 8;
    }
    else if (day === 'wednesday') {
        return 8;
    }
    else if (day === 'thursday') {
        return 8;
    }
    else if (day === 'friday') {
        return 8;
    }
    else if (day === 'saturday') {
        return 8;
    }
    else if (day === 'sunday') {
        return 8;
    }
};

const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('the user got the perfect amount of sleep');
      } 
      else if (actualSleepHours > idealSleepHours) {
        console.log('the user got more sleep than needed');
      } 
      else { actualSleepHours < idealSleepHours
        console.log('the user should get some rest');
      }
    
};

calculateSleepDebt()
    



