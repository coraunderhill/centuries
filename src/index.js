const convertNum = input => {

  return input;

}

const convertStr = input => {

  return input;

}

/**
 * Outputs the century of a number year or date string
 * @param {(number|string)} date A number or date string
 * @returns {boolean} Currently always returns true. Will change this later
 */
const centuries = date => {

  /**
   * `typeof` passed input—WORM
   */
  const type = typeof date;

  // Check that the type is explicitly a number or a string before continuing
  if (type !== 'number' && type !== 'string') {
    throw new Error(`Input must be a number or string: received ${type}`)
  }

  if (type === 'number') { return convertNum(date); }
  else { return convertStr(date); }

};

module.exports = centuries;
