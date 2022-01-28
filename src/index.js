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
    let answer = ""
    for (let i=0; i< expr.length; i+=10){
        const morseLetter= String(Number(expr.slice(i,i+10)));
        if (morseLetter === "NaN"){
            answer += " ";
        }else{
            let dotsAnsDashes = ""
            for (let j = 0; j < morseLetter.length; j+=2){
                const frame = morseLetter.slice(j,j+2)
                if (frame === "10"){
                    dotsAnsDashes += "."
                }else if (frame === "11"){
                    dotsAnsDashes += "-"
                }
            }
            answer += MORSE_TABLE[dotsAnsDashes]
    }
    }
    return answer
}

module.exports = {
    decode
}