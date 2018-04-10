/* Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
    var substring1 = '';
    var substring2 = '';
    var result = '';
    var charCode = 0;
    for (i = 0; i < str.length; i++) {
      charCode = str.charCodeAt(i);
      switch(charCode) {
        case 97:
        case 101:
        case 105:
        case 111:
        case 117:
          if (i == 0) {
          return str + "way";
          }
          else {
            result = substring1 + substring2 + "ay";
            return result;
          }
          break;
        default:
          substring1 = str.substr(i+1, str.length);
          substring2 = str.substr(0, i+1);
          break;
       }
    }
  }
  translatePigLatin("glove");