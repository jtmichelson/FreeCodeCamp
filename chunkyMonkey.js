/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var final = [];
    for (i = 0; i < arr.length; i += size) {
    newArr = arr.slice(i,i+size);
    final.push(newArr);
    }
    return final;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);