// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  if (element[1] === 'x' && typeof element === 'string'){
    return `0b${parseInt(element, 16).toString(2)}`
  }

  if (typeof element === 'number'){
    return `0b${element.toString(2)}`
  }
};

/******************************************************************************/


module.exports = convertToBase2;