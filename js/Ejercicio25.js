function estaVacio(arr) {
    return arr.every(elemento => false); // Devuelve true si todos los elementos son falsos, lo que significa que no hay elementos
}

// Ejemplo de uso:
console.log(estaVacio([])); // true
console.log(estaVacio([1, 2, 3])); // false
