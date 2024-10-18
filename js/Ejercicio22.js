function eliminarFalsy(arr) {
    return arr.filter(valor => Boolean(valor)); // Filtra los valores truthy
}

// Ejemplo de uso:
let valores = [0, "Hola", false, "", 42, null, "Mundo", undefined, NaN];
let filtrados = eliminarFalsy(valores);
console.log("Arreglo sin valores falsy:", filtrados); // ["Hola", 42, "Mundo"]
