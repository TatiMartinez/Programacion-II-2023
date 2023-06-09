/*
Dados 2 arreglos de números enteros de la misma longitud, obtener un
nuevo arreglo a partir de la suma de los elementos de ambos arreglos en la misma
posición, y mostrar el arreglo resultante.
*/

function sumarArreglos(arreglo1: number[], arreglo2: number[]): number[] {
  if (arreglo1.length !== arreglo2.length) {
    throw new Error('Los arreglos deben tener la misma longitud');
  }
  
    const resultado: number[] = [];
  
    for (let i = 0; i < arreglo1.length; i++) {
      const suma = arreglo1[i] + arreglo2[i];
      resultado.push(suma);
    }
  
    return resultado;
};
  

const arreglo1 = [1, 2, 3, 4];
const arreglo2 = [5, 6, 7, 8];
  
const resultado = sumarArreglos(arreglo1, arreglo2);
console.log(resultado);