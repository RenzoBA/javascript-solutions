// gridChallenge: Dada una matriz cuadrada de letras, reordena alfabeticamente los elementos de cada fila de manera ascendente
// y determina si las columnas tambien están ordenadas (alfabeticamente y ascendentemente). Regresa "YES" si se cumple esta
// condición y "NO" si no se cumple. 

function gridChallenge(grid) {
    let newGrid = [];
    let currentLetter;
    
    for (let row of grid) {
        newGrid.push(row.split("").sort().join(""))
    }
    
    for (let i = 0; i < grid.length; i++) {
        currentLetter = newGrid[0][i];
    
        for (let j = 1; j < grid.length; j++) {
            if (currentLetter > newGrid[j][i]) {
                return "NO";
            }
            currentLetter = newGrid[j][i]            
        }
    }
    return "YES";
}

console.log(gridChallenge(["abc", "ade", "efg"])) // YES
console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"])) // YES