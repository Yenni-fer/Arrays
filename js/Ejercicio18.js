function algunPar(arr) {
    return arr.some(num => num % 2 === 0); // Verifica si al menos un número es par
}

// Ejemplo de uso:
let numeros = [1, 3, 5, 7, 8];
console.log(algunPar(numeros)); // true
console.log(algunPar([1, 3, 5, 7])); // false
