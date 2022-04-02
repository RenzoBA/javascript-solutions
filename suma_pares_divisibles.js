// Suma de pares divisibles: contabiliza la cantidad de sumas de pares que son divisibles por un divisor

const sumaParesDivisibles = (divisor, arr) => {
    let contador = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            (arr[i] + arr[j]) % divisor == 0 && contador ++;
        }
    }
    return contador;
}
sumaParesDivisibles(3,[1, 3, 2, 6, 2, 2]); //4
sumaParesDivisibles(2,[1, 3, 2, 6, 2, 2]); //7