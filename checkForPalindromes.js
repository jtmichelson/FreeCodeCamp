/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */

function palindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '');
    str = str.toLowerCase();
    array = str.split('');
    for (i = 0; i < array.length; i++) {
        if (i - (array.length - 1 - i) == 0) {
          return true;
        }
        else if (i - (array.length - 1 - i) == 1) {
          if (array[i] == array[(array.length - 1) - i]) {
            return true;
          }
          else if (array[i] != array[(array.length - 1) - i]) {
            return false;
          }
        }
        else if (array[i] != array[(array.length - 1) - i]) {
          return false;
        }
    }
  }
  
  palindrome("eeyyee");