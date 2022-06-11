// superDigit: Calcula recursivamente la suma de los digitos de un número "n" que se repite "k" veces hasta que el resultado sea un número de un dígito.

function superDigit(n, k) {   

    if (n < 10) {
        return n;
    }
    
    let numString = n.toString();
    let arr = numString.split("");
    let result = 0;
    
    for (let digit of arr) {
        result += +digit;
    }

    result *= k;
    
    return superDigit(result, 1);
}

console.log(superDigit(123, 1)) // 6
console.log(superDigit(2119, 3)) // 3
console.log(superDigit(245789, 5)) // 4
console.log(superDigit(245784234324329, 9)) // 9