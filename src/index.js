module.exports = function reverse (n) {
  let str = String(n);
  str = str.split('-').join('').split('').reverse().join('');
  return Number(str);
}
