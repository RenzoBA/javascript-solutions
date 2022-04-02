// Factorial: calcula el factorial de un número

function miFactorial(numero) {
    let factorial = 1;
    for(i = numero; i > 0; i--) {
    factorial =  i*factorial;
    }
    return factorial;
}

miFactorial(5); //120