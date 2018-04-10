/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument). */

function truthCheck(collection, pre) {
    var counter = 0;
    for (var c in collection) {
      if (collection[c][pre] != null && collection[c][pre] != "" && !Number.isNaN(collection[c][pre])) {
        counter++;
      }
    }
    if (counter == collection.length) {
      return true;
    } else
      return false;
  }
  
  truthCheck([{"single": "yes"}], "single");