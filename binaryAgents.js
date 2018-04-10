/* Return an English translated sentence of the passed binary string.
The binary string will be space separated. */

function binaryAgent(str) {
    var arrBin = str.split(" ");
    var arrDec = [];
    for(var i = 0; i < arrBin.length; ++i){
      arrDec[i] = parseInt(arrBin[i], 2);  
    }
    var answer = "";
    for(var j = 0; j < arrDec.length; ++j){
      answer += String.fromCharCode(arrDec[j]);
    }
    return answer;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");