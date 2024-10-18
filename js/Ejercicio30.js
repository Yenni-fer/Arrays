function combinarObjetos(arreglo1, arreglo2) {
    return arreglo1.map((objeto, indice) => {
        // Combinar los objetos de ambos arreglos con el mismo índice
        return { ...objeto, ...arreglo2[indice] };
    });
}

// Ejemplo de uso
const arreglo1 = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Jose', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

const arreglo2 = [
    { ciudad: 'Madrid', país: 'España' },
    { ciudad: 'Barcelona', país: 'España' },
    { ciudad: 'Valencia', país: 'España' }
];

const resultado = combinarObjetos(arreglo1, arreglo2);
console.log(resultado);
