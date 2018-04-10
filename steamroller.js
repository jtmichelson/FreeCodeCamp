/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument). */

function steamrollArray(arr) {
    var flattenedArray = [];
    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      }
      else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
    arr.forEach(flatten);
    return flattenedArray;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);