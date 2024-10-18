function contarOcurrencias(arreglo, valor) {
    return arreglo.reduce((contador, elemento) => {
        // Si el elemento actual es igual al valor, incrementa el contador
        return elemento === valor ? contador + 1 : contador;
    }, 0); // Inicia el contador en 0
}


const valores = [1, 2, 3, 4, 1, 5, 1, 6, 1];
const valorBuscado = 1;

const resultado = contarOcurrencias(valores, valorBuscado);
console.log(`El valor ${valorBuscado} aparece ${resultado} veces.`);
