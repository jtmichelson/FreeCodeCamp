/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    var newstr = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/ /g, "-").replace(/_/g, "-");
    return newstr.toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');