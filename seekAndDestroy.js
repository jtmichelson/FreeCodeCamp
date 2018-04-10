/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
    var args = Array.from(arguments);
    var newArray = args[0];
    for(i = 1; i < args.length; i++){
    newArray = newArray.filter(function(val) {
    return val != args[i];
    });
    }
    return newArray;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);