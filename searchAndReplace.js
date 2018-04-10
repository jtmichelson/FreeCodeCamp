/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog" */

function myReplace(str, before, after) {
    var arr = str.split(' ');
    var index = arr.indexOf(before);
    var caseTest = arr[index];
    caseTest = caseTest.split('');
    var afterCased = after.split('');
    if (caseTest[0] == caseTest[0].toLowerCase()) {
      afterCased[0] = afterCased[0].toLowerCase();
    }
    else if (caseTest[0] == caseTest[0].toUpperCase()) {
      afterCased[0] = afterCased[0].toUpperCase();
    }
    after = afterCased.join('');
    arr.splice(index, 1, after);
    str = arr.join(' ');
    return str;
  }
  
  myReplace("His name is Tom", "Tom", "john");