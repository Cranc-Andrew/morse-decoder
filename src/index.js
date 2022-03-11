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
    let resultStr = "",
        count = expr.length / 10;
    for (let i = 0; i < count; i++) {
        let encodeStr = expr.substr(i * 10, 10),
            morseStr = "";
        for (let j = 0; j < 10; j++) {
            if (encodeStr[j] === "*") {
                resultStr += " ";
                break;
            }
            let code = encodeStr[j] + encodeStr[j + 1];
            switch (code) {
                case "10":
                    morseStr += ".";
                    j++;
                    break;
                case "11":
                    morseStr += "-";
                    j++;
                    break;
            }
        }
        if(morseStr){
            resultStr += MORSE_TABLE[morseStr];
        }
    }
    return resultStr;
}

module.exports = {
    decode
}
