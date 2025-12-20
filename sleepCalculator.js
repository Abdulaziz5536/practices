// Returns sleep hours for each day
function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 7;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 7;
    case 'friday':
      return 5;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
    default:
      return 0;
  }
}

// Total actual sleep hours for the week
function getActualSleepHours() {
  return getSleepHours('monday') +
         getSleepHours('tuesday') +
         getSleepHours('wednesday') +
         getSleepHours('thursday') +
         getSleepHours('friday') +
         getSleepHours('saturday') +
         getSleepHours('sunday');
}

// Ideal sleep hours for the week
function getIdealSleepHours() {
  const idealHoursPerNight = 8;
  return idealHoursPerNight * 7;
}

// Compare actual vs ideal sleep
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
  } else {
    console.log(
      'You should get more sleep. You got ' +
      (idealSleepHours - actualSleepHours) +
      ' hours less than needed.'
    );
  }
}

// Run the program
calculateSleepDebt();
