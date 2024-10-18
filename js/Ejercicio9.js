function obtenerNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra los números pares
}

// Ejemplo de uso:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = obtenerNumerosPares(numeros);
console.log("Números pares:", pares); // [2, 4, 6, 8, 10]
