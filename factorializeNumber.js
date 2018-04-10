/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n! */

function factorialize(num) {
    if (num > 0) {
    for(i = num - 1; i > 0; i--) {
      num *= i;
    }
    return num;
    }
    else {
      return 1;
    }
  }
  
  factorialize(5);