

/**
 * Outputs the century of a passed number year
 * @param {number} year The number year
 * @returns the passed input
 */
const convertNum = year => {

  // Check for zero
  if (year === 0) {
    throw new Error(`The Gregorian calendar has no year zero.`);
  }

  // Require whole numbers (or floats that can resolve to a whole number)
  if (year % 1 !== 0) {
    throw new Error(`${year} is not a whole number.`);
  }

  // Require "safe" integers
  if (!Number.isSafeInteger(year)) {
    throw new Error(`${year} is not considered a safe integer.`);
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

  return isCE ? century : -century;

}

const convertStr = input => {

  return input;

}

/**
 * Outputs the century of a number year or date string
 * @param {(number|string)} date A number year or date string
 * @param {string} [returnFormat=int] Optional: the format to be used when returning the result.
 * Defaults to `int`
 * @returns {boolean} Currently always returns true. Will change this later
 */
const centuries = (date, returnFormat) => {

  /**
   * `typeof` for input
   */
  const type = typeof date;

  // Check that the type is explicitly a number or a string before continuing
  if (type !== 'number' && type !== 'string') {
    throw new Error(`Input must be a number or string: received ${type}`)
  }

  /**
   * The century of the passed input
   */
  const century = (type === 'number') ? convertNum(date) : convertStr(date);

  return century;

};

module.exports = centuries;
