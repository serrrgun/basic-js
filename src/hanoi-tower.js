module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const result =  Math.pow(2, disksNumber);
    return {
        turns: result,
        seconds:  result / (turnsSpeed / 3600)
    }
}