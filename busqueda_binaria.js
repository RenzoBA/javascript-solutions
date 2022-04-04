/* Busqueda binaria: busqueda eficiente de un elemento dividiendo repetidamente a la mitad del arreglo 
   hasta reducir su ubicación posible a sólo una. */

function busquedaBinaria (numeros, elemento) {
    let newArr = numeros.sort((a,b) => a-b);

    if (elemento < newArr[0] || elemento > newArr[newArr.length-1]) {
        return false;
    }

    while (newArr.length > 1) {
        let posicionMedia = Math.floor(newArr.length/2);
        let numeroMedio = newArr[posicionMedia];

        if (elemento === numeroMedio) {
            return true;
        }

        newArr = (elemento < numeroMedio) ? 
        newArr.splice(0,posicionMedia) : 
        newArr.splice(posicionMedia,newArr.length);
    }    
} 

  console.log(busquedaBinaria([12,11,7,4,5,9,10,15,13,1,2,14,3,6,8], 13)) //true
  console.log(busquedaBinaria([12,11,7,4,5,9,10,15,13,1,2,14,3,6,8], 16)) //false