const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return 0
  } else {
    const arr = matrix.reduce((acc, val) => acc.concat(val));
    
    let count = 0;
    
    arr.forEach(element => {
      if (element === "^^") {
        count++
      }
    });

    return count;
  }
};
