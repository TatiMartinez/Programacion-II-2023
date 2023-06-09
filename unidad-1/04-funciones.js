function suma(a, b) {
    return a + b;
}
;
suma(2, 7);
//otra forma de definir una function"
var multi = function (a, b) { return a * b; };
//otro tipo de funcion que valida si el parametro es valido, operador terniario
var firstCheck = true;
// condicion ? "true" : "false"
var access = firstCheck ? "Acceso Permitido" : "Acceso Denegado";
console.log(access);
