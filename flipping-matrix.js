// flippingMatrix: Calcula la mayor suma posible del cuadrante superior izquierdo, invirtiendo el orden de los elementos de
// las columnas y filas de una matriz.

function flippingMatrix(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length/2; i++) {
        
        for (let j = 0; j < matrix.length/2; j++) {
            let lastElement = matrix.length - 1;
            
            sum += Math.max(matrix[i][j], matrix[i][lastElement-j], matrix[lastElement-i][j], matrix[lastElement-i][lastElement-j]);
        }
    }
     return sum;
}

console.log(flippingMatrix([[1, 2], [3, 4]])) // 4
console.log(flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]])) // 414