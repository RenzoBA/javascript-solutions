// Conversión horaria: convierte la hora del sistema AM/PM al sistema 24h

function conversionHoraria(s) {
    let cadena = s.slice(2,8);
    let horas = s.slice(0,2);

    (horas == 12 && s[8] === "P") ? horas = 12 : 
    (horas == 12 && s[8] === "A") ? horas = "00" : 
    s[8] === "P" && (horas = parseInt(horas) + 12);

    return horas + cadena;
    
}

conversionHoraria("05:05:45PM"); //17:05:45
conversionHoraria("11:19:42PM"); //23:19:42