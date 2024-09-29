/**
 * Outputs the century of a passed number year
 * @param {number} year The number year
 * @returns the passed input
 */
const convert = year => {

  // Check for zero
  if (year === 0) {
    throw new Error(`The Gregorian calendar has no year zero`);
  }

  // Require whole numbers (or floats that can resolve to a whole number)
  if (year % 1 !== 0) {
    throw new Error(`${year} is not a whole number`);
  }

  // Require "safe" integers
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
  if (!Number.isSafeInteger(year)) {
    throw new Error(`${year} is not considered a safe integer`);
  }

  /**
   * Flag indicating if the passed input is in the common era (year 1 forward)
   */
  const isCE = year > 0;

  /**
   * Absolute value of input -/+ 1 based on if it's positive or negative, respectively
   */
  const adjustedYear = (isCE) ? Math.abs(year) - 1 : Math.abs(year) + 1

  /**
   * Numeric century of the passed input
   */
  const century = Math.trunc((adjustedYear / 100) + 1);

  // Years before the common era are negative to differentiate them
  return isCE ? century : -century;

}

/**
 * Outputs what century a Date object, string, or a year represented as a number is in
 * @param {(Date|number|string)} date
 * @param {string} [returnFormat=int] Optional: the format to be used when returning the result.
 * Defaults to `int`
 * @returns {boolean} Currently always returns true. Will change this later
 */
const centuries = (date, returnFormat) => {

  /**
   * TODO: add strings
   */
  if (typeof date === 'number') return convert(date);
  else if (date instanceof Date && Object.prototype.toString.call(date) === '[object Date]') {
    convert(date.getFullYear());
  }
  else throw new Error(`Input must be a number, valid Date object, or string: received ${type}`);

};

module.exports = centuries;
