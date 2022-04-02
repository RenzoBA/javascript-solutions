//Calcula el precio final (con descuento) de un artículo

function miDescuento (precio, descuentoPorcentual) {
    let precioConDescuento = precio*(1-descuentoPorcentual*0.01);
    return precioConDescuento;
}

miDescuento(5000,50); //2500
miDescuento(1000,30); //700