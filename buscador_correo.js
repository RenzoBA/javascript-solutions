// Buscador de correo: busca la dirección de correo electrónico en un texto

function buscadorCorreo (texto) {
    let arrTexto = texto.split(" ");
    for(const palabra of arrTexto) {
        let arrPalabra = palabra.split("")
        if (arrPalabra.some(letra => letra ==="@")) {
            return palabra
        };
    }
}

buscadorCorreo("Hola, mi correo es renzo@gmail.com") //renzo@gmail.com
buscadorCorreo("Mi correo es renzo123@gmail.com gracias") //renzo123@gmail.com