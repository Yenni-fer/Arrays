function existeEnArreglo(arr, valor) {
    return arr.includes(valor); // Retorna true si el valor existe, false si no
}

// Ejemplo de uso:
let numeros = [1, 2, 3, 4, 5];
console.log(existeEnArreglo(numeros, 3)); // true
console.log(existeEnArreglo(numeros, 6)); // false
