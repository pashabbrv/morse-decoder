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

    for(let i = 0; i < expr.length; i+=10){
        let part = expr.slice(i, i+10);
        
        if(part === "**********"){
            result += ' ';
        }

        else{
            let symbol = '';
            let part2 = '';

            for(let k = 0; k < expr.length; i+=2){
                part2 = part.slice(k, k+2)
                
                if(part2 === '10'){
                    symbol+= '.';
                }

                else if(part2 === '11'){
                    symbol += '-'
                }
            }

            result += MORSE_TABLE[symbol];

        }

    }

    return result;
}

module.exports = {
    decode
}
