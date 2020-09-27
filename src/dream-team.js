const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    // создаем пустой массив
    let name = [];
    // проходимся циклом по входному массиву
    for(let item of members) {
      // если элемент массива строка берем его
      if (typeof item === 'string') {
        // делаем из элемента массив обрезая строку
        const arrItem = item.trim().split('');
        // пушим в пустой созданный массив первый элемент приведенный к верхнему регистру
        name.push(arrItem[0].toUpperCase());
      }
    }
    // возвращаем отсортированный по алфавиту массив приведенный к строке
    return  name.sort().join('')
  } else {
    return false
  }
};
