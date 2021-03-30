const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arrCats = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        arrCats.push(j);
      }
    }
  }
  return arrCats.length; 
};
