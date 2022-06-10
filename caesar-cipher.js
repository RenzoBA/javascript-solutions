//Caesar Cipher: técnica de encriptación Caesar cipher

function caesarCipher(s, k) {
    let minusAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let mayusAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    let newString = [];
    let extraIndex = (k >= 26) ? k % 26 : k;
    
    for (let i = 0; i < s.length; i++) {
        let newIndex;
        if (minusAlphabet.indexOf(s[i]) !== -1) {
            newIndex = minusAlphabet.indexOf(s[i]) + extraIndex;
            newString.push(minusAlphabet[(newIndex >= 26) ? newIndex % 26 : newIndex]);
            continue;
        } else if (mayusAlphabet.indexOf(s[i]) !== -1) {
            newIndex = mayusAlphabet.indexOf(s[i]) + extraIndex;
            newString.push(mayusAlphabet[(newIndex >= 26) ? newIndex % 26 : newIndex]);
            continue;
        } else {
            newString.push(s[i]);
        }
    }

    return newString.join("")
}

console.log(caesarCipher("Hello_World!",4)) // Lipps_Asvph!
console.log(caesarCipher("middle-Outz",2)) // okffng-Qwvb
