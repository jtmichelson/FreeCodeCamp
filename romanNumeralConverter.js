/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
    var arr = [];
      while(num >= 1000) {
        num -= 1000;
        arr.push("M");
      }
      while(num >= 900) {
        num -= 900;
        arr.push("CM");
      }
      while(num >= 500) {
        num -= 500;
        arr.push("D");
      }
      while(num >= 100) {
        num -= 100;
        arr.push("C");
      }
      while(num >= 40) {
        if(num >= 90) {
          num -= 90;
          arr.push("XC");
        }
        else if(num < 90 && num >= 50) {
          num -= 50;
          arr.push("L");
        }
        else {
          num -= 40;
          arr.push("XL");
        }
      }
      while(num >= 10) {
        num -= 10;
        arr.push("X");
      }
      while(num >= 9) {
        num -= 9;
        arr.push("IX");
      }
      if(num <= 8 && num >= 5) {
        num -= 5;
        arr.push("V");
      }
      else if(num == 4) {
        num -= 4;
        arr.push("IV");
      }
      while(num > 0) {
          num--;
          arr.push("I");
      }
    arr = arr.join('');
    return arr;
   }
   
   convertToRoman(3999);