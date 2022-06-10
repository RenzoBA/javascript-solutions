// minimalOperations: Calcula la mínima cantidad de veces que se requiere cambiar las letras de una palabra, de arreglo de
// palabras, para evitar que existan 2 letras iguales contiguas en cada palabra del arreglo.

function minimalOperations(words) {
    let result = [];
    
    for (let word of words) {
        let letter = word[0];
        let counterEqual = 0;
        
        for (let i = 1; i < word.length; i++) {
            if (word[i] == letter) {
                letter = 0;
                counterEqual++;
            } else {
                letter = word[i];
            }
        }
        result.push(counterEqual)
        
    }
    return result
}

console.log(minimalOperations(["abcd", "ababa", "aaab", "aabaa", "aaabbbaaabbb"])) // [0, 0, 1, 2, 4]
console.log(minimalOperations(["keyhbmeknckfavrpqyyfjxjjmivtsftikovkcdcwefctqrqjryhtlcvstm", "rpqipvntglpsbmoyxpjhkfufrxgnqjvhtizxn", "sddpeibedjk", "dkxqcthvgmzymoohniertqanrbkfdolfwfaalwolqpipngsaquxurvzwjpfejkfyys", "jdzsnpejkyqktrdlljfuozlfsvrhqrwgtojnxllzmbfvoexxxttzcbprwzyztsovcxootxoswbffcokhtosfvn"])) // [2, 0, 1, 3, 6]
