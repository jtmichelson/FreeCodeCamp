/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5. */

function addTogether() {
    if (arguments.length == 1){
      var arg1 = arguments[0];
      if (arg1 === parseInt(arg1)) {
        return function(arg2) {
          if (arg2 === parseInt(arg2)){
            return arg1 + arg2;
          }
          else {
            return undefined;
          }
        };
      }
      else {
        return undefined;
      }
    }
    else if (arguments.length == 2){
      if (arguments[0] === parseInt(arguments[0]) && arguments[1] === parseInt(arguments[1])){
        return arguments[0] + arguments[1];
      }
      else {
        return undefined;
      }
    }
  }
  
  addTogether("http://bit.ly/IqT6zt");