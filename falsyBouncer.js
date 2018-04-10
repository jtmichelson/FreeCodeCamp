/* Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
    var noFalsy = arr.filter(function(val) {
      if(val){
        return val;
      }
      });
    return noFalsy;
  }
  
  bouncer([false, null, 0, NaN, undefined, ""]);