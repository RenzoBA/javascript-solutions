//Número primo: evalúa si un número es primo o no

function numeroPrimo(numero) {
  let resultado = false;

  if(numero === 2) {
    return true;
  } else {
    for(i = 2; i < numero; i++) {
      if (numero % i) {
        resultado = true;
      } else {
        resultado = false;
        break;
      }
    }
  }
  return resultado;
}

numeroPrimo(673); //true
numeroPrimo(675); //false
