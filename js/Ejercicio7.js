function obtenerValoresUnicos(arr) {
    return [...new Set(arr)]; // Crea un Set a partir del arreglo y lo convierte de nuevo a un arreglo
}

// Ejemplo de uso:
let numeros = [1, 2, 2, 3, 4, 4, 5];
let unicos = obtenerValoresUnicos(numeros);
console.log("Valores únicos:", unicos);
