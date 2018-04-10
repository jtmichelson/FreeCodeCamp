/* Return the length of the longest word in the provided sentence.
Your response should be a number. */

function findLongestWord(str) {
    var array = str.split(' ');
    var lengthsArr = [];
    for (i = 0; i < array.length; i++) {
      lengthsArr.push(array[i].length);
    }
    lengthsArr.sort(function(a, b) {
    return b - a;
    });
    var length = lengthsArr[0];
    return length;
  }
  
  findLongestWord("What if we try a super-long word such as otorhinolaryngology");