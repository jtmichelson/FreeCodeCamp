/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
    str = str.toLowerCase();
    var array = str.split(' ');
    for (i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    str = array.join(" ");
    return str;
  }
  
  titleCase("I'm a little tea pot");