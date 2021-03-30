const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
    let arr = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        let str = members[i].trim();
        arr.push(str[0].toUpperCase());
      }
    }
  return arr.sort().join('');
};
