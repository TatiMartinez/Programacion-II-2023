/*
Crear una función que calcule la nota final de una materia. Recibe como
parámetro un arreglo de números enteros que representa la nota de cada TP, calcular y
retornar el promedio del alumno.
*/

function calcularNotaFinal(notas: number[]): number {
    if (notas.length === 0) {
      return 0; // Si el arreglo está vacío, retornamos 0
    }
  
    const suma = notas.reduce((a, b) => a + b); // Sumamos todas las notas
    const promedio = suma / notas.length; // Calculamos el promedio
  
    return promedio;
  };

const notasTP = [80, 90, 70, 85, 95];
const promedioFinal = calcularNotaFinal(notasTP);
console.log(promedioFinal);
