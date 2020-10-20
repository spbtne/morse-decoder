const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let space = '**********';
      let dot = '10';
      let dash = '11';
      let exprArr = expr.split(space);
       let answer ='';
      for (let j = 0; j < exprArr.length; j += 1)
      {
      let wordsArr = exprArr[j].match(/.{1,10}/g);
     
    
      for (let i = 0; i < wordsArr.length; i += 1) {
       let oneWordsCode = wordsArr[i].split('');
       
        for (let y = 0 ; y < 10 ; y += 1)
          {
            if (oneWordsCode[y] === '0')
            {
            oneWordsCode.splice(y,1);
            y -=1;
            }
            else {
              wordsArr[i] = oneWordsCode.join('');
              break
              }
          }    
    }
     let result = wordsArr.reduce(function(word, item, index, array){
        let letterArray = item.match(/.{1,2}/g);
        let wordsMorseCode = letterArray.reduce(function(morseCode, i){
           if (i === '10') {
             morseCode +='.';
           }if (i === '11') {
             morseCode +='-'
           }
           return morseCode;
         },'')
        word += MORSE_TABLE[wordsMorseCode];
        return word;
      },'')
     
     answer +=' ' + result;
        }
        let rslt = answer.split('');
        rslt.splice(0,1);
        return rslt.join('');
}

module.exports = {
    decode
}
