// Números capicúos: evalúa si un número se lee igual de izquierda a derecha que de derecha a izquierda

function invertirNumero(numero) {
    let cadena = numero.toString()   
    let numeroCapicuo = "";
    for(i = cadena.length - 1; i >= 0; i--) {
        numeroCapicuo = numeroCapicuo + cadena[i];
    }
    return (cadena === numeroCapicuo) ? true : false;
}

invertirNumero(12345); //false
invertirNumero(12321); //true
