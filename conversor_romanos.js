// Arábicos a romanos: convierte un número arábico a numero romano

function conversorRomanos(num) {
    let numTexto = num.toString()
    let arr = numTexto.split("");
    let newArr = []
    
    //Invertir arreglo de dígitos:
    for (let i = 0; i<arr.length; i++) {
      newArr.unshift(arr[i])
    }
    //Conversión de Unidades:
    let resultado = "";
    if (newArr[0] != undefined) {
    let unidades = newArr[0].toString();
      if (unidades<=3) resultado = "I".repeat(unidades);
      if (unidades==4) resultado = "IV";
      if (5<=unidades && unidades<=8) resultado = "V"+"I".repeat(unidades-5);
      if (unidades==9) resultado = "IX";
    }
    //Conversión de Decenas:
    if (newArr[1] != undefined) {
      let decenas = newArr[1].toString();
      if (decenas<=3) resultado = "X".repeat(decenas) + resultado;
      if (decenas==4) resultado = "XL" + resultado;
      if (5<=decenas && decenas<=8) resultado = "L"+"X".repeat(decenas-5) + resultado;
      if (decenas==9) resultado = "XC" + resultado;
    }
    //Conversión de Centenas:
    if(newArr[2] != undefined) {
      let centenas = newArr[2].toString();
      if (centenas<=3) resultado = "C".repeat(centenas) + resultado;
      if (centenas==4) resultado = "CD" + resultado;
      if (5<=centenas && centenas<=8) resultado = "D"+"C".repeat(centenas-5) + resultado;
      if (centenas==9) resultado = "CM" + resultado;
    }
    //Conversión de Millares:
    if(newArr[3] != undefined) {
      let millares = newArr[3].toString();
      if (millares<=3) resultado = "M".repeat(millares) + resultado;
      if (millares==4) resultado = "Mv" + resultado;
      if (5<=millares && millares<=8) resultado = "v"+"M".repeat(millares-5) + resultado;
      if (millares==9) resultado = "Mx" + resultado;
    }
  return resultado;
  }
  
  conversorRomanos(129); //CXXIX
  conversorRomanos(3999); //MMMCMXCIX
