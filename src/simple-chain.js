const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length
  },
  addLink(value) {
    this.result.push(String(value))
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || typeof position === Number) {
      this.result = []
      throw new Error('Error');
    } else {
      this.result.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.result.reverse()
    return this
  },
  finishChain() {
    const string = `( ${this.result.join(' )~~( ')} )`
    this.result = []
    return string
  }
};

module.exports = chainMaker;