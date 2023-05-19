// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  let sum = 0;
  let base = 0;

  if (str[1] === 'b'){
    base = 2;
  } else if (str[1] === 'x'){
    base = 16
  }


  // create key of numbers
  const digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15}

  //iterate from end of str to first number following second index to omit 0b
  for (let i = str.length - 1; i >= 2; i--){
    // find value by converting current value to key for digits object
    let num = digits[str[i].toLowerCase()]

    // find n. should start from 0 at last string index
    let n = (str.length - 1) - i;

    sum += (base**n) * num;
  }

  return sum;
};

/******************************************************************************/

/* console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914

 */
module.exports = convertToBase10;