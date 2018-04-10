/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function truncateString(str, num) {
    if (str.length > num && num > 3) {
      str = str.substring(0, num - 3) + "...";
    }
    else if (str.length > num && num <= 3) {
      str = str.substring(0, num) + "...";
    }
    else if (str.length < num) {
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);