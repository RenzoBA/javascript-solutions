// Palabras capicúas: evalúa si una palabra se lee igual de izquierda a derecha que de derecha a izquierda

function invertirPalabra(palabra) {
    let palabraCapicua = "";
    for(i = palabra.length - 1; i >= 0; i--) {
        palabraCapicua = palabraCapicua + palabra[i];
    }
    return (palabra === palabraCapicua) ? true : false;
}

invertirPalabra("mario"); //false
invertirPalabra("salas"); //true