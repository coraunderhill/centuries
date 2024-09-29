/**
 * Converts
 * @param {(number|string)} date
 * @returns
 */
const convert = date => {

  const type = typeof date;

  if (type !== 'number' && type !== 'string') {
    throw new Error(`${type} is not a number or string.`)
  }

  return true;

};

module.exports = convert;
