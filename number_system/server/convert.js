const BinaryToDecimal = (binary, base) => {
    let power =0, sum = 0;
    let binary_arr = binary.split("");
    binary_arr = binary_arr.map((j) => Number(j));
    let isArraySumZero = binary_arr.reduce((a, b) => a + b);
  
    if (binary_arr[binary_arr.length - 1] === 0 && isArraySumZero === 0) {
      return 0;
    } else if (binary_arr[binary_arr.length - 1] === 1 && isArraySumZero === 1) {
      return 1;
    } else {
      power = binary_arr.length - 1;
  
      for (let i = 0; i < binary_arr.length; i++) {
        sum = sum + Math.pow(base, power--) * binary_arr[i];
      }
  
      return sum;
    }
  }
  
  
const BinaryToOctal = (binary, base) => {
    let resultBinary,
      remainder,
      joinOctal = 0;
  
    resultBinary = BinaryToDecimal(binary, base);
    while (resultBinary > 0) {
      base = 8;
      remainder = resultBinary % base;
      joinOctal = joinOctal * 10 + remainder;
      resultBinary = parseInt(resultBinary / base);
    }
  
    let resultOctal = reverseNumber(joinOctal);
    return resultOctal;
  }
  
  function reverseNumber(number) {
    let remainder,
      reverse = 0;
    while (number > 0) {
      remainder = number % 10;
      reverse = reverse * 10 + remainder;
      number = parseInt(number / 10);
    }
    return reverse;
  }
  
const DecimalToBinary_Octal_hexaDecimal = (decimal, base) => {
    let remainder = 0,
      binaryResult_arr = [];
    while (decimal > 0) {
      remainder = decimal % base;
      if (parseInt(base) === 16) {
        switch (remainder) {
          case 10:
            remainder = "A";
            break;
          case 11:
            remainder = "B";
            break;
          case 12:
            remainder = "C";
            break;
          case 13:
            remainder = "D";
            break;
          case 14:
            remainder = "E";
            break;
          case 15:
            remainder = "F";
            break;
        }
      }
      binaryResult_arr.push(remainder);
      decimal = parseInt(decimal / base);
    }
  
    return binaryResult_arr.reverse().join("");
  }
  
const hexadecimalToBinary = (HexaDecimal, base) => {
    let hexadecimal_arr = HexaDecimal.split("");
    let hexadecimal_arr_length = hexadecimal_arr.length;
    let hexadecimal_power = hexadecimal_arr_length - 1;
    let remainder,
      decimalResult = 0;
    for (let i = 0; i < hexadecimal_arr_length; i++) {
      remainder = hexadecimal_arr[i];
      switch (remainder) {
        case "A":
        case "a":
          remainder = 10;
          break;
        case "B":
        case "b":
          remainder = 11;
          break;
        case "C":
        case "c":
          remainder = 12;
          break;
        case "D":
        case "d":
          remainder = 13;
          break;
        case "E":
        case "e":
          remainder = 14;
          break;
        case "F":
        case "f":
          remainder = 15;
          break;
      }
      decimalResult =
        decimalResult + remainder * Math.pow(base, hexadecimal_power);
      hexadecimal_power = hexadecimal_power - 1;
    }
    return decimalResult;
  }
  
  module.exports={BinaryToDecimal,BinaryToOctal,DecimalToBinary_Octal_hexaDecimal,hexadecimalToBinary}
  
  