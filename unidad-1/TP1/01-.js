/* Dado un arreglo de numeros determinar cual es el
 mayor y mostrarlo, si eiste el numero cero una o más veces en el
 arreglo también mostrar "Hay un cero", pero una sola vez, Por EJ.:

    => [3, 4, 0, 3, 0, 9, 12, 5]
    12
    "Hay un cero"
        => [4, -4, 10, 23, 3, 4, 12, 50]
  50  */
var arreglo = [2, 0, 5, 6, 8, 44, 0];
var mayor = 0;
var contieneCero = false;
for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
    ;
    if (arreglo[i] === 0) {
        contieneCero = true;
    }
}
console.log(mayor);
if (contieneCero) {
    console.log("Hay un cero");
}
