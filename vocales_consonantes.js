// Contador de vocales y consonantes en un texto

function contadorVocalesConsonantes (texto) {
    let vocales = /[aeiou]/gi;
    let numVocales = texto.match(vocales).length;

    let consonantes = /[bcdfghjklmnñpqrstuvwxyz]/gi;
    let numConsonantes = texto.match(consonantes).length;

    return [numVocales, numConsonantes];
}

contadorVocalesConsonantes("Hola como estas"); //[6,7]
contadorVocalesConsonantes("Mi nombre es: Renzo"); //[6,9]