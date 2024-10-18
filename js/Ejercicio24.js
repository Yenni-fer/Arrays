function reemplazarNegativos(arr) {
    return arr.map(num => Math.abs(num)); // Reemplaza cada número negativo con su valor absoluto
}

// Ejemplo de uso:
let numeros = [-1, -2, 3, -4, 5];
let nuevosNumeros = reemplazarNegativos(numeros);
console.log("Arreglo con valores absolutos:", nuevosNumeros); // [1, 2, 3, 4, 5]
