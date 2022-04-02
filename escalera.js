// Escalera: dibuja una escalera de X escalones

function escalera (escalones) {
    let arr = [];

    for(i=0; i<escalones; i++) {
        arr.push("#");
        let numSpaces = escalones - 1 - i;
        arr.unshift(" ".repeat(numSpaces));
        arr.shift(" ".repeat(numSpaces));     
        console.log(arr.join(""));
    }
}

escalera(4);