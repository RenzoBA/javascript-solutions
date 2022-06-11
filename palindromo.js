// Palindromo: encuentra el index de la letra que se debe eliminar para que la cadena sea un palindromo.

function palindromo(s) {
    let sReverse = s.split("").reverse().join("");
    
    for (let i = 0; i < s.length; i++) {

        if (s[i] !== sReverse[i]) {
            
            if (sReverse[i] === s[i + 1] && sReverse[i+1] === s[i + 2]) {
                return i;
            } else if (s[i] === sReverse[i + 1] && s[i+1] === sReverse[i + 2]) {
                return s.length - 1 - i;
            }
        }
    }
    return -1;
}

console.log(palindromo("lhrxvssvxrhl")) // -1
console.log(palindromo("quyjjdcgsvvsgcdjjyq")) // 1
console.log(palindromo("hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh")) // 8