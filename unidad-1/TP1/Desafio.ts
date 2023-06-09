/*
DESAFIÓ:Desarrolla una aplicación utilizando TypeScript que genere contraseñas seguras.
La aplicación debe seguir las siguientes pautas:
La aplicación debe generar una contraseña aleatoria de una longitud específica.
La contraseña debe incluir una combinación de letras mayúsculas, letras minúsculas,
números y caracteres especiales.
La contraseña generada debe ser mostrada en la consola.
Ten en cuenta las siguientes consideraciones:
Puedes utilizar cualquier librería de generación de contraseñas aleatorias que esté
disponible para TypeScript.
Asegúrate de que la aplicación sea fácil de usar y proporcione instrucciones claras al
usuario.
Puedes incluir características adicionales en tu aplicación,
como permitir al usuario especificar el conjunto de caracteres permitidos en la contraseña.
*/

// Importa la librería 'randomatic' para generar contraseñas aleatorias
import randomatic from 'randomatic';

// Función para generar una contraseña segura
function generarContrasena(longitud: number): string {
  const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Genera la contraseña aleatoria utilizando la librería 'randomatic'
  const contrasena = randomatic(caracteresPermitidos, longitud);

  return contrasena;
};

// Ejemplo de uso
const longitudContrasena = 10;
const contrasenaGenerada = generarContrasena(longitudContrasena);
console.log(`La contraseña generada es: ${contrasenaGenerada}`);
