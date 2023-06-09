function sumarArreglos(arreglo1, arreglo2) {
    if (arreglo1.length !== arreglo2.length) {
        throw new Error('Los arreglos deben tener la misma longitud');
    }
    var resultado = [];
    for (var i = 0; i < arreglo1.length; i++) {
        var suma = arreglo1[i] + arreglo2[i];
        resultado.push(suma);
    }
    return resultado;
}
;
// Ejemplo de uso
var arreglo1 = [1, 2, 3, 4];
var arreglo2 = [5, 6, 7, 8];
var resultado = sumarArreglos(arreglo1, arreglo2);
console.log(resultado); // [6, 8, 10, 12]
