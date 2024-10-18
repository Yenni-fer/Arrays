function palabrasLargas(arr, n) {
    return arr.filter(function(palabra) {
      return palabra.length > n;
    });
  }
  
  // Ejemplo de uso
  let palabras = ["manzana", "pera", "uva", "naranja", "mango"];
  let resultado = palabrasLargas(palabras, 4);
  console.log(resultado);