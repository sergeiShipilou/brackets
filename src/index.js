module.exports = function check(str, bracketsConfig) {
  let start = 1;

  while (start === 1) {

    let newStr = str;

    bracketsConfig.map(item => str = str.replace(item[0] + item[1], ''));

    if (newStr === str) {
      start = 0;
    }
    
  }
  return (str.length === 0) ? true : false
}
