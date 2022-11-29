function convertDateInputToMillisecondsFormat(dateStringFromInput) {
  let year = dateStringFromInput.slice(0, 4);
  let month = dateStringFromInput.slice(5, 7);
  let day = dateStringFromInput.slice(8);
  //console.log(`year is ${year}, month is ${month} and day is ${day}`);
  let milliseconds = new Date(year, month, day).getTime();
  //console.log(milliseconds);
  return milliseconds;
}

function convertMillisecondsToDateStringFormat(milliseconds) {
  let dateObj = new Date(milliseconds); // create Date object
  let dateConvertedToString = dateObj.toString();
  //console.log(dateConvertedToString);
  return dateConvertedToString;
}

function howManyWeeksUntil(futureDate, presentDate) {
  let timeDiffInMs = futureDate - presentDate;

  let noOfWeeksUntil = Math.round(timeDiffInMs / 604800000);
  //console.log(noOfWeeksUntil);
  return noOfWeeksUntil;
}

function weeksUntilMappedToPregnancyWeek(weeksUntil) {
  let PregnancyWeek = 36 - weeksUntil;

  //console.log(PregnancyWeek);
  return PregnancyWeek;
}

export {
  convertDateInputToMillisecondsFormat,
  convertMillisecondsToDateStringFormat,
  howManyWeeksUntil,
  weeksUntilMappedToPregnancyWeek,
};
