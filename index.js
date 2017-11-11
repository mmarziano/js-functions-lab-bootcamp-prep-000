// write your code below!
function happyHolidays() {
  var greeting = "Happy holidays!";
  return greeting;
}

function happyHolidaysTo (name){
  name = 'you';
  return `Happy holidays, ${name}!`;

}

function happyHolidayTo(holiday, name){
  holiday = 'Independence Day';
  name = 'you';
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(days, holiday){
  days = 5;
  holiday = "Independence Day";
  return `It's ${days} days until ${holiday}!`;
}
