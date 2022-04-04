// Busqueda secuencial: compara secuencialmente el elemento con cada elemento del arreglo

function busquedaSecuencial (letras, elemento) {
    for(item of letras) {
        if (item === elemento) {
          return true;
        }
    }
  }

  busquedaSecuencial(["a","b","c","d","f","g","h","i","j","k","l","m","n"],"k") //true
  busquedaSecuencial(["a","b","c","d","f","g","h","i","j","k","l","m","n"],"o") //false