/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    for (i = 0; i < arr1.length; i++) {
      for (j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          newArr = newArr.filter(function(word){
          return word != arr1[i];
          });
        }
      }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);