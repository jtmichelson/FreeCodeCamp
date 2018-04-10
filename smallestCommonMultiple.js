/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3. */

function smallestCommons(arr) {
    //sort a and b from smallest to largest
    arr.sort(function(a, b) {
      return a - b;
    });
    // fill array with all the integers between 'a' and 'b'
    var newArr = [];
    for (var i = arr[0]; i <= arr[1]; ++i) {
      newArr.push(i);
    }  
    var q = 0;
    var loop = 1;
    var n;
    // multiple two highest numbers by each other and 'loop' then check if divisible by all numbers
    // keep incrementing 'loop' until true
    do {
      q = newArr[newArr.length-1] * newArr[newArr.length-2] * loop;
      for (n = newArr.length-3; n >= 0; n--) {
        if (q % newArr[n] !== 0) {
          break;
        }
      }
      loop++;
    } while (n !== -1);
    return q;
  }
  
  smallestCommons([23, 18]);