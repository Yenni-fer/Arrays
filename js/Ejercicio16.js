function encontrarObjeto(arr, propiedad, valor) {
    return arr.find(obj => obj[propiedad] === valor); // Retorna el primer objeto que cumple con la condición
}

// Ejemplo de uso:
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 },
];

let personaEncontrada = encontrarObjeto(personas, "nombre", "Juan");
console.log(personaEncontrada); // { nombre: "Juan", edad: 30 }
