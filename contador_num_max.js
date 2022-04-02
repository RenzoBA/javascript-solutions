// Contador número máximo: contabiliza la cantidad de veces que aparece un num máximo en un arreglo

function contadorNumMax(arr) {
    let numMax = Math.max(...arr);
    let contador = 0;
    arr.map(numero => numero === numMax && contador++);
    return contador;
}

contadorNumMax([3, 2, 1, 3, 5, 3, 2, 7, 6, 7, 7]); //3
contadorNumMax([3, 2, 1, 3, 5, 3, 2, 7, 6, 6, 6]); //1