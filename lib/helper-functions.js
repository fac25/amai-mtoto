function convertDateInputToMillisecondsFormat(dateStringFromInput) {
  let year = dateStringFromInput.slice(0, 4);
  let month = dateStringFromInput.slice(5, 7) - 1;
  let day = dateStringFromInput.slice(8);
  let milliseconds = new Date(year, month, day).getTime();
  return milliseconds;
}

function convertMillisecondsToDateStringFormat(milliseconds) {
  let dateObj = new Date(milliseconds); // create Date object
  let dateConvertedToString = dateObj.toISOString().slice(0, 10); //toString();
  //console.log(dateConvertedToString);
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

function whichWeekToQueryFromBabySize(dueDateInMs) {
  let today = new Date().getTime();
  let weeksUntil = howManyWeeksUntil(dueDateInMs, today);
  let whichWeekToQueryFromBabySize =
    weeksUntilMappedToPregnancyWeek(weeksUntil);
  //console.log(whichWeekToQueryFromBabySize);
  return whichWeekToQueryFromBabySize;
}

function whichTrimesterAreYouIn(dueDateInMs) {
  let today = new Date().getTime();
  let weeksUntil = howManyWeeksUntil(dueDateInMs, today);
  let trimester;
  if (weeksUntil <= 12) {
    trimester = 3;
  } else if (weeksUntil <= 24) {
    trimester = 2;
  } else {
    trimester = 1;
  }
  console.log(trimester);
  return trimester;
}

export {
  convertDateInputToMillisecondsFormat,
  convertMillisecondsToDateStringFormat,
  howManyWeeksUntil,
  weeksUntilMappedToPregnancyWeek,
  whichWeekToQueryFromBabySize,
  whichTrimesterAreYouIn,
};
