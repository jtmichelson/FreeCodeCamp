/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

function pairElement(str) {
    var DNA;
    var arr = str.split('');
    var result = [];
    for (var i = 0; i < str.length; i++) {
       result[i] = [];
    }
    for (i = 0; i < str.length; i++){
      DNA = arr[i];
      switch (DNA) {
        case 'A':
          result[i][0] = 'A';
          result[i][1] = 'T';
          break;
        case 'C':
          result[i][0] = 'C';
          result[i][1] = 'G';
          break;
        case 'G':
          result[i][0] = 'G';
          result[i][1] = 'C';
          break;
        case 'T':
          result[i][0] = 'T';
          result[i][1] = 'A';
          break;
      }
    }    
    return result;  
  }
  
  pairElement("GCG");