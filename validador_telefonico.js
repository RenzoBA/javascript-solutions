//Función para validar numeros telefónicos de EEUU:

function validadorTelefonico(telefono) {
    let numero = /^(1\s?)?(?:\d{3}|\(\d{3}\))(-|\s*)\d{3}(-|\s*)\d{4}$/;
    let evaluador = numero.test(telefono);
    return evaluador;
} 

validadorTelefonico("1 555-555-5555"); //true
validadorTelefonico("2 555-555-5555"); //false