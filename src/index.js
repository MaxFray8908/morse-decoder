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
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        let search = '';

        for (let j = 0; j < letter.length; j += 2) {
            let char = letter[j] + letter[j + 1];

            if (char === '**') {
                result +=' ';
                j += 8;
            }

            if (char === '00') {continue;}
            else if (char === '10') {search +='.';}
            else if (char === '11') {search +='-';}
            
        }
        if(search !== '') {result += MORSE_TABLE[search];}
    }
    return result;
}

module.exports = {
    decode
}