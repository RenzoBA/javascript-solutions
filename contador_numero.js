// Función que contabiliza la cantidad de veces que se repiten los números

function contadorNumeros (arr) {
    let valores = {};
    arr.forEach((valor) => valores[valor] = (valores[valor] || 0) + 1);
    return valores;
}

contadorNumeros([2, 3, 4, 5, 4, 3, 2, 3, 4, 2, 2, 4]); //{ '2': 4, '3': 3, '4': 4, '5': 1 }
contadorNumeros([1, 2, 3, 4, 5, 4, 3, 2, 7, 3, 4, 11, 2, 2, 4, 6]); //{ '1': 1, '2': 4, '3': 3, '4': 4, '5': 1, '6': 1, '7': 1, '11': 1 }