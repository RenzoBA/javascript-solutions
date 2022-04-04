// Factorial: calcula el factorial de un número

function miFactorial(numero) {
    const bigNum = BigInt(numero);
    let factorial = 1n;
    for(i = bigNum; i > 0; i--) {
        factorial =  i*factorial;
    }
    return factorial.toString();
}

console.log(miFactorial(5)); //120
console.log(miFactorial(30)); //265252859812191058636308480000000