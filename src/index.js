/**
 * Outputs the century of a passed number year
 * @param {number} year A number representing the Gregorian calendar year (e.g.: 2024)
 * @returns {number} The year's century according to the Gregorian calendar
 */
const convert = year => {

  // Require "safe" integers
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
  if (!Number.isSafeInteger(year)) {
    throw new Error(`${year} is not considered a safe integer`);
  }

  // Require whole numbers (or floats that can resolve to a whole number)
  if (year !== 0 && year % 1 !== 0) {
    throw new Error(`${year} is not a whole number`);
  }

  /**
   * Flag indicating if the passed input is in the common era (year 1 forward)
   */
  const isCE = year >= 0;

  /**
   * Absolute value of input -/+ 1 based on if it's positive or negative, respectively
   */
  adjustedYear = (isCE) ? --year : ++year;

  /**
   * Numeric century of the passed input
   */
  let century = 1 + Math.trunc(Math.abs(adjustedYear / 100));

  // Results for before the common era are negative to differentiate them
  return isCE ? century : -century;

}

/**
 * Parses the year from a passed date string and outputs which century it's in
 * @param {string} date Valid date-time string
 * @returns {number} The year's century according to the Gregorian calendar
 */
const convertStr = date => {

  /**
   * Millisecond representation of date input or `NaN` if date input is not a valid string
   */
  const parsedDate = Date.parse(date);

  // If the string is valid run the conversion
  if (!isNaN(parsedDate)) {
    const dateObj = new Date(parsedDate);
    return convert(dateObj.getFullYear());
  }
  else throw new Error(`${date} is not a valid date-time string`);
}

/**
 * Outputs what century a Date object, string, or a year represented as a number is in
 * @param {(Date|number|string)} date
 * @param {string} [returnFormat=int] Optional: the format to be used when returning the result.
 * Defaults to `int`
 * @returns {number} Currently always returns true. Will change this later
 */
const centuries = (date, returnFormat) => {

  if (typeof date === 'number') return convert(date);
  else if (typeof date === 'string') return convertStr(date);
  else if (date instanceof Date && Object.prototype.toString.call(date) === '[object Date]') {
    return convert(date.getFullYear());
  }
  else throw new Error(`Input must be a number, valid Date object, or string: received ${type}`);

};

module.exports = centuries;
