function unirEnCadena(arr) {
    return arr.join(", "); // Une las palabras con una coma y un espacio
}

// Ejemplo de uso:
let palabras = ["manzana", "banana", "pera", "naranja"];
let cadenaUnida = unirEnCadena(palabras);
console.log("Cadena unida:", cadenaUnida); // "manzana, banana, pera, naranja"
