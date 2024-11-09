const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * 5/9 * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius*9/5 + 32);
  if (result % 2 !== 0 ) {
    return Number.parseFloat(result.toFixed(1));
  }
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
