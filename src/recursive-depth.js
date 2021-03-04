const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return arr.length === 0 ? 1 : 1 + Math.max(...arr.map(elem => this.calculateDepth(elem)))
    }
    else {
      return 0
    }
  }
};