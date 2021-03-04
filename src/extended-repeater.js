const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const count = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let addition = null;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|'
  
  
  if(options.addition === undefined) {
    addition = '';
  } else {
    addition = options.addition + '';
  }
  const newAddition = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  
  const newStr = `${str}${newAddition}${separator}`.repeat(count).slice(0, -separator.length)
  
  return newStr
  
};
