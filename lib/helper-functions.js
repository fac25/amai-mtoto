function convertDateInputToMillisecondsFormat(dateStringFromInput) {
  let year = dateStringFromInput.slice(0, 4);
  let month = dateStringFromInput.slice(5, 7);
  let day = dateStringFromInput.slice(8);
  let milliseconds = new Date(year, month, day).getTime();
  return milliseconds;
}

function convertMillisecondsToDateStringFormat(milliseconds) {
  let dateObj = new Date(milliseconds); // create Date object
  let dateConvertedToString = dateObj.toString();
  return dateConvertedToString;
}

function howManyWeeksUntil(futureDate, presentDate) {
  let timeDiffInMs = futureDate - presentDate;

  let noOfWeeksUntil = Math.round(timeDiffInMs / 604800000);
  return noOfWeeksUntil;
}

function weeksUntilMappedToPregnancyWeek(weeksUntil) {
  let PregnancyWeek = 36 - weeksUntil;
  return PregnancyWeek;
}

export {
  convertDateInputToMillisecondsFormat,
  convertMillisecondsToDateStringFormat,
  howManyWeeksUntil,
  weeksUntilMappedToPregnancyWeek,
};
