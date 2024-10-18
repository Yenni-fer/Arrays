function convertirACadena(texto) {
    return texto.split(" "); // Divide la cadena en palabras usando el espacio como separador
}

// Ejemplo de uso:
let cadena = "Hola, cómo estás hoy";
let palabras = convertirACadena(cadena);
console.log("Arreglo de palabras:", palabras); // ["Hola,", "cómo", "estás", "hoy"]
