/* Sumas mínimos y máximos: calcula 2 sumas:
    1. La suma de todos los elementos de un arreglo menos el mayor
    2. La suma de todos los elementos de un arreglo menos el menor */

function miniMaxSum (arr) {
    const minNum = Math.min(...arr);
    const maxNum = Math.max(...arr);
    let sumaTotal = arr.reduce((acumulado, actual) => acumulado + actual);
    return [sumaTotal - maxNum, sumaTotal - minNum]
}

miniMaxSum([1,2,3,4,5]); //[10,14]
miniMaxSum([3,12,3,9,2]); //[17,27]