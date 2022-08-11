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
    let size = 10
    let substr = expr.length/size
    let arr = []
    let str = ""
    while(expr !== "") {
      arr.push(expr.slice(0, size));
      expr = expr.slice(size)
    }
    for(let i = 0; i < arr.length; i++) {
        let arr10 = arr[i].replaceAll("10",'.')
        let arr11 = arr10.replaceAll("11",'-')
        let arr1011 = arr11.replaceAll("0","")
        let arrall = arr1011.replaceAll("**********", " ")
        if(arrall != " ") {
          str+= MORSE_TABLE[arrall]
        }else{
          str+=" "
        }
    }
    return str // write your solution here
}

module.exports = {
    decode
}